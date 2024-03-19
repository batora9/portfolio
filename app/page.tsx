import Link from "next/link";
import { Metadata } from "next";
import { SiX, SiGithub } from 'react-icons/si';

export const metadata: Metadata = {
  title: "ばとらの部屋",
  description: "batora's portfolio",
};

export default function Home() {
  return (
    <div className="flex bg-black flex-col min-h-screen">
      <div className="bg-black flex items-center justify-center flex-grow flex-col">
        <img src="/favicon.ico" alt="logo" className="h-32 w-32" />
        <h1 className="text-white text-4xl font-bold">BATORA</h1>
        <p className="text-white">SOFTWARE / WEB ENGINEER</p>
      </div>
      <footer className="bg-gray-800 py-6 mt-auto rounded-tl-3xl rounded-tr-3xl">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex space-x-4 justify-center">
              <a href="/about" className="text-white hover:text-white text-xl hover:underline">
                About
              </a>
              <a href="/blog" className="text-white hover:text-white text-xl hover:underline">
                Blog
              </a>
              <a href="/work" className="text-white hover:text-white text-xl hover:underline">
                Work
              </a>
              <a href="mailto:batora.dev@gmail.com" className="text-white hover:text-white text-xl hover:underline">
                Contact
              </a>
              <a href="https://github.com/batora9" target="_blank" rel="noreferrer">
                <SiGithub className="h-6 w-6 text-white" />
              </a>
              <a href="https://x.com/265" target="_blank" rel="noreferrer">
                <SiX className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
      </footer>
    </div>
  );
}
