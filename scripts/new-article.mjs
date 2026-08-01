import path from "node:path";
import { createArticleFile } from "./article-utils.mjs";

const title = process.argv.slice(2).join(" ").trim();

try {
  const filePath = createArticleFile({
    title,
    contentDir: path.join(process.cwd(), "content", "writing"),
  });
  console.log(`Created ${path.relative(process.cwd(), filePath)}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
