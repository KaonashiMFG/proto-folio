import me from "../images/mememe.jpg";

export default function Hero() {
  return (
    <div
      id="hero"
      className="mt-[50px] flex items-center justify-center bg-boxColor p-10 max-xl:flex-col"
    >
      {/* image */}
      <div className="h-[510px] w-[800px] max-xl:h-[23rem] max-xl:w-[15rem]">
        <img
          src={me}
          alt="DHARMASENA"
          className="max-xl:h-[23rem] max-xl:w-[15rem]"
        />
      </div>

      {/* description */}
      <div className="z-10 m-10 flex flex-col">
        <p>Hello, I'm Dharmasena,</p>

        <h1 className="font-poppins text-[80px] text-header max-xl:text-[40px]">
          FULL-STACK WEB DEVELOPER
        </h1>

        <p className="text-right">Based in Indonesia</p>

        <p className="pl-19 mt-10 text-right">
          Dharmasena Akmal Aji is a student of Japanese Studies at University of
          Indonesia. Despite his lack of experience, he is highly motivated to
          learn and discover new experience in various interest. Such as
          languages, computing, and photography.
        </p>
      </div>
    </div>
  );
}
