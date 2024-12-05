export default function Navbar() {
  return (
    <nav className="flex justify-between fixed items-center p-2 px-5 bg-navbar w-full shadow-xl z-50">
      {/* title */}
      <p className="text-black font-bold font-rubik">Dharmasena A.A.</p>

      {/* menu */}
      <div className="flex p-2 gap-16 rounded-xl">
        <a className="onHover font-rubik font-normal border-2 px-3 border-transparent">Home</a>
        <a className="onHover font-rubik font-normal border-2 px-3 border-transparent">About</a>
        <a className="onHover font-rubik font-normal border-2 px-3 border-transparent">Contact</a>
      </div>

      {/* socials */}
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/dharmasena-aji-024765234/">
          <img src="/src/icons/linkedin.svg" alt="linkedin" className="w-8" />
        </a>
        <a href="https://www.instagram.com/urenunknacdb/">
          <img src="/src/icons/instagram.svg" alt="instagram" className="w-8" />
        </a>
        <a href="https://github.com/KaonashiMFG">
          <img src="/src/icons/github.svg" alt="github" className="w-8" />
        </a>
      </div>
    </nav>
  );
}
