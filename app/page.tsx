import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black h-screen flex items-center justify-center flex-col">
      <img src="/favicon.ico" alt="logo" className="h-32 w-32" />
      <h1 className="text-white text-4xl font-bold">BATORA</h1>
      <p className="text-white">SOFTWARE / WEB ENGINEER</p>
    </div>
  );
}