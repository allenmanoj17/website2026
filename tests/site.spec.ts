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
      await expect(contents.getByRole("link")).toHaveCount(7);
      await expect(page.locator("#visuals figure")).toHaveCount(2);
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
      "Sentinel",
    ]);

    await expect(systems.getByText("In development", { exact: true }).first()).toBeVisible();
    await expect(systems.getByRole("heading", { name: "BrandScan" })).toHaveCount(0);
    await expect(systems.getByText("Reporting Automation", { exact: false })).toHaveCount(0);
  });

  test("AIRS has no visible development status", async ({ page }) => {
    await visit(page, "/work/airs");
    await expect(page.getByText("Revenue intelligence system", { exact: true })).toBeVisible();
    await expect(page.getByText("In development", { exact: true })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Current evidence" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Next validation" })).toBeVisible();
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
    expect(body).not.toContain("/work/plunk");
    expect(body).not.toContain("reporting-automation");
  });

  test("llms.txt describes current systems and evidence boundaries", async ({ request }) => {
    const response = await request.get("/llms.txt");
    expect(response.ok()).toBeTruthy();
    const body = await response.text();

    expect(body).toContain("Automated Intelligence Revenue System (AIRS)");
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
