import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  { path: "/", heading: "I turn fragmented data into decision systems people trust." },
  {
    path: "/work",
    heading: "Selected systems, with the decisions and boundaries visible.",
  },
  { path: "/work/lens", heading: "Lens" },
  { path: "/work/airs", heading: "Automated Intelligence Revenue System (AIRS)" },
  { path: "/work/distributionos", heading: "DistributionOS" },
  { path: "/work/sentinel", heading: "Sentinel" },
  { path: "/work/brandscan", heading: "BrandScan" },
  { path: "/about", heading: "I build the path from source data to operational software." },
  { path: "/writing", heading: "Writing" },
  {
    path: "/writing/visibility-problem",
    heading: "Most teams do not have a data problem. They have a visibility problem.",
  },
  { path: "/contact", heading: "Send me the messy version." },
  { path: "/privacy", heading: "Privacy policy" },
];

const visualRoutes = [
  routes[0],
  routes[1],
  routes[2],
  routes[3],
  routes[4],
  routes[5],
  routes[6],
  routes[7],
  routes[8],
];

async function visit(page: Page, path: string) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(path);
}

test.describe("route smoke checks", () => {
  for (const route of routes) {
    test(`${route.path} renders core content`, async ({ page }) => {
      await visit(page, route.path);
      await expect(page.getByRole("heading", { name: route.heading, level: 1 })).toBeVisible();
      await expect(page).toHaveTitle(/Allen Manoj|Data|Work|About|Writing|Contact|Privacy/);
      await expect(page.locator("main")).toBeVisible();
    });
  }
});

test.describe("project and content contract", () => {
  for (const projectPath of [
    "/work/lens",
    "/work/airs",
    "/work/distributionos",
    "/work/sentinel",
    "/work/brandscan",
  ]) {
    test(`${projectPath} uses the complete case-study structure`, async ({ page }) => {
      await visit(page, projectPath);

      const contents = page.getByRole("navigation", { name: "Case study sections" });
      await expect(contents).toBeVisible();
      await expect(contents.getByRole("link")).toHaveCount(5);
      await expect(page.locator("#visuals figure")).toHaveCount(2);
      if (projectPath === "/work/brandscan") {
        await expect(page.getByText("Design representation", { exact: false })).toHaveCount(0);
        await expect(page.getByText("Current crawl results", { exact: false })).toBeVisible();
      } else {
        await expect(page.getByText("Design representation", { exact: false })).toBeVisible();
      }
      await expect(page.getByRole("heading", { name: "Current evidence" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Limitations" })).toBeVisible();
      await expect(page.getByRole("heading", { name: "Next validation" })).toBeVisible();
    });
  }

  test("homepage shows the four featured systems in order", async ({ page }) => {
    await visit(page, "/");
    const systems = page.locator("#systems");

    const headings = await systems.locator("h3").allTextContents();
    expect(headings).toEqual([
      "Lens",
      "Automated Intelligence Revenue System (AIRS)",
      "DistributionOS",
      "BrandScan",
    ]);

    await expect(systems.getByText("In development", { exact: true }).first()).toBeVisible();
    await expect(systems.locator('[aria-label$="system flow"]')).toHaveCount(4);
    await expect(systems.getByText("Evidence", { exact: true })).toHaveCount(0);
    await expect(systems.getByRole("heading", { name: "Sentinel" })).toHaveCount(0);
    await expect(systems.getByText("Reporting Automation", { exact: false })).toHaveCount(0);
  });

  test("homepage keeps credibility, writing, and engagement proof concise", async ({ page }) => {
    await visit(page, "/");

    await expect(
      page.getByText("Independent data and AI systems builder", { exact: true }),
    ).toBeVisible();
    await expect(page.getByText("Featured article", { exact: false })).toHaveCount(1);
    await expect(page.getByText("Diagnose", { exact: true })).toBeVisible();
    await expect(page.getByText("Build", { exact: true })).toBeVisible();
    await expect(page.getByText("Validate and hand off", { exact: true })).toBeVisible();
    await expect(page.getByText("Founder of Lens", { exact: false })).toHaveCount(0);
  });

  test("writing search ranks fuzzy matches and handles empty results", async ({ page }) => {
    await visit(page, "/writing");

    const search = page.getByLabel("Search writing");
    await search.fill("dashbord");
    await expect(
      page.getByRole("heading", { name: "What makes a dashboard useful enough to act on" }),
    ).toBeVisible();

    await search.fill("visibilty");
    await expect(
      page.getByRole("heading", {
        name: "Most teams do not have a data problem. They have a visibility problem.",
      }),
    ).toBeVisible();
    await expect(page.getByText("Featured", { exact: true })).toBeVisible();

    await search.fill("quantum-potato-forecast");
    await expect(page.getByText("No articles found.")).toBeVisible();

    await page.getByRole("button", { name: "Clear search" }).click();
    await expect(page.getByText("3 published articles")).toBeVisible();
    await expect(page.getByText("Read featured article")).toBeVisible();
  });

  test("AIRS has no visible development status", async ({ page }) => {
    await visit(page, "/work/airs");
    await expect(page.getByText("Revenue intelligence system", { exact: true })).toBeVisible();
    await expect(page.getByText("In development", { exact: true })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Current evidence" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Next validation" })).toBeVisible();
  });

  test("work keeps Sentinel as deployed proof outside the featured systems", async ({ page }) => {
    await visit(page, "/work");

    const featured = page.locator("#selected-systems");
    await expect(featured.getByRole("heading", { name: "BrandScan" })).toBeVisible();
    await expect(featured.getByRole("heading", { name: "Sentinel" })).toHaveCount(0);
    const deployedProof = page.locator('section[aria-labelledby="sentinel-proof-title"]');
    await expect(deployedProof.getByText("Deployed engineering proof", { exact: true })).toBeVisible();
    await expect(deployedProof.getByRole("heading", { name: "Sentinel" })).toBeVisible();
    await expect(deployedProof.getByRole("link", { name: "Open current build" })).toBeVisible();
    await expect(deployedProof.getByRole("link", { name: "View source" })).toBeVisible();
  });

  test("BrandScan exposes its current proof and token download", async ({ page, request }) => {
    await visit(page, "/work/brandscan");

    await expect(page.getByText("Working website crawl", { exact: true })).toBeVisible();
    await expect(page.getByText("Extracted colour and typography results", { exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Sample design-token output" })).toHaveAttribute(
      "download",
      "",
    );

    const response = await request.get("/projects/brandscan/sample-tokens.json");
    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("application/json");
    const tokens = await response.json();
    expect(tokens.source.tool).toBe("BrandScan");
  });

  test("legacy project routes redirect to their approved destinations", async ({ page }) => {
    await page.goto("/work/plunk");
    await expect(page).toHaveURL(/\/work\/airs$/);
    await expect(
      page.getByRole("heading", {
        name: "Automated Intelligence Revenue System (AIRS)",
        level: 1,
      }),
    ).toBeVisible();

    await page.goto("/work/reporting-automation-demo");
    await expect(page).toHaveURL(/\/work$/);
  });

  test("contact links use the public Gmail address", async ({ page }) => {
    await visit(page, "/contact");
    const emailLinks = page.locator('a[href^="mailto:"]:visible');
    await expect(emailLinks.first()).toBeVisible();

    for (const href of await emailLinks.evaluateAll((links) =>
      links.map((link) => link.getAttribute("href")),
    )) {
      expect(href).toContain("allenmanoj17@gmail.com");
      expect(href).not.toContain("allen@allenmanoj.com");
    }
  });

  test("external links use safe new-tab attributes", async ({ page }) => {
    await visit(page, "/about");
    const externalLinks = page.locator('a[target="_blank"]');
    expect(await externalLinks.count()).toBeGreaterThan(0);

    for (const rel of await externalLinks.evaluateAll((links) =>
      links.map((link) => link.getAttribute("rel")),
    )) {
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });
});

test.describe("discovery and metadata endpoints", () => {
  test("sitemap contains AIRS and Contact but not removed project routes", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.ok()).toBeTruthy();
    const body = await response.text();

    expect(body).toContain("https://allenmanoj.com/work/airs");
    expect(body).toContain("https://allenmanoj.com/contact");
    expect(body).toContain("https://allenmanoj.com/writing/visibility-problem");
    expect(body).not.toContain("/work/plunk");
    expect(body).not.toContain("reporting-automation");
  });

  test("llms.txt describes current systems and evidence boundaries", async ({ request }) => {
    const response = await request.get("/llms.txt");
    expect(response.ok()).toBeTruthy();
    const body = await response.text();

    expect(body).toContain("Automated Intelligence Revenue System (AIRS)");
    expect(body).toContain("BrandScan");
    expect(body).toContain("Deployed engineering proof");
    expect(body).toContain("current evidence");
    expect(body).toContain("allenmanoj17@gmail.com");
    expect(body).not.toContain("Plunk");
  });

  test("robots allows search and AI crawlers", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.ok()).toBeTruthy();
    const body = await response.text();

    expect(body).toContain("GPTBot");
    expect(body).toContain("ClaudeBot");
    expect(body).toContain("PerplexityBot");
    expect(body).toContain("Sitemap: https://allenmanoj.com/sitemap.xml");
  });

  test("project Open Graph images resolve for dynamic project routes", async ({ request }) => {
    const response = await request.get("/work/airs/opengraph-image");
    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("image/png");
  });

  test("writing RSS and article Open Graph images resolve", async ({ request }) => {
    const feed = await request.get("/rss.xml");
    expect(feed.ok()).toBeTruthy();
    expect(feed.headers()["content-type"]).toContain("application/rss+xml");
    const feedBody = await feed.text();
    expect(feedBody).toContain("Most teams do not have a data problem");
    expect(feedBody).toContain("https://allenmanoj.com/writing/visibility-problem");

    const image = await request.get("/writing/visibility-problem/opengraph-image");
    expect(image.ok()).toBeTruthy();
    expect(image.headers()["content-type"]).toContain("image/png");
  });
});

test.describe("navigation and accessibility", () => {
  test("skip link reaches the main landmark", async ({ page }) => {
    await visit(page, "/");
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Skip to content" });
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  test("mobile navigation exposes and closes an accessible menu", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await visit(page, "/");
    const button = page.locator('button[aria-controls="mobile-navigation"]');
    await button.click();

    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toHaveCount(0);
  });

  test("reduced motion reveals all content without transitions", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    await expect(page.locator('[data-reveal][data-visible="false"]')).toHaveCount(0);
  });

  for (const route of routes) {
    test(`${route.path} has no WCAG A or AA axe violations`, async ({ page }) => {
      await visit(page, route.path);
      await expect(page.locator("main")).toBeVisible();

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      expect(results.violations).toEqual([]);
    });
  }
});

test.describe("visual regression", () => {
  for (const route of visualRoutes) {
    test(`${route.path} visual baseline`, async ({ page }, testInfo) => {
      await visit(page, route.path);
      await page.waitForLoadState("networkidle");
      await expect(page.getByRole("heading", { name: route.heading, level: 1 })).toBeVisible();

      const name = route.path === "/" ? "home" : route.path.replaceAll("/", "-").replace(/^-/, "");
      await expect(page).toHaveScreenshot(`${name}-${testInfo.project.name}.png`, {
        fullPage: true,
        animations: "disabled",
      });
    });
  }
});
