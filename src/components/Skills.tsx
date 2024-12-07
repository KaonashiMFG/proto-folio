import tools from "../data/json/Tools.json"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    centerMode: true, 
    centerPadding: "0", 
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-7 m-10 p-20 bg-boxColor rounded-full">
        <h1 className="-mt-10 mb-2 text-3xl">TOOLS</h1>

        <div className="w-full max-w-4xl">
          <Slider {...settings}>
            {tools.map((el, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-3 text-center"
              >
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

      <style jsx global>{`
        .slick-dots li button:before {
          color: white;
      }`}</style>
    </>
  );
}
