import React from "react";

const MarqueeBadge = ({
  text,
  textColor = "#0E0E0E",
  fadeColor = "white",
  fadeWidth = "w-32",
  maxWidth = "max-w-[256px]",
  flowerIcon = "/flower.svg",
  duration = "15s",
}) => {
  return (
    <div className="flex gap-2 h-10">
      <div className="h-full w-auto flex items-center justify-center">
        <img
          src={flowerIcon}
          alt="flower indicator"
          fill
          className="w-[16px] h-[18px] relative z-100"
        />
      </div>
      <div
        className={`relative w-full ${maxWidth} overflow-hidden flex items-center`}
      >
        <div
          className={`absolute left-0 top-0 bottom-0 ${fadeWidth} z-10 pointer-events-none`}
          style={{
            backgroundImage: `linear-gradient(to right, ${fadeColor}, transparent)`,
          }}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 ${fadeWidth} z-10 pointer-events-none`}
          style={{
            backgroundImage: `linear-gradient(to left, ${fadeColor}, transparent)`,
          }}
        ></div>

        <div
          className="flex whitespace-nowrap animate-marquee"
          style={{ animationDuration: duration }}
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span
                className="font-mono text-[16px] uppercase"
                style={{ color: textColor }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBadge;
