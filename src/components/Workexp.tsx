import { useState } from "react";
import jetro from "../images/Jetro-1-1170x600.png";

export default function Workexp() {
  const [showExperience, setShowExperience] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnimation = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="p-20 mt-10">
      <h1 className="flex justify-center items-center">
        WORK EXPERIENCE
      </h1>

      {/* jetro */}
      <div className="flex justify-center items-center mt-5">
        {/* image container */}
        <div
          className={`hover:cursor-pointer hover:animate-pulse rounded-3xl overflow-hidden transform transition-transform duration-500 ${
            isOpen ? "translate-x-[-5%] scale-75" : "translate-x-0 scale-100"
          }`}
          onClick={() => {
            setShowExperience(!showExperience);
            toggleAnimation();
          }}
        >
          <img
            src={jetro}
            alt="JETRO"
            className={`w-60 cursor-pointer`}
          />
        </div>

        {/* description container */}
        <div
          className={`ml-4 text-xl font-semibold text-gray-800 transition-all duration-500 transform ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
          }`}
        >
          {showExperience ? (
            <div className="flex flex-col ml-10">
              <h1 className="text-[30px] m-3">
                Staff for JETRO Survey Project
              </h1>
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
                  • Coordinated with Indonesian expatriate facilities
                  (apartments, hotels, schools, industrial parks) to gather
                  essential relocation information.
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
