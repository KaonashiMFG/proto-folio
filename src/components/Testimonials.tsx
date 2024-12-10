import testimonials from "../data/json/Testimonials.json";

export default function Testimonials() {
  return (
    <>
      <div className="flex flex-col justify-center text-center m-20">
        {/* Responsive header */}
        <h1 className="text-3xl lg:text-5xl sm:text-4xl text-header">
          TESTIMONIALS
        </h1>
        <p className="mt-2 text-sm lg:text-base sm:text-md">
          Innovative solutions, creative designs, and a passion for excellence
        </p>

        {/* Flex container for testimonials */}
        <div className="flex flex-wrap gap-10 mt-10 justify-center">
          {testimonials.map((el) => (
            <div className="flex flex-col gap-7 p-10 items-center max-w-64 border border-gray-200 rounded-lg shadow-lg sm:flex-col sm:w-full lg:w-1/3">
              {/* Profile Picture */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-navbar">
                <img src={el.img} alt={el.people} />
              </div>
              {/* Person and Title */}
              <div className="h-24">
                <h1 className="text-xl text-navbar">{el.people}</h1>
                <h1 className="text-[13px]">{el.title}</h1>
              </div>
              {/* Comments */}
              <p className="text-sm -mt-5">{el.comments}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
