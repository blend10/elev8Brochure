import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import MarqueeBadge from "./MarqueeBadge";

const portfolioData = [
  {
    title: "Webdesign & Entwicklung",
    subtitle: "WEBSITE",
    projects: [
      {
        title: "Astec design",
        image: [{ src: "/ph1.jpg" }, { src: "/ph2.png" }, { src: "/ph3.png" }],
      },
      {
        title: "Job.KrobertKochde",
        image: [{ src: "/ph4.png" }, { src: "/ph5.png" }, { src: "/ph6.png" }],
      },
      {
        title: "Josef Wchner",
        image: [{ src: "/ph7.png" }, { src: "/ph8.png" }, { src: "/ph9.png" }],
      },
      {
        title: "Job.Rall Consulting GmbH  ",
        image: [{ src: "/ph10.png" }, { src: "/ph11.png" } ,{ src: "/ph12.png" }],
      },
      {
        title: "EuroCarry",
        image: [{ src: "/ph13.png" }, { src: "/ph14.png" }, { src: "/ph15.png" }],
      },
      {
        title: "hibike",
        image: [{ src: "/ph16.png" }, { src: "/ph17.png" }, { src: "/ph18.png" }],
      },
       {
        title: "ventum",
        image: [{ src: "/ph19.png" }, { src: "/ph20.png" }, { src: "/ph21.png" }],
      },
      {
        title: "S-THETIC",
        image: [{ src: "/ph22.png" }, { src: "/ph23.png" }, { src: "/ph24.png" }],
      },
       {
        title: "Aesthetics care",
        image: [{ src: "/ph25.png" }, { src: "/ph26.png" }, { src: "/ph27.png" }],
      },
       {
        title: "SWIZZ.AI",
        image: [{ src: "/ph28.png" }, { src: "/ph29.png" }, { src: "/ph30.png" }],
      },
      {
        title: "ASSFALG",
        image: [{ src: "/ph31.png" }, { src: "/ph32.png" }, { src: "/ph33.png" }],
      },
    ],
  },
  {
    title: "App-Entwicklung (Mobile)",
    subtitle: "MOBILE APP",
    projects: [
      {
        title: "Quitty",
        image: [{ src: "/ph34.png" }, { src: "/ph35.png" }, { src: "/ph36.png" }],
      },
      {
        title: "MyFidro",
        image: [{ src: "/ph37.png" }, { src: "/ph38.png" }, { src: "/ph39.png" }],
      },
      {
        title: "NETWRK",
        image: [{ src: "/ph40.png" }, { src: "/ph41.png" }],
      },
      {
        title: "TAPPLAYER",
        image: [{ src: "/ph42.png" }, { src: "/ph43.png" }],
      },
      {
        title: "kent",
        image: [{ src: "/ph44.png" }, { src: "/ph45.png" } ,{ src: "/ph46.png" }],
      },  
    ],
  },
  {
    title: "CRM",
    subtitle: "CRM",
    projects: [
      {
        title: "Quitty",
        image: [{ src: "/ph47.png" }, { src: "/ph48.png" }, { src: "/ph49.png" }],
      },
      {
        title: "MyFidro",
        image: [{ src: "/ph50.png" }, { src: "/ph51.png" }, { src: "/ph52.png" }],
      },
      {
        title: "Netwrk",
        image: [{ src: "/ph53.png" }, { src: "/ph54.png" }, { src: "/ph55.png" }],
      },
      {
        title: "Sales Dashboard ",
        image: [{ src: "/ph56.png" }, { src: "/ph57.png" }, { src: "/ph58.png" }],
      },
      
    ],
  },
  {
    title: "E-Commerce",
    subtitle: "E-COMMERCE",
    projects: [
      
      {
        title: "FaceDrip",
        image: [{ src: "/ph59.png" }, { src: "/ph60.png" }, { src: "/ph61.png" }],
      },
      
    ],
  },

  {
    title: "Digitales Marketing",
    subtitle: "Digitales Marketing",
    projects: [
      {
        title: "MYFIDRO",
        image: [{ src: "/78.png" }, { src: "/79.png" }, { src: "/80.png" }],
      },
      {
        title: "hibike",
        image: [{ src: "/81.png" }],
      },
      {
        title: "Assfalg hydraulik",
        image: [{ src: "/82.png" }],
      },
      {
        title: "Wochner",
        image: [{ src: "/83.png" }],
      },
    ],
  },
  {
    title: "Google Ads",
    subtitle: "Google Ads",
    projects: [
      {
        title: "Add your business information",
        image: [{ src: "/84.png" }],
      },
      {
        title: "Choose your campaign objective",
        image: [{ src: "/85.png" }],
      },
    ],
  },
  {
    title: "Videoproduktion",
    subtitle: "Videoproduktion",
    projects: [
      {
        title: "AP GEBÄUDETECHNIK",
        image: [{ src: "/86.png" }],
        videoSrc: "/94.mp4",
      },
      {
        title: "hIBIKE",
        image: [{ src: "/87.png" }],

        videoSrc: "/95.mp4",
      },
      {
        title: "Schwyter AG",
        image: [{ src: "/88.png" }],

        videoSrc: "/101.mp4",
      },
      {
        title: "Quitty",
        image: [{ src: "/89.png" }],

        videoSrc: "/97.mp4",
      },
      {
        title: "Quitty",
        image: [{ src: "/90.png" }],

        videoSrc: "/98.mp4",
      },
      {
        title: "Vergnano Event",
        image: [{ src: "/91.png" }],

        videoSrc: "/99.mp4",
      },
      {
        title: "Syntech Solution Ag",
        image: [{ src: "/92.png" }],

        videoSrc: "/96.mp4",
      },
      {
        title: "EMMENBAUM",
        image: [{ src: "/93.png" }],

        videoSrc: "/200.mp4",
      },
      {
        title: "S-THETIC",
        image: [{ src: "/ph67.png" }],

        videoSrc: "/video2.mp4",
      },
    ],
  },
];

const VideoLightbox = ({ videoSrc, onClose }) => {
  if (!videoSrc) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors cursor-pointer z-10"
      >
        <X size={32} />
      </button>
      <div
        className="w-full max-w-5xl max-h-[85vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={`/selectedWork/${videoSrc}`}
          className="w-full h-auto max-h-full rounded-[14px] shadow-2xl object-contain"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ project, title, onPlayVideo }) => {
  const scrollRef = useRef(null);
  const hasVideo = !!project.videoSrc;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-[14px] py-[10px] backdrop-blur-[24.3px] bg-[#5C5C5C1A] border border-[#FFFFFF1A] rounded-[20px] flex flex-col gap-4 overflow-hidden sticky lg:top-5 top-16">
      <div className="px-3 py-5 border border-[#FFFFFF1A] rounded-[20px] flex items-center  gap-2 bg-[#70707026]">
        <h4 className="font-arial text-white  font-medium text-[10px] uppercase tracking-wider">
          {project.title}
        </h4>
        <p className="text-white font-arial text-[12px]">•</p>
        <p className="font-mono text-[#ACACAC] text-[12px]">{title}</p>
      </div>

      <div className="relative w-full rounded-[14px] overflow-hidden group/slider">
        <div
          ref={scrollRef}
          className="w-full flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {project.image.map((img, idx) => (
            <div
              key={idx}
              className={`w-full shrink-0 snap-center relative group ${hasVideo ? "cursor-pointer" : ""}`}
              onClick={
                hasVideo ? () => onPlayVideo(project.videoSrc) : undefined
              }
            >
              <img
                src={`/selectedWork/${img.src}`}
                loading={idx === 0 ? "eager" : "lazy"}
                alt={`${project.title} - Ansicht ${idx + 1}`}
                className="w-full h-[350px] object-cover rounded-[14px] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {hasVideo && (
                <div className="absolute inset-0 flex items-center justify-center rounded-[14px] bg-black/20 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {project.image.length > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-[27px] pointer-events-none opacity-100 group-hover/slider:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                scroll("left");
              }}
              className="w-10 h-10  backdrop-blur-md flex items-center justify-center text-white pointer-events-auto  transition-colors cursor-pointer"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                scroll("right");
              }}
              className="w-10 h-10  backdrop-blur-md flex items-center justify-center text-white pointer-events-auto  transition-colors cursor-pointer"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

function SelectedWork() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="projekte" className="py-20 bg-[#0E0E0E] rounded-4xl">
      <div className="container flex flex-col gap-[126px]">
        <div className="flex flex-col items-center lg:items-start gap-[56px]">
          <MarqueeBadge
            text="Unser Portfolio — &nbsp;"
            fadeColor="#0E0E0E"
            textColor="#8D8D8D"
            flowerIcon="/whiteFlower.svg"
          />
          <div className="flex flex-col items-center lg:items-start w-full">
            <h2 className="font-impact lg:text-[100px] text-[44px] font-semibold text-white uppercase leading-none text-center lg:text-left">
              Ausgewählte
            </h2>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full items-center lg:items-start">
              <h2 className="font-impact lg:text-[100px] text-[44px] font-semibold text-[#8D8D8D] uppercase text-center lg:text-left">
                Arbeiten
              </h2>
              <h2 className="font-impact lg:text-[100px] text-[44px] font-semibold text-[#8D8D8D] uppercase text-center lg:text-left">
                ©2025/2026
              </h2>
            </div>
          </div>
        </div>

        {/* Dynamic Portfolio Grid Container */}
        <div className="flex flex-col gap-24">
          {portfolioData.map((category, index) => {
            const slug = category.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
            return (
              <div
                key={index}
                id={`portfolio-${slug}`}
                className="flex flex-col gap-8"
              >
                {/* Optional Section Title for the Category */}
                <h3 className="font-poppins text-[38px] font-medium uppercase text-white pb-4">
                  {category.title}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] relative h-min">
                  {category.projects.map((proj, idx) => (
                    <ProjectCard
                      key={idx}
                      project={proj}
                      title={category.subtitle}
                      onPlayVideo={setActiveVideo}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {activeVideo && (
        <VideoLightbox
          videoSrc={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}

export default SelectedWork;
