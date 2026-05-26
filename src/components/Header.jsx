import React from "react";
import MarqueeBadge from "./MarqueeBadge";

const Header = () => {
  return (
    <section id="startseite" className="w-full bg-white relative pt-20 pb-24">
      <div className="container">
        <div className="flex flex-col items-center gap-[28px]">
          <MarqueeBadge
            text="DIgital Marketing Agentur — &nbsp;"
            maxWidth="max-w-[324px]"
          />

          <div className="text-center w-full max-w-4xl uppercase mt-4">
            <h1 className="font-poppins font-semibold lg:text-[56px] text-[36px] leading-[1.2] tracking-tight">
              <span className="text-[#212121]">DIGITALE EXZELLENZ. </span>
              <span
                className="text-transparent border-none bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0000FF 0%, #53B2FF 60%, #0000FF 100%)",
                  WebkitBackgroundClip: "text",
                }}
              >
                AUGE <br /> FÜR JEDES DETAIL.
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container-lg mt-[45px] mb-[60px]">
        <div className="flex justify-center items-end flex-wrap xl:flex-nowrap gap-[50px] w-full">
          <div className="relative group rounded-[20px] overflow-visible  transition-transform duration-500  w-[475px] h-[330px]">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-lg z-10 border border-gray-100">
              <img
                src="/header1.png"
                alt={`Header image 1`}
                className="w-full h-full object-cover transition-transform duration-700 "
              />
            </div>
          </div>
          <div className="relative group rounded-[20px] overflow-visible  transition-transform duration-500  w-[475px] h-[330px] xl:w-[528px] xl:h-[368px]">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-lg z-10 border border-gray-100">
              <img
                src="/header2.png"
                alt={`Header image 2`}
                className="w-full h-full object-cover transition-transform duration-700 "
              />
            </div>
          </div>
          <div className="relative group rounded-[20px] overflow-visible transition-transform duration-500  w-[475px] h-[330px]">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden shadow-lg z-10 border border-gray-100">
              <img
                src="/header3Quality.png"
                alt={`Header image 3`}
                className="w-full h-full object-cover transition-transform duration-700 "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex flex-col items-center">
          {/* Object 4: Simple text */}
          <div className="text-center w-full max-w-4xl px-4 mt-8">
            <p className="font-poppins text-[#212121B2] text-[16px] leading-[1.6]">
              Bei Syntech Solution AG entwickeln wir wirkungsvolle digitale
              Strategien, moderne Designs und <br /> nahtlose Weblösungen, die
              Marken in der heutigen schnelllebigen Welt auf ein neues Niveau
              heben.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
