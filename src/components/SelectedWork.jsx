import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import MarqueeBadge from "./MarqueeBadge";

const portfolioData = [
  {
    title: "Webdesign & Entwicklung",
    subtitle: "WEBSITE",
    projects: [
      {
        title: "IMAS",
        image: [{ src: "/1.png" }, { src: "/2.png" }, { src: "/3.png" }],
      },
      {
        title: "Navigas",
        image: [{ src: "/4.png" }, { src: "/5.png" }, { src: "/6.png" }],
      },
      {
        title: "Raum",
        image: [{ src: "/7.png" }, { src: "/8.png" }, { src: "/9.png" }],
      },
      {
        title: "bELL",
        image: [{ src: "/13.png" }, { src: "/14.png" }],
      },
      {
        title: "HIBIKE",
        image: [{ src: "/15.png" }, { src: "/16.png" }, { src: "/17.png" }],
      },
    ],
  },
  {
    title: "App-Entwicklung (Mobile)",
    subtitle: "MOBILE APP",
    projects: [
      {
        title: "Quitty",
        image: [{ src: "/18.png" }, { src: "/19.png" }, { src: "/20.png" }],
      },
      {
        title: "MyFidro",
        image: [{ src: "/21.png" }, { src: "/22.png" }, { src: "/23.png" }],
      },
      {
        title: "NETWRK",
        image: [{ src: "/24.png" }, { src: "/25.png" }],
      },
      {
        title: "TAPPLAYER",
        image: [{ src: "/26.png" }, { src: "/27.png" }],
      },
    ],
  },
  {
    title: "CRM",
    subtitle: "CRM",
    projects: [
      {
        title: "Quitty",
        image: [{ src: "/28.png" }, { src: "/29.png" }, { src: "/30.png" }],
      },
      {
        title: "MyFidro",
        image: [{ src: "/31.png" }, { src: "/32.png" }, { src: "/33.png" }],
      },
      {
        title: "Netwrk",
        image: [{ src: "/34.png" }, { src: "/35.png" }, { src: "/36.png" }],
      },
      {
        title: "Leonardo Türen",
        image: [{ src: "/37.png" }, { src: "/38.png" }, { src: "/39.png" }],
      },
      {
        title: "KundenPortal",
        image: [{ src: "/40.png" }, { src: "/41.png" }, { src: "/42.png" }],
      },
      {
        title: "Sales",
        image: [{ src: "/43.png" }, { src: "/44.png" }, { src: "/45.png" }],
      },
      {
        title: "Refa Kanalreinigung",
        image: [
          { src: "/refaCrm1.png" },
          { src: "/refaCrm2.png" },
          { src: "/refaCrm3.png" },
        ],
      },
    ],
  },
  {
    title: "E-Commerce",
    subtitle: "E-COMMERCE",
    projects: [
      {
        title: "Soxey",
        image: [{ src: "/46.png" }, { src: "/47.png" }, { src: "/48.png" }],
      },
      {
        title: "SPANDOKMAN",
        image: [{ src: "/49.png" }, { src: "/50.png" }, { src: "/51.png" }],
      },
      {
        title: "FaceDrip",
        image: [{ src: "/52.png" }, { src: "/53.png" }, { src: "/54.png" }],
      },
      {
        title: "Lune Cadeau",
        image: [{ src: "/55.png" }, { src: "/56.png" }, { src: "/57.png" }],
      },
      {
        title: "Remax Elife",
        image: [{ src: "/58.png" }],
      },
      {
        title: "Assfalg",
        image: [{ src: "/59.png" }],
      },
    ],
  },
  {
    title: "Markenidentität",
    subtitle: "Markenidentität",
    projects: [
      {
        title: "Carrosserie Kägi",
        image: [{ src: "/60.png" }, { src: "/61.png" }, { src: "/62.png" }],
      },
      {
        title: "Prima Drive",
        image: [{ src: "/63.png" }, { src: "/64.png" }, { src: "/65.png" }],
      },
      {
        title: "Quitty",
        image: [{ src: "/66.png" }, { src: "/67.png" }, { src: "/68.png" }],
      },
      {
        title: "Facedrip",
        image: [{ src: "/69.png" }, { src: "/70.png" }, { src: "/71.png" }],
      },
      {
        title: "imas",
        image: [{ src: "/72.png" }, { src: "/73.png" }, { src: "/74.png" }],
      },
      {
        title: "WOLF SOLUTION AG",
        image: [{ src: "/75.png" }, { src: "/76.png" }, { src: "/77.png" }],
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
            flowerIcon="/flower-grey.svg"
          />
          <div className="flex flex-col items-center lg:items-start">
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
