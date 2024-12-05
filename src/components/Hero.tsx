import me from "../images/mememe.jpg";

export default function Hero() {
    return (
      <div className="flex p-10 bg-boxColor mt-20 mr-10 ml-5 rounded-lg">
        {/* image */}
        <div className="mb-10 w-[800px] h-[600px] overflow-hidden">
          <img src={me} alt="DHARMASENA w-[900px] h-[500px]" />
        </div>

        {/* description */}
        <div className="flex flex-col m-10 -ml-20">
          <p>Hello, I'm Dharmasena,</p>

          <h1 className="text-[80px] text-header font-poppins">
            FULL-STACK WEB DEVELOPER
          </h1>

          <p className="text-right ">Based in Indonesia</p>

          <p className="text-right mt-10">
            Dharmasena Akmal Aji is a student of Japanese Studies at University
            of Indonesia. Despite his lack of experience, he is highly motivated
            to learn and discover new experience in various interest. Such as
            languages, computing, and photography.
          </p>
        </div>
      </div>
    )
}