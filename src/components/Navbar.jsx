export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="font-bold text-2xl text-indigo-700">
        Resume Builder
      </h1>

      <a
        href="https://digitalheroesco.com"
        target="_blank"
        rel="noreferrer"
        className="
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          px-5
          py-2
          rounded-xl
          transition
        "
      >
        Built for Digital Heroes
      </a>

    </nav>
  );
}