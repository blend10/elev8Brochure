import React, { useState } from "react";
import { Star } from "lucide-react";
import MarqueeBadge from "./MarqueeBadge";

const testimonials = [
  {
    name: "Frank Wolf",
    role: "Wolf Solution GmbH",
    text: "Die Zusammenarbeit mit Syntech Solutions AG war für Wolf Solutions GmbH ein echter Meilenstein. Das Team hat eine perfekt auf uns zugeschnittene E-Commerce-Plattform entwickelt und uns kompetent durch die digitale Transformation begleitet. Die Ergebnisse übertreffen unsere Erwartungen – sowohl in der Performance als auch im Kundenerlebnis.",
    avatar: "/selectedWork/frank.png",
  },
  {
    name: "Dario Ruckstuhl",
    role: "FIDRO GmbH",
    text: "Wir haben bei der Entwicklung unserer Website, mobilen Anwendung und unseres CRM-Systems zusammengearbeitet. Sie waren sehr professionell, zuverlässig und stets bereit, auf jede Anfrage oder Änderung zu reagieren. Mit der geleisteten Arbeit und dem Service sind wir äußerst zufrieden!",
    avatar: "/selectedWork/dario.png",
  },
  {
    name: "Timo Kraaijkamp",
    role: "Spandoekman.nl",
    text: "Nach 13 Jahren unseren Onlineshop komplett zu erneuern, war kein leichter Schritt – besonders mit über 1.500 individuell konfigurierbaren Produkten. Doch gemeinsam mit Syntech Solutions AG haben wir es erfolgreich umgesetzt. Eine anspruchsvolle Aufgabe, die dank ihrer Erfahrung und Struktur möglich wurde.",
    avatar: "/selectedWork/timo.png",
  },
];

function WasUnsere() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="py-[110px] bg-white">
      <div className="container flex flex-col items-center lg:items-start">
        <MarqueeBadge text="— REFERENZEN &nbsp;" />

        <div className="mt-[32px]">
          <h2 className="font-poppins text-[40px] lg:text-[48px] font-semibold text-[#212121] uppercase leading-none text-center lg:text-left">
            WAS UNSERE
          </h2>
          <h2 className="font-poppins text-[40px] lg:text-[48px] italic font-light text-[#212121] leading-none text-center lg:text-left">
            KUNDEN SAGEN
          </h2>
        </div>

        <div className="mt-[50px] flex flex-col-reverse lg:flex-row gap-7 w-full">
          {/* Left side: User list */}
          <div className="flex flex-col gap-3 w-full lg:max-w-[320px] lg:w-[35%] shrink-0">
            {testimonials.map((t, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col ${activeIndex === index ? "p-[0px]" : "p-[25px]"}  cursor-pointer  border border-[#E5E5E5] rounded-3xl ${
                  activeIndex !== index ? "hover:bg-[#FAFAFA]" : ""
                }`}
              >
                {activeIndex === index ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full rounded-[20px] object-cover"
                  />
                ) : (
                  <>
                    <p className="font-poppins text-[20px] font-medium text-[#111215] transition-colors duration-300">
                      {t.name}
                    </p>
                    <p className="font-poppins text-[16px] font-normal text-[#111215] transition-colors duration-300">
                      {t.role}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Right side: Active testimonial */}
          <div className="flex-1 flex flex-col justify-between gap-10 border border-[#E5E5E5] rounded-3xl p-14">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Testimonial text */}
              <p className="font-inter text-[18px] text-black leading-[1.8]">
                „{active.text}"
              </p>
            </div>

            {/* Bottom: Name, role, stars */}
            <div className="flex items-center justify-between border-t border-[#2121211F]">
              <div className="mt-5">
                <p className="font-poppins font-medium text-[20px] text-[#212121]">
                  {active.name}
                </p>
                <p className="font-poppins font-normal text-[16px] text-[#212121B2]">
                  {active.role}
                </p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#2563EB" stroke="none" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WasUnsere;
