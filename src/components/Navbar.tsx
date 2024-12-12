import { useState, useEffect } from "react";

export default function Navbar() {
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // If the screen size is larger than the xl breakpoint, close the sidebar
      if (window.innerWidth >= 1280) {
        setBurger(false);
      }
    };

    // Attach event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-navbar p-2 px-5">
      {/* Title */}
      <p className="font-rubik font-bold text-black">Dharmasena A.A.</p>

      {/* Burger Button */}
      <div className="xl:hidden">
        <button onClick={() => setBurger(!burger)}>
          <svg
            className="h-8 w-8 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden gap-5 rounded-xl p-2 xl:flex">
        <a
          href="#hero"
          className="onHover border-2 border-transparent px-3 font-rubik font-normal"
        >
          About
        </a>
        <a
          href="#workexp"
          className="onHover border-2 border-transparent px-3 font-rubik font-normal"
        >
          Experience
        </a>
        <a
          href="#skills"
          className="onHover border-2 border-transparent px-3 font-rubik font-normal"
        >
          Skills
        </a>
        <a
          href="#testimonials"
          className="onHover border-2 border-transparent px-3 font-rubik font-normal"
        >
          Testimonials
        </a>
        <a
          href="#contacts"
          className="onHover border-2 border-transparent px-3 font-rubik font-normal"
        >
          Contact
        </a>
      </div>

      {/* Socials */}
      <div className="hidden gap-3 xl:flex">
        <a href="https://www.linkedin.com/in/dharmasena-aji-024765234/">
          <img src="/icons/linkedin.svg" alt="linkedin" className="w-8" />
        </a>
        <a href="https://www.instagram.com/urenunknacdb/">
          <img src="/icons/instagram.svg" alt="instagram" className="w-8" />
        </a>
        <a href="https://github.com/KaonashiMFG">
          <img src="/icons/github.svg" alt="github" className="w-8" />
        </a>
      </div>

      {/* Burger Menu (Mobile Drawer) */}
      <div
        className={`fixed right-0 top-0 z-40 h-full w-64 transform bg-navbar shadow-lg ${
          burger ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setBurger(false)}
          className="absolute right-5 top-5 text-2xl font-bold text-black"
        >
          ×
        </button>

        {/* Menu Items */}
        <div className="mt-20 flex flex-col items-start gap-5 p-5">
          <a
            href="#hero"
            className="onHover border-2 border-transparent px-3 font-rubik font-normal text-black"
          >
            About
          </a>
          <a
            href="#workexp"
            className="onHover border-2 border-transparent px-3 font-rubik font-normal text-black"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="onHover border-2 border-transparent px-3 font-rubik font-normal text-black"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="onHover border-2 border-transparent px-3 font-rubik font-normal text-black"
          >
            Testimonials
          </a>
          <a
            href="#contacts"
            className="onHover border-2 border-transparent px-3 font-rubik font-normal text-black"
          >
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="mt-5 flex gap-3 p-5">
          <a href="https://www.linkedin.com/in/dharmasena-aji-024765234/">
            <img src="/icons/linkedin.svg" alt="linkedin" className="w-8" />
          </a>
          <a href="https://www.instagram.com/urenunknacdb/">
            <img src="/icons/instagram.svg" alt="instagram" className="w-8" />
          </a>
          <a href="https://github.com/KaonashiMFG">
            <img src="/icons/github.svg" alt="github" className="w-8" />
          </a>
        </div>
      </div>

      {/* Overlay (close the menu when clicking outside) */}
      {burger && (
        <div
          onClick={() => setBurger(false)}
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
        ></div>
      )}
    </nav>
  );
}
