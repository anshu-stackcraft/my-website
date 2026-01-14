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
    <div className="bg-black">

      {/* Section 1 */}
      <div
        className="w-full aspect-[16/9] bg-center bg-no-repeat bg-contain md:h-screen md:bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Section 2 */}
      <div
        className="w-full aspect-[16/9] bg-center bg-no-repeat bg-contain md:h-screen md:bg-cover"
        style={{ backgroundImage: `url(${bg2})` }}>

          
        <div className="text-center"> <p className="text-5xl text-white">Thoughtfully crafted, story-driven creative <br />
          solution that <i>blend</i> design, film and <br /> strategy to build meaningful brands. </p> </div>

        <div className=" text-center flex ">
          <div><h4 className="text-4xl text-white">Overview</h4> <p className="text-2xl text-white">
            A personal portfolio website project designed <br />
            to present my creative identity, showcase <br />
            selected works, and communicate my <br />
            multidisciplinary approach through an <br />
            immersive, story-driven digital experience.</p></div>

          <div><h4 className="text-4xl text-white">Category & Duration</h4> <p className="text-2xl text-white">

            This website falls under a creative portfolio category, <br />
            designed to showcase multidisciplinary work across <br />
            branding, packaging, photography, film, and creative <br />
            direction through a clean, focused, and experience <br />
            led approach, and was conceptualized and executed  <br />
            within a duration of one day.</p></div>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="w-full aspect-[16/9] bg-center bg-no-repeat bg-contain md:h-screen md:bg-cover"
        style={{ backgroundImage: `url(${bg3})` }}
      />

      {/* Long Section */}
      <div
        className="w-[70%] mx-auto aspect-[16/9] bg-center bg-no-repeat bg-contain md:min-h-[180vh] md:bg-cover"
        style={{ backgroundImage: `url(${bg4})` }}
      />

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
