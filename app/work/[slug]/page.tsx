import './content.css';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { Metadata } from "next";
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from "rehype-pretty-code";
import 'katex/dist/katex.min.css';
import rehypeStringify from 'rehype-stringify';
import remarkRehype from 'remark-rehype';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface Props {
  params: { 
    work: string;
    slug: string
  };
  searchParams: {};
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "works");
  const posts = fs.readdirSync(postsDirectory);
  const paths = [];
  for (const post of posts) {
    const workPostsDirectory = path.join(process.cwd(), "works");
    const posts = fs.readdirSync(workPostsDirectory);
    paths.push({ slug: post.replace(".md", "") });
  }
  return paths;
}

// ブログ記事ページ
export default async function WorkPost( { params } : Props ) {
  const { slug, work } = params;
  // ファイルのパスを取得
  const filePath = path.join(process.cwd(), "works", `${slug}.md`);

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
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkHtml)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypePrettyCode)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString(); // マークダウンをHTMLに変換

  return (
    <div className="flex bg-black flex-col min-h-screen">
      <Header />
      <div className="bg-black px-6 py-12 pb-16 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-white">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </p>
          <p className="mt-2 text-sm text-gray-400">作成日 {date}</p>
        </div>
        <div
          className="prose prose-lg text-white mx-auto max-w-3xl mt-8"
          id='markdown-body'
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
      <Footer />
    </div>
  );
}