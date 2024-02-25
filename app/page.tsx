import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ばとらの部屋",
  description: "batora's portfolio",
};

export default function Home() {
  return (
    <div className="bg-black flex-col flex min-h-screen">
      <div className="bg-black flex items-center justify-center flex-grow flex-col">
        <img src="/favicon.ico" alt="logo" className="h-32 w-32" />
        <h1 className="text-white text-4xl font-bold">BATORA</h1>
        <p className="text-white">SOFTWARE / WEB ENGINEER</p>
      </div>
      <footer className="bg-gray-800 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <p className="text-white">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
