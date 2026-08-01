export function GET() {
  const body = `# Allen Manoj

Allen Manoj is a data and AI systems builder based in Sydney, Australia. He turns fragmented data into decision systems people can inspect, trust, and act on.

## Core work
- Analytics infrastructure and data contracts
- Revenue intelligence and explainable scoring
- Applied AI workflows with evidence and evaluation boundaries
- Monitoring systems and operational interfaces

## Featured systems
- [Lens](https://allenmanoj.com/work/lens): website intelligence system in development. Its current design separates deterministic, heuristic, and AI-assisted diagnostics and keeps evidence, confidence, affected URLs, and rule versions attached to findings.
- [Automated Intelligence Revenue System (AIRS)](https://allenmanoj.com/work/airs): revenue intelligence system design connecting BigQuery, dbt, explainable scoring, SHAP, Airflow, and an operational sales interface. Evaluation and reliability work that is not yet evidenced is labelled as next validation.
- [DistributionOS](https://allenmanoj.com/work/distributionos): evidence-first content system in development for privacy-bounded source retrieval, grounded drafting, comparative editing, style learning, visual generation, publishing, and behavioural analytics.
- [BrandScan](https://allenmanoj.com/work/brandscan): current website-extraction build that turns a working crawl into colour, typography, component, contrast, and reusable design-token outputs. A sample token export is available from the case study.

## Deployed engineering proof
- [Sentinel](https://allenmanoj.com/work/sentinel): deployed, open-source monitoring system that separates deterministic change detection from AI significance evaluation and preserves source evidence before routing alerts. [Current build](https://sentinel-ai.up.railway.app/) · [Source](https://github.com/allenmanoj17/sentinel).

## Evidence policy
Project pages separate current system design, current evidence, limitations, and next validation. The site does not present planned benchmarks, evaluation results, or reliability tests as completed evidence.

## Earlier technical work
The Work page includes a compact section covering Morsel, Haven, AWS data infrastructure, applied machine learning, analytics, and research systems.

## Writing
- [Most teams do not have a data problem. They have a visibility problem.](https://allenmanoj.com/writing/visibility-problem)
- [What makes a dashboard useful enough to act on](https://allenmanoj.com/writing/useful-dashboard)
- [How I think about AI workflows: inputs, checks, logs, fallbacks, and outputs](https://allenmanoj.com/writing/ai-workflow-systems)

## Key pages
- [Home](https://allenmanoj.com/)
- [Selected systems](https://allenmanoj.com/work)
- [About](https://allenmanoj.com/about)
- [Writing](https://allenmanoj.com/writing)
- [Contact](https://allenmanoj.com/contact)
- [Privacy](https://allenmanoj.com/privacy)

## Contact and profiles
- Email: [allenmanoj17@gmail.com](mailto:allenmanoj17@gmail.com)
- GitHub: [github.com/allenmanoj17](https://github.com/allenmanoj17)
- LinkedIn: [linkedin.com/in/allenmanoj](https://linkedin.com/in/allenmanoj)
- X: [x.com/AllenManoj87](https://x.com/AllenManoj87)
- Medium: [allenmanoj.medium.com](https://allenmanoj.medium.com/)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
