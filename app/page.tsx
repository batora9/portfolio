import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black h-screen flex flex-col justify-center">
      <h1 className="text-4xl text-center text-white">Welcome to my page!</h1>
      <p className="text-center text-white">This is my first Next.js page.</p>
      <a href="/blogs" className="text-center text-white">
        Blogs
      </a>
      <div className="flex">
        <img src="/favicon.ico" alt="favicon" className="size-32" />
        <h1 className="text-4xl text-center text-white">Batora9</h1>
        <Link
          href="https://github.com/batora9"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <img
            src="/github-mark-white.svg"
            alt="github"
            className="mx-auto size-8"
          />
        </Link>
        <Link
          href="https://x.com/265"
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <img src="/logo-white.png" alt="x" className="mx-auto size-8" />
        </Link>
      </div>
    </div>
  );
}