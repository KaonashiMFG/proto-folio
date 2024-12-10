import { useState } from "react";
import jetro from "../images/Jetro-1-1170x600.png";

export default function Workexp() {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <div className="p-4 mt-10">
      <h1 className="flex justify-center items-center">
        WORK EXPERIENCE
      </h1>

      {/* JETRO Section */}
      <div className="flex flex-col items-center mt-5 gap-5">
        {/* Image Container */}
        <div
          className="hover:cursor-pointer hover:animate-pulse rounded-3xl overflow-hidden transform transition-transform duration-500"
          onClick={() => setShowExperience(!showExperience)}
        >
          <img
            src={jetro}
            alt="JETRO"
            className="w-60 md:w-80"
          />
        </div>

        {/* Description Container */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showExperience ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 text-center md:text-left">
            <h1 className="text-lg m-3">
              Staff for JETRO Survey Project
            </h1>
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
                • Coordinated with Indonesian expatriate facilities
                (apartments, hotels, schools, industrial parks) to gather
                essential relocation information.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
