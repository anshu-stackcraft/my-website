import { Link } from "react-router-dom";
import { useEffect } from "react";
import { IoRocket } from "react-icons/io5";
import heroImg from "../assets/anshulaptop.png";
import dexImg from "../assets/dex.png";
import shopImg from "../assets/shop.png";
import berojgarImg from "../assets/phone.png";
import webImg from "../assets/myweb.png";


const HomePage = () => {



  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const onScroll = () => {
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-black text-white  overflow-hidden">

      {/* ================= HERO ================= */}
{/* ================= HERO ================= */}
<section className="
  min-h-screen flex flex-col-reverse md:flex-row
  items-center justify-center md:justify-between
  px-5 md:px-24
  bg-linear-to-br from-black via-zinc-900 to-black
">

  {/* ========= TEXT ========= */}
  <div className="text-center md:text-left max-w-xl">

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
      Build the <span className="text-orange-500">Future</span><br />
      With <span className="text-orange-500">Code</span>
    </h1>

    <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
      I’m a <span className="text-orange-500 font-semibold">Full-Stack Developer </span>
      specializing in building fast, secure and scalable web applications
      using <span className="text-orange-500">React</span>,
      <span className="text-orange-500"> Django</span> & modern tools.
    </p>

    <div className="flex justify-center md:justify-start gap-4">
      <Link
        to="/register"
        className="bg-orange-500  hover:bg-orange-600 text-black px-7 py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 hover:scale-105"
      >
        Get Started
      </Link>

      <Link
        to="/login"
        className="border active:scale-95 border-orange-500 px-7 py-3 rounded-xl font-semibold
        hover:bg-orange-500 hover:text-black transition-all duration-200"
      >
        Login
      </Link>
    </div>
  </div>

  {/* ========= IMAGE ========= */}
  <div className="relative mt-16 md:mb-0">

  <img
  src={heroImg}
  alt="Developer"
  className="
    w-80 sm:w-[320px] md:w-125
    -translate-y-12 sm:-translate-y-16 md:translate-y-0
    animate-float
    rounded-xl
    border border-orange-500/20
    shadow-2xl
    backdrop-blur-sm
    drop-shadow-[0_30px_60px_rgba(255,140,0,0.5)]
  "
/>


    {/* Glow effect */}
    <div className="absolute inset-0 -z-10 rounded-full bg-orange-500/20 blur-3xl"></div>

  </div>
</section>



      {/* ================= ABOUT ================= */}
      <section className="py-28 px-6 md:px-24 bg-zinc-950">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src={webImg}
            alt="Web Design"
            className="rounded-xl shadow-lg reveal opacity-0 translate-y-10 transition-all duration-700"
          />
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-orange-500">Me</span>
            </h2>
            <p className="text-gray-400 text-lg">
              I’m a passionate full-stack developer focused on building
              production-ready applications. From UI design to backend logic,
              I handle everything with performance and scalability in mind.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-24 px-6 md:px-24 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 ">
          Tech <span className="text-orange-500">Stack</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {["React", "Django", "REST API", "Tailwind", "PostgreSQL", "JWT Auth", "Git", "Docker"].map((skill) => (
            <div key={skill} className="bg-zinc-900 p-6 rounded-xl reveal opacity-0 transition duration-600 active:scale-95 hover:scale-110">
              <p className="text-orange-500 font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-28 px-6 md:px-24 bg-zinc-950">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-orange-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <Project img={dexImg} title="Developer Platform" />
          <Project img={shopImg} title="E-Commerce App" />
          <Project img={berojgarImg} title="Job Portal" />
        </div>
      </section>

      {/* ================= FUTURE ================= */}
      <section className="py-28 px-6 md:px-24 bg-linear-to-r from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Building for the <span className="text-orange-500">Future</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Focused on scalable architecture, clean code and long-term
            maintainability. Always learning, always improving.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-orange-500 text-black text-center">
        <h2 className="text-xl lg:text-4xl font-extrabold mb-6">
          Let’s Build Something Great
        </h2>
        <Link
          to="/hireme"
          className="inline-block bg-black text-orange-500 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-zinc-900 transition active:scale-95 hover:scale-105"
        >
          Hire Me <IoRocket className="inline ml-2" />
        </Link>
      </section>
     
    </div>
  );
};

/* ================= COMPONENTS ================= */

const Project = ({ img, title }) => (
  <div className="bg-zinc-900 rounded-xl p-6 text-center reveal opacity-0 translate-y-10 transition duration-700 hover:-translate-y-2">
    <img src={img} alt={title} className="h-44 mx-auto mb-6 rounded-lg object-contain" />
    <h3 className="text-xl font-semibold text-orange-500">{title}</h3>
    <p className="text-gray-400 mt-3">
      Real-world project with full-stack implementation.
    </p>
  </div>
);

export default HomePage;
