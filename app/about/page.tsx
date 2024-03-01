import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "ばとらについてまとめたページです。",
};

export default function About() {
    return (
        <div className="bg-black text-white flex-col min-h-screen py-24 sm:py-16">
            <h1 className="text-4xl font-bold tracking-tight text-center text-gray-200 sm:text-5xl">
                About Me
            </h1>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <div className="flex justify-center mt-10 space-y-4 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
                        <img src="/favicon.ico" alt="logo" className="h-32 w-32 mx-8" />
                        <div className="text-center">
                          <h2 className="text-2xl font-bold">ばとら</h2>
                          <p className="text-lg text-gray-400">Software / Web Engineer</p>
                            <div className="flex justify-center space-x-4 my-2">
                              <a href="https://github.com/batora9" target="_blank" rel="noreferrer">
                                <img src="/github-mark-white.svg" alt="github" className="h-6 w-6" />
                              </a>
                              <a href="https://x.com/265" target="_blank" rel="noreferrer">
                                <img src="/logo-white.png" alt="twitter" className="h-6 w-6" />
                              </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}