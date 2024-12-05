import { useState } from "react";

import jetro from "../images/Jetro-1-1170x600.png"

export default function LogoAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnimation = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background border ">
      <div
        className={`flex items-center transition-all duration-500 ${
          isOpen ? "translate-x-[-5%]" : "translate-x-0"
        }`}
        onClick={toggleAnimation}
      >

        <div className="flex justify-center items-center m-5 hover:cursor-pointer hover:animate-pulse rounded-3xl overflow-hidden">
          <img
            src={jetro}
            alt="Logo"
            className={`w-60 cursor-pointer ${
              isOpen ? "scale-75" : "scale-100"
            } transition-all duration-500`}
          />
        </div>

        <span
          className={`ml-4 text-xl font-semibold text-gray-800 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col ml-10">
            <h1 className="text-[30px] m-3">Staff for JETRO Survey Project</h1>
            <ul className="flex flex-col gap-3">
              <li>
                • Engaged with Japanese companies to encourage survey
                participation and ensure representation.
              </li>
              <li>
                • Managed data entry for survey responses into the JETRO
                database using MS Excel and MS Access.
              </li>
              <li>
                • Coordinated with Indonesian expatriate facilities (apartments,
                hotels, schools, industrial parks) to gather essential
                relocation information.
              </li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  );
}
