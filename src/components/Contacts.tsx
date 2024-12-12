// import wa from "../icons/whatsapp.png"
// import locate from "../icons/locate.svg"
// import mail from "../icons/mail.svg"

export default function Workexp() {
  return (
    <>
      <div
        id="contacts"
        className="flex items-center justify-center gap-28 bg-navbar p-10 max-xl:flex-col max-xl:gap-10"
      >
        <h1 className="text-black max-xl:underline">CONTACTS</h1>

        <div className="logoContact">
          <img
            src="/icons/whatsapp.png"
            alt="Whatsapp icon"
            className="w-[25px]"
          />
          <p className="text-sm text-black">+62-812-9092-7605</p>
        </div>

        <div className="logoContact">
          <img src="/icons/mail.svg" alt="Email icon" className="w-[25px]" />
          <p className="text-sm text-black">dharmasenaakmalaji@outlook.com</p>
        </div>

        <div className="logoContact">
          <img src="/icons/locate.svg" alt="Adress icon" className="w-[25px]" />
          <p className="text-sm text-black">jl. Masjid Al-Anwar No.18</p>
        </div>
      </div>
    </>
  );
}
