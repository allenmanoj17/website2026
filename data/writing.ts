export type ExternalArticle = {
  title: string;
  platform: string;
  date: string;
  href: string;
};

export const articles: ExternalArticle[] = [
  {
    title: "Is Machine Learning the Only Way for Data Visualisation?",
    platform: "Medium - Techiepedia",
    date: "2022",
    href: "https://medium.com/techiepedia/is-machine-learning-the-only-way-for-data-visualization-27e760803bea",
  },
  {
    title: "Microsoft Azure for Artificial Intelligence and Machine Learning",
    platform: "Medium - Analytics Vidhya",
    date: "2022",
    href: "https://medium.com/analytics-vidhya/azure-for-ai-ml-76b91274c391",
  },
  {
    title: "Headstart in Deep-Tech - Data Science and Machine Learning",
    platform: "Medium - Techiepedia",
    date: "2022",
    href: "https://medium.com/techiepedia/head-start-in-deep-tech-4e2195db3849",
  },
];
