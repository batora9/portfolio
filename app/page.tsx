import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const getMarkdownsFromContentsDir = async () => {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  const postsDirectory = path.join(process.cwd(), "contents");
  const fileNames = fs.readdirSync(postsDirectory);

  // 各ファイルの中身を取得
  const posts = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      // slugとfrontmatter(title, date, description)を取得
      return {
        slug: fileName.replace(".md", ""),
        frontmatter: data,
      };
    })
  ).then((posts) =>
    // 最新日付順に並び替え
    posts.sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1))
  );

  return posts;
};

export default async function Blogs() {
  const posts = await getMarkdownsFromContentsDir();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h2>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="group relative">
                  {/* 日付を表示 */}
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center">
                      <time dateTime={post.frontmatter.date}>
                        {post.frontmatter.date}
                      </time>
                    </div>
                  </div>
                  {/* 記事タイトル・リンク */}
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-blue-700 group-hover:text-blue-400">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-3 text-lg font-semibold leading-6 text-blue-700 group-hover:text-blue-400"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  {/* 記事説明文を表示 */}
                  <p
                    className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
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
