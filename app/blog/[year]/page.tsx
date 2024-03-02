import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "contents");
  const years = fs.readdirSync(postsDirectory);
  const paths = [];
  for (const year of years) {
    paths.push({ year });
  }
  return paths;
}

const getMarkdownsFromDir = async (dir: string) => {
  const fileNames = fs.readdirSync(dir);
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(dir, fileName);

      // ファイルの中身を取得
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // ファイル名からカテゴリを取得
      return {
        slug: fileName.replace(".md", ""),
        content,
        frontmatter: data,
      };
    })
  ).then((posts) =>
    // 日付でソート
    posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
  );

  return posts;
};

// { params: { year: '2024' }, searchParams: {} }
interface Props {
  params: { year: string };
  searchParams: {};
}

export default async function BlogYearList({params} : Props) {
  const posts = [];
  // content/[year]ディレクトリ内の各カテゴリフォルダ内の記事を取得
  const postsDirectory = path.join(process.cwd(), "contents", params.year);
  const postsInDirectory = await getMarkdownsFromDir(postsDirectory);
  posts.push(...postsInDirectory);

  // ページのタイトルとディスクリプションを設定
  metadata.title = `${params.year}年の記事一覧`;
  metadata.description = `${params.year}年の記事一覧`;

  return (
    <div className="bg-black text-white flex-col min-h-screen py-24 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-center text-gray-200 sm:text-5xl">
        {params.year}年のブログ
      </h1>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mt-10 space-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex max-w-xl flex-col items-start justify-between border-r border-b border-l border-t border-gray-200 pb-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-lg bg-gray-800"
              >
                <div className="group relative">
                  {/* 日付を表示 */}
                  <div className="mt-3 mx-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <time dateTime={post.frontmatter.date}>
                        {post.frontmatter.date}
                      </time>
                    </div>
                  </div>
                  {/* 記事タイトル・リンク */}
                  <h3 className="mt-2 mx-4 text-lg font-semibold leading-6 text-blue-400 group-hover:text-blue-700">
                    <Link
                      href={`/blog/${params.year}/${post.slug}`}
                      className="mt-2 text-lg font-semibold leading-6 text-blue-400 group-hover:text-blue-700"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  {/* 記事説明文を表示 */}
                  <p
                    className="mt-5 mx-4 line-clamp-3 text-sm leading-6 text-gray-400"
                    dangerouslySetInnerHTML={{
                      __html: `${post.frontmatter.description}`,
                    }}
                  ></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
