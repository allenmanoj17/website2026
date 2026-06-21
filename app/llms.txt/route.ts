export function GET() {
  const body = `# Allen Manoj

Allen Manoj builds data, reporting, and AI workflow systems from Sydney, Australia.

## Core topics
- Data pipelines and analytics engineering
- Reporting systems and dashboard automation
- Product and revenue intelligence
- AI workflow automation
- Data products and internal tooling

## Featured systems
- Lens: website analysis product that turns website signals into prioritised fixes.
- Reporting Automation Demo: small-business reporting workflow with dashboards, summaries, and exception alerts.
- Plunk: simulated revenue intelligence case study for product usage and sales action.
- Sentinel: open-source web intelligence system for evidence-backed alerts.
- BrandScan: internal tool for extracting design tokens from websites.

## Key pages
- Home: https://allenmanoj.com/
- Work: https://allenmanoj.com/work
- About: https://allenmanoj.com/about
- Writing: https://allenmanoj.com/writing

## Contact
Email: allen@allenmanoj.com
GitHub: https://github.com/allenmanoj17
LinkedIn: https://linkedin.com/in/allenmanoj
X: https://x.com/AllenManoj87
Medium: https://allenmanoj.medium.com/
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
