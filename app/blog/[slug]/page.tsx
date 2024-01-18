import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import Link from 'next/link';

// ブログ記事一覧を取得
const postsDirectory = path.join(process.cwd(), 'contents');
const fileNames = fs.readdirSync(postsDirectory);
const posts = fileNames.map((fileName) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  return {
    slug: fileName.replace(/\.md$/, ''),
    frontmatter: data,
  };
});

// ブログ記事ページ
export default async function BlogPost({ params }: { params: any }) {
  // URLのパラメータから該当するファイル名を取得 (今回は hello-world)
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'contents', `${slug}.md`);

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const title = data.title; // 記事のタイトル
  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
  const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h2>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}