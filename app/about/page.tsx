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
                    <div className="mt-10 sm:mt-16">
                        <h2 className="text-2xl font-bold">Profile</h2>
                        <p className="mt-4 text-gray-400">
                            関東在住で20歳の情報系の学科所属の大学生です。
                            趣味はプログラミング、ボウリング、野球、ゲーム、車などなど...
                        </p>
                        <p className="mt-4 text-gray-400">
                            最近では、主にWindowsアプリケーションやWebアプリケーションを作ったり、アルゴリズムや競技プログラミングを触る程度に勉強しています。
                        </p>
                    </div>
                    <div className="mt-10 sm:mt-16">
                        <h2 className="text-2xl font-bold">Background</h2>
                        <p className="mt-4 text-gray-400">
                            小学2年生の時に野球を始め、小学4年生の時に親に買ってもらったパソコンでプログラミングを始めました。はじめはC#を使って簡単なアプリを作ったりしていました。中学・高校では野球部に所属し、勉強と部活を両立していました。大学に入ってからは、プログラミングのサークルに所属し、Webや競技プログラミングを勉強しています。
                        </p>
                    </div>
                    <div className="mt-10 sm:mt-16">
                        <h2 className="text-2xl font-bold">Skills</h2>
                        <p className="mt-4 text-gray-400">
                            主に、TypeScriptを使ったWebアプリケーションの開発や、C#を使ったWindowsアプリケーションの開発をしています。また、Goを使ったバックエンドやC++でアルゴリズムの勉強しています。
                        </p>
                    </div>
                    <div className="mt-10 sm:mt-16">
                        <h2 className="text-2xl font-bold">Certification</h2>
                        <p className="mt-4 text-gray-400">
                            - 実用英語技能検定2級 (2022/11/22)
                        </p>
                    </div>
                    <div className="mt-10 sm:mt-16">
                        <h2 className="text-2xl font-bold">Contact</h2>
                        <p className="mt-4 text-gray-400">
                            お問い合わせは
                            <a href="/contact" rel="noreferrer" className="text-blue-400 hover:underline">
                                こちら
                            </a>
                            からお願いします。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}