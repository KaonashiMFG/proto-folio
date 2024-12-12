import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workexp from "./components/Workexp";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// import LogoAnimation from "./components/LogoAnimation";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="mx-auto max-w-[950px]">
        <Hero />

        <Workexp />

        <Skills />

        <Testimonials />
      </main>

      <Contacts />

      <footer>
        <Footer />
      </footer>
    </>
  );
}
