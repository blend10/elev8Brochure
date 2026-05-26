import { useState } from "react";
import MarqueeBadge from "./MarqueeBadge";
import faqData from "../data/faqData.json";

function FAQ() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-[59px] bg-white">
      <div className="container">
        <div className="flex flex-col items-center lg:items-start w-full">
          <MarqueeBadge
            text="— FAQ &nbsp;"
            maxWidth="max-w-[128px]"
            fadeWidth="w-16"
          />
        </div>

        <div className="mt-[32px] mb-[68px]">
          <h2 className="font-poppins text-[40px] lg:text-[48px] font-semibold text-[#212121] uppercase leading-none text-center lg:text-left">
            Häufig gestellte
          </h2>
          <h2 className="font-poppins text-[40px] lg:text-[48px] italic font-light text-[#212121] leading-none text-center lg:text-left">
            Fragen (FAQ)
          </h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[6fr_5fr] gap-10">
          {/* Left side - Question list */}
          <div className="flex flex-col gap-[8px]">
            {faqData.map((item, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className="flex items-center justify-between cursor-pointer transition-colors duration-200"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid #2121211F",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    paddingLeft: "35px",
                    paddingRight: "35px",
                    backgroundColor: isSelected ? "#0000FF" : "transparent",
                  }}
                >
                  <span
                    className="font-poppins font-medium text-[18px] text-left"
                    style={{
                      color: isSelected ? "#FFFFFF" : "#212121",
                    }}
                  >
                    {item.title}
                  </span>
                  <img
                    src={isSelected ? "/selectedWork/minus.svg" : "/selectedWork/plus.svg"}
                    alt={isSelected ? "collapse" : "expand"}
                    className="w-[30px] h-[30px] shrink-0 ml-4"
                  />
                </button>
              );
            })}
          </div>

          {/* Right side - Answer display */}
          <div
            className="flex flex-col h-fit"
            style={{
              border: "1px solid #2121211F",
              borderRadius: "20px",
              padding: "40px",
            }}
          >
            <h3 className="font-poppins font-medium text-[32px] text-[#212121] leading-none">
              Frage & Antwort
            </h3>
            <hr className="my-[17px]" style={{ borderColor: "#2121211F" }} />
            <div className="flex-1 flex items-center">
              <p className="font-poppins text-[16px] text-[#000000] leading-relaxed">
                {faqData[selectedIndex]?.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
