export default function Header() {
  return (
    <header className="bg-gray-800 px-4 py-2 flex justify-between items-center rounded-br-3xl rounded-bl-3xl">
      <div className="flex">
        <a href="/" className="md:px-16 flex items-center">
          <img src="/favicon.ico" alt="logo" className="h-12 w-12 mx-auto mr-3" />
          <p className="text-white text-2xl font-bold">batoran.com</p>
        </a>
      </div>
      <nav className="flex space-x-4">
        <a href="/" className="text-white hover:text-white text-xl hover:underline">
          Home
        </a>
        <a href="/about" className="text-white hover:text-white text-xl hover:underline">
          About
        </a>
        <a href="/blog" className="text-white hover:text-white text-xl hover:underline">
          Blog
        </a>
        <a href="/work" className="text-white hover:text-white text-xl hover:underline">
          Work
        </a>
        <a href="mailto:batora.dev@gmail.com" className="text-white hover:text-white text-xl hover:underline md:pr-16">
          Contact
        </a>
      </nav>
    </header>
  );
}