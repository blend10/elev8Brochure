import React, { useRef, useState } from "react";
import MarqueeBadge from "./MarqueeBadge";

const servicesList = [
  {
    serviceName: "Webdesign & Entwicklung",
    serviceImage: "/header1.png",
    scrollToId: "portfolio-webdesign-entwicklung",
  },
  {
    serviceName: "App-Entwicklung (Mobile)",
    serviceImage: "/header2.png",
    scrollToId: "portfolio-app-entwicklung-mobile",
  },
  {
    serviceName: "CRM",
    serviceImage: "/header3.png",
    scrollToId: "portfolio-crm",
  },
  {
    serviceName: "E-Commerce",
    serviceImage: "/projects.png",
    scrollToId: "portfolio-e-commerce",
  },
  {
    serviceName: "Markenidentität",
    serviceImage: "/projects.png",
    scrollToId: "portfolio-markenidentit-t",
  },
  {
    serviceName: "Digitales Marketing",
    serviceImage: "/projects.png",
    scrollToId: "portfolio-digitales-marketing",
  },
  {
    serviceName: "Google Ads-Management",
    serviceImage: "/projects.png",
    scrollToId: "portfolio-google-ads",
  },
  {
    serviceName: "Videoproduktion",
    serviceImage: "/projects.png",
    scrollToId: "portfolio-videoproduktion",
  },
];

const ServiceRow = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef(null);
  const rowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (imageRef.current && rowRef.current) {
      const rect = rowRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate relative position from center of the row (-1 to 1)
      const xPercent = (x / rect.width - 0.5) * 2;
      const yPercent = (y / rect.height - 0.5) * 2;

      // Max translation is 20px
      const translateX = xPercent * 20;
      const translateY = yPercent * 20;

      imageRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
  };

  return (
    <div
      ref={rowRef}
      className="relative w-full flex items-center py-6 cursor-pointer border-b border-gray-100 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={() => {
        const el = document.getElementById(service.scrollToId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div className="flex gap-[22px] items-center">
        {/* Index text - (01) */}
        <span className="font-poppins italic text-[14px] md:text-[18px] text-[#212121B2]">
          (0{index + 1})
        </span>

        {/* Service Name text */}
        <h3 className="font-poppins font-medium text-[24px] md:text-[38px] text-[#212121B2] group-hover:text-[#212121] transition-colors duration-300">
          {service.serviceName}
        </h3>
        <div className="hidden md:block absolute right-0 pointer-events-none z-50">
          <div
            className={`transition-all duration-500 ease-out origin-left ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div
              ref={imageRef}
              className="w-[300px] h-[200px] rounded-[10px] overflow-hidden shadow-2xl transition-transform duration-75 ease-out"
            >
              <img
                src={`/services/${index + 1}.png`}
                alt={service.serviceName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Image Container with 200px fixed gap */}
    </div>
  );
};

function Services() {
  return (
    <div
      id="leistungen"
      className="container py-20 flex flex-col gap-14 relative z-10 bg-white"
    >
      <div className="flex justify-center md:justify-start">
        <MarqueeBadge
          text="Experten für Web-, Mobile- & CRM-Lösungen und Digital Marketing"
          duration="40s"
          maxWidth="max-w-[256px]"
        />
      </div>
      <div className="flex flex-col gap-10">
        <p className="font-poppins text-[32px] md:text-[48px] text-center lg:text-left font-semibold text-[#212121] uppercase">
          DIenstleistungen
        </p>
        <div className="flex flex-col w-full relative">
          {servicesList.map((service, index) => (
            <ServiceRow key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
