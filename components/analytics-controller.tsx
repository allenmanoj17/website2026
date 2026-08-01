"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
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

  useEffect(() => {
    void trackAnalyticsEvent("$pageview", {
      page_path: pathname,
      ...deriveTrafficAttribution(window.location.href, document.referrer),
    });
  }, [pathname]);

  useEffect(() => {
    const seen = new Set<string>();
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
  }, [pathname]);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("[data-analytics-article-body]");
    const articleSlug = article?.dataset.analyticsArticleBody;
    if (!article || !articleSlug) {
      return;
    }

    const milestones = [50, 90];
    const sent = new Set<number>();
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
  }, [pathname]);

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
