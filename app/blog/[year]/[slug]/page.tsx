import './content.css';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface Props {
  params: { 
    year: string;
    slug: string
  };
  searchParams: {};
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "contents");
  const years = fs.readdirSync(postsDirectory);
  const paths = [];
  for (const year of years) {
    const yearPostsDirectory = path.join(process.cwd(), "contents", year);
    const posts = fs.readdirSync(yearPostsDirectory);
    for (const post of posts) {
      paths.push({ year, slug: post.replace(".md", "") });
    }
  }
  return paths;
}

// ブログ記事ページ
export default async function BlogPost( { params } : Props ) {
  const { slug, year } = params;
  // ファイルのパスを取得
  const filePath = path.join(process.cwd(), "contents", year, `${slug}.md`);

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const title = data.title; // 記事のタイトル
  const description = data.description; // 記事のディスクリプション
  const date = data.date; // 記事の日付

  metadata.title = title; // ページのタイトルを記事のタイトルにする
  metadata.description = data.description; // ページのディスクリプションを記事のディスクリプションにする

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

  return (
    <div className="flex bg-black flex-col min-h-screen">
      <Header />
      <div className="bg-black px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-white">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </p>
          <p className="mt-2 text-sm text-gray-400">作成日 {date}</p>
        </div>
        <div
          className="prose prose-lg text-white mx-auto max-w-3xl mt-8"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
      <Footer />
    </div>
  );
}