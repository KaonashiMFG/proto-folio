import { useState } from "react";
import jetro from "../images/Jetro-1-1170x600.avif";

export default function Workexp() {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <div id="workexp" className="mt-10 p-4">
      <h1 className="flex items-center justify-center">WORK EXPERIENCE</h1>

      {/* JETRO Section */}
      <div className="mt-5 flex flex-col items-center gap-5">
        {/* Image Container */}
        <div
          className="transform overflow-hidden rounded-3xl transition-transform duration-500 hover:animate-pulse hover:cursor-pointer"
          onClick={() => setShowExperience(!showExperience)}
        >
          <img src={jetro} alt="JETRO" className="w-60 md:w-80" />
        </div>

        {/* Description Container */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showExperience ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 text-center md:text-left">
            <h1 className="m-3 text-lg">Staff for JETRO Survey Project</h1>
            <ul className="flex flex-col gap-2">
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
        </div>
      </div>
    </div>
  );
}
