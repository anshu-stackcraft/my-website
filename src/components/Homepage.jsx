import { Link } from "react-router-dom";

import bgImage from "../assets/myweb.png";
import bg2 from "../assets/bg.png";
import bg3 from "../assets/dex.png";
import bg4 from "../assets/berojgar.png";
import bg5 from "../assets/shop.png";

function App() {

  const colors = [
    { name: "Red", bg: "bg-red-500" },
    { name: "Blue", bg: "bg-blue-500" },
    { name: "Green", bg: "bg-green-500" },
    { name: "Yellow", bg: "bg-yellow-500" },
    { name: "Purple", bg: "bg-purple-500" },
    { name: "Pink", bg: "bg-pink-500" },
    { name: "Indigo", bg: "bg-indigo-500" },
    { name: "Teal", bg: "bg-teal-500" },
    { name: "Cyan", bg: "bg-cyan-500" },
    { name: "Lime", bg: "bg-lime-500" },
    { name: "Emerald", bg: "bg-emerald-500" },
    { name: "Rose", bg: "bg-rose-500" },
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
        style={{ backgroundImage: `url(${bg2})` }}
      />

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
