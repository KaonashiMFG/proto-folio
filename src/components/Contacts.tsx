export default function Workexp() {
  return (
    <>
      <div
        id="contacts"
        className="flex items-center justify-center gap-28 bg-boxColor p-10 max-xl:flex-col max-xl:gap-10"
      >
        <h1 className="text-header max-xl:underline">CONTACTS</h1>

        <div className="logoContact">
          <img
            src="/icons/whatsapp.svg"
            alt="Whatsapp icon"
            className="w-[25px]"
          />
          <p className="text-sm text-header">+62-812-9092-7605</p>
        </div>

        <div className="logoContact">
          <img src="/icons/mail.svg" alt="Email icon" className="w-[25px]" />
          <p className="text-sm text-header">dharmasenaakmalaji@outlook.com</p>
        </div>

        <div className="logoContact">
          <img src="/icons/locate.svg" alt="Adress icon" className="w-[25px]" />
          <p className="text-sm text-header">jl. Masjid Al-Anwar No.18</p>
        </div>
      </div>
    </>
  );
}
