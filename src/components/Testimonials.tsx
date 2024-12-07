import testimonials from "../data/json/Testimonials.json"

export default function Testimonials() {
  return (
    <>
      <div className="flex flex-col justify-center text-center m-20 ">
        <h1>TESTIMONIALS</h1>

        <p >Innovative solutions, creative designs, and a passion for excellence</p>

        <div className="flex gap-10 mt-10 justify-center">
        {testimonials.map((el) => (
            <div className="flex flex-col gap-7 p-10 items-center max-w-64">
                <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-navbar">
                    <img src={el.img} alt={el.people} className="relative bottom-0"/>
                </div>
                <h1 className="text-xl">{el.people}</h1>
                <p>{el.comments}</p>
            </div>
        ))}
        </div>
      </div>
    </>
  );
}
