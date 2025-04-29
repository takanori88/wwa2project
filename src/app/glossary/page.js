import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc'; // ←ここ！
import remarkGfm from 'remark-gfm'; // ←ここ！

export default async function GlossaryPage() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'glossary.md');
  const source = await fs.readFile(filePath, 'utf8');

  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm]
      }
    }
  });

  return (
    <div className="prose prose-lg mx-auto p-4 prose-p:mt-4 prose-table:border prose-table:border-gray-300 prose-th:px-4 prose-td:px-4">
      {content}
    </div>
  );
}
