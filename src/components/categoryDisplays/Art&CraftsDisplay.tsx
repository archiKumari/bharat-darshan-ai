import React from "react";
import placeholderImage from "../../assets/Category placeholders/crafts.png";
import backgroundImage from "../../assets/arts background.png";
import parchmentTorn from "../../assets/torn paper.png";
import titleImage from "../../assets/arts title.png";

export interface CraftItem {
  title: string;
  description: string;
  imageUrl?: string;
  backgroundColor?: string;
  textColor?: string;
}

interface ArtAndCraftsDisplayProps {
  crafts: CraftItem[];
}

const ArtAndCraftsDisplay: React.FC<ArtAndCraftsDisplayProps> = ({ crafts }) => {
  const positions = [
    "col-start-1 col-span-2 row-start-1 row-span-2",
    "col-start-3 col-span-1 row-start-1 row-span-3",
    "col-start-5 col-span-1 row-start-3 row-span-3",
    "col-start-1 col-span-1 row-start-3 row-span-2",
    "col-start-3 col-span-2 row-start-4 row-span-2",
    "col-start-4 col-span-1 row-start-3 row-span-1",
    "col-start-2 col-span-1 row-start-3 row-span-2",
    "col-start-1 col-span-2 row-start-5 row-span-1"
  ];

  return (
    <div
      className="relative h-screen w-screen overflow-hidden p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative grid grid-cols-5 grid-rows-5 gap-3 h-full z-10">
        <div className="col-start-4 col-span-2 row-start-1 row-span-2">
          <div className="h-full p-2 flex items-center justify-center rounded-md shadow-md">
            <img
              src={titleImage}
              alt="Traditional Arts & Handicrafts"
              className="w-full h-full object-fill"
            />
          </div>
        </div>

        {crafts.slice(0, positions.length).map((item, idx) => {
          const pos = positions[idx];
          return (
            <div
              key={idx}
              className={`${pos} relative rounded-lg overflow-hidden`}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: item.backgroundColor ?? "rgba(255,197,102,0.8)",
                  maskImage: `url(${parchmentTorn})`,
                  maskSize: "cover",
                  maskRepeat: "no-repeat",
                  WebkitMaskImage: `url(${parchmentTorn})`,
                  WebkitMaskSize: "cover",
                  WebkitMaskRepeat: "no-repeat"
                }}
              />
              <div className="absolute inset-3 overflow-hidden z-10 flex flex-col">
                <div className="flex-shrink-0 h-2/3 overflow-hidden">
                  <img
                    src={item.imageUrl || placeholderImage}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-sm font-semibold leading-snug" style={{ color: item.textColor ?? '#6c4a2e' }}>
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#6c4a2e] leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtAndCraftsDisplay;
