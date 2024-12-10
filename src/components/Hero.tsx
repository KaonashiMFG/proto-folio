import me from "../images/mememe.jpg";

export default function Hero() {
    return (
      <div id="hero" className="flex p-10 bg-boxColor mt-[50px] max-xl:flex-col">
        {/* image */}
        <div className="w-[800px] h-[510px] max-xl:w-[15rem] max-xl:h-[23rem]">
          <img src={me} alt="DHARMASENA" className="max-xl:w-[15rem] max-xl:h-[23rem]"/>
        </div>

        {/* description */}
        <div className="flex flex-col m-10 z-10">
          <p>Hello, I'm Dharmasena,</p>

          <h1 className="text-[80px] text-header font-poppins max-xl:text-[40px]">
            FULL-STACK WEB DEVELOPER
          </h1>

          <p className="text-right ">Based in Indonesia</p>

          <p className="text-right mt-10 pl-19">
            Dharmasena Akmal Aji is a student of Japanese Studies at University
            of Indonesia. Despite his lack of experience, he is highly motivated
            to learn and discover new experience in various interest. Such as
            languages, computing, and photography.
          </p>
        </div>
      </div>
    )
}