import { expect, test } from "@playwright/test";

type PerformanceMetrics = {
  lcp: number;
  cls: number;
  blockingTime: number;
  scriptBytes: number;
  htmlBytes: number;
};

function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

test("homepage stays within the local mobile performance budget", async ({ browser }, testInfo) => {
  test.skip(
    process.env.PERFORMANCE_TEST !== "1",
    "Run the isolated performance budget with npm run test:performance.",
  );
  test.skip(testInfo.project.name !== "mobile-chrome", "The performance budget uses one mobile profile.");
  test.setTimeout(120_000);

  const baseURL = String(testInfo.project.use.baseURL);
  const runs: PerformanceMetrics[] = [];

  for (let run = 0; run < 3; run += 1) {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
    });
    const page = await context.newPage();
    const session = await context.newCDPSession(page);

    await session.send("Network.enable");
    await session.send("Network.setCacheDisabled", { cacheDisabled: true });
    await session.send("Network.emulateNetworkConditions", {
      offline: false,
      latency: 150,
      downloadThroughput: 200_000,
      uploadThroughput: 93_750,
      connectionType: "cellular4g",
    });
    await session.send("Emulation.setCPUThrottlingRate", { rate: 4 });

    await page.addInitScript(() => {
      window.__portfolioPerformance = {
        lcp: 0,
        cls: 0,
        blockingTime: 0,
      };

      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.__portfolioPerformance.lcp = entry.startTime;
        }
      }).observe({ type: "largest-contentful-paint", buffered: true });

      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceEntryList & LayoutShift[]) {
          if (!entry.hadRecentInput) {
            window.__portfolioPerformance.cls += entry.value;
          }
        }
      }).observe({ type: "layout-shift", buffered: true });

      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.__portfolioPerformance.blockingTime += Math.max(0, entry.duration - 50);
        }
      }).observe({ type: "longtask", buffered: true });
    });

    await page.goto(`${baseURL}/`, { waitUntil: "load" });
    await page.waitForTimeout(2_500);

    runs.push(
      await page.evaluate(() => {
        const navigation = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        const resources = performance.getEntriesByType(
          "resource",
        ) as PerformanceResourceTiming[];

        return {
          lcp: window.__portfolioPerformance.lcp,
          cls: window.__portfolioPerformance.cls,
          blockingTime: window.__portfolioPerformance.blockingTime,
          scriptBytes: resources
            .filter((resource) => resource.initiatorType === "script")
            .reduce((total, resource) => total + resource.transferSize, 0),
          htmlBytes: navigation.transferSize,
        };
      }),
    );

    await context.close();
  }

  const result = {
    lcp: median(runs.map((run) => run.lcp)),
    cls: median(runs.map((run) => run.cls)),
    blockingTime: median(runs.map((run) => run.blockingTime)),
    scriptBytes: median(runs.map((run) => run.scriptBytes)),
    htmlBytes: median(runs.map((run) => run.htmlBytes)),
  };

  await testInfo.attach("performance-metrics.json", {
    body: JSON.stringify(result, null, 2),
    contentType: "application/json",
  });

  expect(result.lcp).toBeLessThan(2_000);
  expect(result.cls).toBeLessThan(0.05);
  expect(result.blockingTime).toBeLessThan(200);
  expect(result.scriptBytes).toBeLessThanOrEqual(160 * 1_024);
  expect(result.htmlBytes).toBeLessThanOrEqual(25 * 1_024);
});

declare global {
  interface LayoutShift extends PerformanceEntry {
    hadRecentInput: boolean;
    value: number;
  }

  interface Window {
    __portfolioPerformance: {
      lcp: number;
      cls: number;
      blockingTime: number;
    };
  }
}
