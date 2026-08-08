"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ANALYTICS_CONSENT_EVENT, getAnalyticsConsent } from "@/lib/analytics-consent";
import {
  analyticsEvents,
  deriveTrafficAttribution,
  trackAnalyticsEvent,
  type AnalyticsEvent,
} from "@/lib/analytics";

function isAnalyticsEvent(value: string | undefined): value is AnalyticsEvent {
  return Boolean(value && analyticsEvents.includes(value as AnalyticsEvent));
}

export default function AnalyticsController() {
  const pathname = usePathname();
  const [consentVersion, setConsentVersion] = useState(0);

  useEffect(() => {
    const handleConsentChange = () => setConsentVersion((value) => value + 1);
    window.addEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChange);
  }, []);

  useEffect(() => {
    if (getAnalyticsConsent() !== "granted") return;
    void trackAnalyticsEvent("$pageview", {
      page_path: pathname,
      ...deriveTrafficAttribution(window.location.href, document.referrer),
    });
  }, [pathname, consentVersion]);

  const seenSectionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    seenSectionsRef.current = new Set();
  }, [pathname]);

  useEffect(() => {
    const seen = seenSectionsRef.current;
    const sections = document.querySelectorAll<HTMLElement>("[data-analytics-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = (entry.target as HTMLElement).dataset.analyticsSection;
          if (!entry.isIntersecting || !sectionId || seen.has(sectionId)) {
            continue;
          }

          seen.add(sectionId);
          observer.unobserve(entry.target);
          void trackAnalyticsEvent("section_viewed", { section_id: sectionId });
        }
      },
      { threshold: 0.25 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname, consentVersion]);

  const sentMilestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    sentMilestonesRef.current = new Set();
  }, [pathname]);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("[data-analytics-article-body]");
    const articleSlug = article?.dataset.analyticsArticleBody;
    if (!article || !articleSlug) {
      return;
    }

    const milestones = [50, 90];
    const sent = sentMilestonesRef.current;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = article.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(100, ((window.innerHeight - rect.top) / Math.max(rect.height, 1)) * 100),
      );

      for (const milestone of milestones) {
        if (progress >= milestone && !sent.has(milestone)) {
          sent.add(milestone);
          void trackAnalyticsEvent("article_read_progress", {
            article_slug: articleSlug,
            milestone,
          });
        }
      }
    };

    const scheduleMeasure = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(measure);
      }
    };

    measure();
    window.addEventListener("scroll", scheduleMeasure, { passive: true });
    window.addEventListener("resize", scheduleMeasure);
    return () => {
      window.removeEventListener("scroll", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname, consentVersion]);

  useEffect(() => {
    if (getAnalyticsConsent() !== "granted") return;

    let cancelled = false;
    void import("web-vitals").then(({ onCLS, onINP, onLCP }) => {
      if (cancelled) return;

      const report = (metric: { name: "CLS" | "INP" | "LCP"; value: number; rating: string }) => {
        const isCls = metric.name === "CLS";
        void trackAnalyticsEvent("web_vital_measured", {
          metric_name: metric.name,
          metric_value: Math.round(metric.value * (isCls ? 1000 : 1)),
          metric_unit: isCls ? "thousandths" : "ms",
          rating: metric.rating,
        });
      };

      onCLS(report);
      onINP(report);
      onLCP(report);
    });

    return () => {
      cancelled = true;
    };
  }, [pathname, consentVersion]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const element = target.closest<HTMLElement>("[data-analytics-event]");
      const analyticsEvent = element?.dataset.analyticsEvent;
      if (!element || !isAnalyticsEvent(analyticsEvent)) {
        return;
      }

      void trackAnalyticsEvent(analyticsEvent, {
        location: element.dataset.analyticsLocation,
        destination: element.dataset.analyticsDestination,
        project_slug: element.dataset.analyticsProject,
        link_type: element.dataset.analyticsLinkType,
        article_slug: element.dataset.analyticsArticle,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
