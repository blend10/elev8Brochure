import React from "react";

const links = [
  { num: "01", name: "Startseite", url: "#startseite" },
  { num: "02", name: "Über uns", url: "#uber-uns" },
  { num: "03", name: "Dienstleistungen", url: "#leistungen" },
  { num: "04", name: "Projekte", url: "#projekte" },
];

function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F8F8F8] font-inter">
      {/* Restored the previous image banner section */}
      <section className="pt-[38px] px-6 md:px-12 w-full">
        <div className="max-w-[1810px] mx-auto">
          <div className="h-[418px] rounded-2xl md:rounded-[32px] overflow-hidden relative">
            <img
              src="/background1.png"
              className="w-full h-full object-cover absolute inset-0 z-0"
              alt="Elev8 Group – Digitale Marketing Agentur Hintergrundbild"
            />
            <img
              src="/logo2.svg"
              className="max-w-[382px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute z-10"
              alt="Elev8 Group Logo"
            />
          </div>
        </div>
      </section>

      <footer className="py-16 md:py-24 px-6 md:px-12 w-full">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-[#999999] leading-tight tracking-tight">
                Kontakt:
              </h2>
              <a
                href="mailto:kontakt@elev8-grp.com"
                className="inline-block text-[32px] md:text-[40px] lg:text-[46px] font-bold text-[#111111] border-b-[3px] md:border-b-4 border-[#111111] pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors mb-8"
              >
                kontakt@elev8-grp.com
              </a>

              <p className="text-[#666666] text-[15px] font-medium leading-relaxed max-w-lg mt-4">
                Mit Kreativität und Leidenschaft gestaltet. <br />
                Bleiben wir in Verbindung – kontaktieren Sie uns jederzeit!
              </p>

              <a
                href="mailto:info@elev8-grp.com"
                className="mt-8 flex items-center bg-[#EDEDED] rounded-full pr-6 pl-1.5 py-1.5 gap-4 hover:bg-[#E2E2E2] transition-colors w-max"
              >
                <div className="bg-[#0000FF] text-white rounded-full w-9 h-9 flex items-center justify-center shadow-sm">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H15M15 8L8 1M15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-bold text-[#111111] text-[14px]">
                  Jetzt kontaktieren
                </span>
              </a>
            </div>

            <div className="mt-24 flex items-center gap-6 text-[13px] font-semibold text-[#666666]">
              <span>Alle Rechte vorbehalten</span>
              <span>&copy; {new Date().getFullYear()}</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-start lg:pl-16 xl:pl-24 mt-4 lg:mt-6">
            {links.map((link, index) => (
              <a
                key={link.num}
                href={link.url}
                onClick={(e) => scrollToSection(e, link.url)}
                className={`flex items-center justify-between py-[22px] group ${
                  index === 0
                    ? "border-t border-b border-[#E6E6E6]"
                    : "border-b border-[#E6E6E6]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[#888888] font-bold text-[13px] tracking-wide">
                    {link.num} /
                  </span>
                  <span className="text-[#333333] font-semibold text-[17px] group-hover:text-blue-600 transition-colors">
                    {link.name}
                  </span>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#333333] group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M1 8H15M15 8L8 1M15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
