"use client";
import Link from "next/link";
import { useState } from "react";

export default function HeaderShort() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <header className="bg-gray-800 px-4 py-2 flex justify-between items-center rounded-br-3xl rounded-bl-3xl">
        <div className="flex">
            <a href="/" className="md:px-16 flex items-center">
            <img src="/favicon.ico" alt="logo" className="h-12 w-12 mx-auto mr-3" />
            <p className="text-white text-2xl font-bold">batoran.com</p>
            </a>
        </div>

      <nav
        className={
          isOpen
            ? "z-40 bg-gray-800 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
            : "fixed right-[-100%] md:right-4"
        }
      >
        <ul
          className={
            isOpen
              ? "flex h-screen justify-center items-center flex-col gap-6 text-xl"
              : "block md:flex md:gap-8"
          }
        >
            <li>
                <Link href="/" onClick={handleMenuClose} className="text-xl text-white hover:underline">
                Home
                </Link>
            </li>
            <li>
                <Link href="/about" onClick={handleMenuClose} className="text-xl text-white hover:underline">
                About
                </Link>
            </li>
            <li>
                <Link href="/blog" onClick={handleMenuClose} className="text-xl text-white hover:underline">
                Blog
                </Link>
            </li>
            <li>
                <Link href="/work" onClick={handleMenuClose} className="text-xl text-white hover:underline">
                Work
                </Link>
            </li>
            <li>
                <a href="mailto:batora.dev@gmail.com" onClick={handleMenuClose} className="text-xl text-white hover:underline pr-4">
                Contact
                </a>
            </li>
        </ul>
      </nav>
      <button className="z-50 space-y-2 md:hidden" onClick={handleMenuOpen}>
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
        <span
          className={
            isOpen
              ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
              : "block w-8 h-0.5 bg-gray-600 duration-300"
          }
        />
      </button>
    </header>
  );
}