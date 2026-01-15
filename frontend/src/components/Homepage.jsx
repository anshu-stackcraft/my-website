import { Link } from "react-router-dom";

import bgImage from "../assets/myweb.png";
import bg2 from "../assets/bg.png";
import bg3 from "../assets/dex.png";
import bg4 from "../assets/berojgar.png";
import bg5 from "../assets/shop.png";

function App() {

  const colors = [
    { name: "Red", bg: "bg-red-600" },
    { name: "Blue", bg: "bg-blue-600" },
    { name: "Green", bg: "bg-green-600" },
    { name: "Yellow", bg: "bg-yellow-600" },
    { name: "Purple", bg: "bg-purple-600" },
    { name: "Pink", bg: "bg-pink-600" },
    { name: "Indigo", bg: "bg-indigo-600" },
    { name: "Teal", bg: "bg-teal-600" },
    { name: "Cyan", bg: "bg-cyan-600" },
    { name: "Lime", bg: "bg-lime-600" },
    { name: "Emerald", bg: "bg-emerald-600" },
    { name: "Rose", bg: "bg-rose-600" },
  ];

  return (
    <div className="bg-black ">

      {/* Section 1 */}
      <div
        className="w-full aspect-[16/9] bg-center bg-no-repeat bg-contain md:h-screen md:bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Section 2 */}
      <div
        className="w-full aspect-[16/9] bg-center bg-no-repeat bg-contain md:h-screen md:bg-cover"
        style={{ backgroundImage: `url(${bg2})` }}>

          
        <div className="text-center px-30 p-14 "> <p className="text-4xl text-white mt-15 ">Thoughtfully crafted, story-driven creative 
          solution that <i>blend</i> design, film and strategy to build meaningful brands. </p> </div>

        <div className=" text-center flex mt-[25vh]  ">
          <div className="text-center p-14 " ><h4 className="text-3xl text-white ">Overview</h4> <p className="text-sm text-white">
            A personal portfolio website project designed 
            to present my creative identity, showcase 
            selected works, and communicate my 
            multidisciplinary approach through an 
            immersive, story-driven digital experience.</p></div>

          <div className="text-center p-14 px-30 "><h4 className="text-3xl text-white ">Category & Duration</h4> <p className="text-sm text-white">

            This website falls under a creative portfolio category, 
            designed to showcase multidisciplinary work across 
            branding, packaging, photography, film, and creative 
            direction through a clean, focused, and experience 
            led approach, and was conceptualized and executed  
            within a duration of one day.</p></div>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="w-full aspect-[16/9] bg-center bg-no-repeat bg-contain md:h-screen md:bg-cover"
        style={{ backgroundImage: `url(${bg3})` }}
      />

      {/* Long Section */}
      {/* SECTION 4 – TYPOGRAPHY GLASS CARD */}
      <section
        className="relative min-h-screen bg-center bg-cover flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${bg4})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-6xl w-full rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12">
          <p className="text-sm text-white/70 mb-6">
            — Typography & Color
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-5xl md:text-6xl font-light mb-4">
                SF Pro
              </h1>

              <div className="flex gap-6 text-sm mb-6 text-white/80">
                <span>Regular</span>
                <span>Semi-Bold</span>
                <span>Bold</span>
              </div>

              <p className="text-sm text-white/70">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
                abcdefghijklmnopqrstuvwxyz <br />
                0123456789
              </p>
            </div>

            <div>
              <div className="flex gap-3 mb-6 flex-wrap">
                {["150 pt", "64 pt", "32 pt", "20 pt"].map((s, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full border border-white/30 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-sm text-white/80">
                SF Pro brings clean, modern clarity and seamless readability,
                creating a smooth and intuitive user experience across the
                website.
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-6 flex-wrap">
            {[
              "#FA692A",
              "#FFFFFF",
              "#D9D9D9",
              "#212121",
              "#141414",
              "#0D0D0D",
            ].map((c, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-full border border-white/20"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Color Grid Section */}
      <div className="w-full bg-black py-20">
        <div className="max-w-[1400px] mx-auto px-[90px]">
          <div className="grid grid-cols-12 gap-x-[24px]">
            {colors.map((item, i) => (
              <div
                key={i}
                className="relative h-[400px] bg-orange-500 overflow-hidden group"
              >
                {/* Hover Overlay */}
                <div
                  className={`
                    absolute inset-0
                    ${item.bg}
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform duration-500 ease-out
                    flex items-center justify-center
                  `}
                >
                  <span className="text-white text-xl font-semibold tracking-wide">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div
        className="w-full aspect-[16/9] bg-center bg-no-repeat bg-contain md:h-screen md:bg-cover"
        style={{ backgroundImage: `url(${bg5})` }}
      />

    </div>
  );
}

export default App;
