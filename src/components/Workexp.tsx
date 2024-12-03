import { useState } from "react";

import jetro from "../images/Jetro-1-1170x600.png";

export default function Workexp() {
    const [showExperience, setShowExperience] = useState(false);

    return (
    <div className=" p-1 mt-10 rounded-lg ">
            <h1 className="flex text-header text-[50px] justify-center items-center font-poppins">
            WORK EXPERIENCE
            </h1>

            {/* jetro */}
            <div className="flex justify-center items-center mt-5">
            {/* image container */}
            <div
                className="hover:cursor-pointer hover:animate-pulse rounded-3xl overflow-hidden"
                onClick={() => setShowExperience(!showExperience)}
            >
                <img src={jetro} alt="JETRO" className="w-60" />
            </div>

            {showExperience ? (
                <div className="flex flex-col m-3">
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
    )
}
