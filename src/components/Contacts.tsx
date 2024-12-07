import wa from "../icons/whatsapp.png"
import locate from "../icons/locate.svg"
import mail from "../icons/mail.svg"

export default function Workexp() {
  return (
    <>
      {/* <div className="flex items-center justify-center gap-3 border bg-navbar border-white w-full"> */}
        <div className="p-10 bg-navbar flex gap-28 justify-center items-center">
        <h1 className="text-black">CONTACTS</h1>

          <div className="logoContact">
            <img src= {wa} alt= "Whatsapp icon" className="w-[25px]"/>
            <p className="text-sm text-black">+62-812-9092-7605</p>
          </div>

          <div className="logoContact">
            <img src= {mail} alt="Email icon"/>
            <p className="text-sm text-black">dharmasenaakmalaji@outlook.com</p>
          </div>

          <div className="logoContact">
            <img src= {locate} alt="Adress icon"/>
            <p className="text-sm text-black">jl. Masjid Al-Anwar No.18</p>
          </div>

        </div>
      {/* </div> */}
    </>
  );
}
