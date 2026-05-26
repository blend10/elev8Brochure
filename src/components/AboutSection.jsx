import React, { memo } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 1200, suffix: "+", label: "Websites realisiert" },
  { value: 800, suffix: "Mio.+", label: "Nutzer erreicht" },
  { value: 98, suffix: "%", label: "Kundenzufriedenheitsrate" },
];

const AboutHeading = memo(() => (
  <div className="mb-12 lg:mb-0">
    <h2 className="text-center md:text-left font-inter font-semibold text-[24px] md:text-[20px] tracking-tight lg:text-[21px] xl:text-[30px] text-[#1E1E1E]">
      Syntech Solution AG, SharkAgency & Bexolutions.
      Technologie, Marketing und Vertrieb unter einem Dach. Das Ergebnis ist die Elev8 Group.
    </h2>
  </div>
));

const StatCounter = ({ stat }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="flex flex-col items-center md:items-start gap-[5px] xl:gap-[30px] mb-[40px] xl:mb-[60px]"
      ref={ref}
    >
      <div className="font-inter text-[#1E1E1E] text-[40px] md:text-[40px] xl:text-[80px] font-semibold leading-none tracking-tight xl:h-[80px] tabular-nums">
        {inView ? <CountUp start={0} end={stat.value} duration={2} /> : "0"}
        {stat.suffix}
      </div>
      <p className="font-inter font-medium text-[14px] md:text-[16px] text-[#1E1E1E]">
        {stat.label}
      </p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="uber-uns" className="w-full bg-[#f8f8f8] relative py-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[58px]">
          {/* First div: Image (20% width) */}
          <div className="w-full xl:w-[30%] lg:w-[35%] rounded-[10px] overflow-hidden shrink-0 relative">
            <video
              src="/Mainvideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Elev8 Group – Showreel unserer digitalen Marketing-Projekte"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-full aspect-square lg:aspect-4/5"
            />
            <div className="absolute inset-0 bg-[#0066D64D]" />
            <img
              src="/centerOfProjects.svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[200px]"
              alt=""
            />
          </div>

          {/* Second div: Content */}
          <div className="flex flex-col justify-between flex-1">
            <AboutHeading />

            {/* Bottom stats divs justify-between */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-10 mt-auto">
              {stats.map((stat, index) => (
                <StatCounter key={index} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
