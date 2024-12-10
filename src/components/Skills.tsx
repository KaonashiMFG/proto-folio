import tools from "../data/json/Tools.json";
import projects from "../data/json/Projects.json"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 m-10 p-20 bg-boxColor rounded-full">
        <h1 className="-mt-10 mb-2 text-3xl">TOOLS</h1>

        <div className="w-full max-w-4xl">
          <Slider {...settings}>
            {tools.map((el) => (
              <div className="flex flex-col justify-center items-center gap-3 text-center">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={el.img}
                    alt={el.name}
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <span className="text-white text-sm">{el.name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* <style jsx global>{`
        .slick-dots li button:before {
          color: white;
      }`}</style> */}

      <div className="m-20 p-3 max-xl:m-0 max-xl:p-0">
        <div className="bg-secondBoxColor p-7">
          <h1>PROJECTS</h1>
          <p>I have done some projects, such as ...</p>
        </div>
        {projects.map((el) => (
              <div className="flex gap-20 mt-10 items-center justify-center max-xl:flex-col max-xl:gap-10 max-xl:mt-20 max-xl:p-">
                <div className="rounded-xl overflow-hidden">
                  <img src={el.img} alt={el.projectName} className="max-h-60"/>
                </div>
                <div className="flex flex-col gap-3 w-[50%] ">
                  <h1 className="text-navbar text-4xl">{el.projectName}</h1>
                  <h1 className="text-sm">{el.intro}</h1>
                  <p>{el.desc}</p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
