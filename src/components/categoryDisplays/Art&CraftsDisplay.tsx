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

const ArtAndCraftsDisplay: React.FC<ArtAndCraftsDisplayProps> = ({
  crafts,
}) => {
  const items = crafts.slice(0, 8);
  const CraftCard = ({
    item,
    className,
  }: {
    item: CraftItem | undefined;
    className: string;
  }) => {
    if (!item) return null;

    return (
      <div className={`${className} relative rounded-lg overflow-hidden`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: item.backgroundColor ?? "rgba(255,197,102,0.8)",
            maskImage: `url(${parchmentTorn})`,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: `url(${parchmentTorn})`,
            WebkitMaskSize: "100% 100%",
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
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
          <div className="flex-grow mt-1">
            <h2
              className="text-sm font-semibold leading-snug"
              style={{ color: item.textColor ?? "#6c4a2e" }}
            >
              {item.title}
            </h2>
            <p className="text-xs text-[#6c4a2e] leading-snug">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="relative grid grid-cols-4 gap-3 h-full z-10"
        style={{
          gridTemplateRows: "1.25fr 0.75fr 0.75fr 1.25fr",
        }}
      >
        <CraftCard
          item={items[0]}
          className="col-start-1 row-start-1 row-span-2"
        />
        <CraftCard
          item={items[1]}
          className="col-start-1 row-start-3 row-span-2"
        />
        <CraftCard
          item={items[6]}
          className="col-start-4 row-start-1 row-span-2"
        />
        <CraftCard
          item={items[7]}
          className="col-start-4 row-start-3 row-span-2"
        />
        <CraftCard item={items[2]} className="col-start-2 row-start-1" />
        <CraftCard item={items[3]} className="col-start-3 row-start-1" />
        <div className="col-start-2 col-span-2 row-start-2 row-span-2">
          <div
            className="h-full px-5 py-5 flex items-center justify-center rounded-md shadow-md"
            style={{
              backgroundColor: "rgba(255,197,102,0.8)",
              maskImage: `url(${parchmentTorn})`,
              maskSize: "cover",
              maskRepeat: "no-repeat",
              WebkitMaskImage: `url(${parchmentTorn})`,
              WebkitMaskSize: "cover",
              WebkitMaskRepeat: "no-repeat",
            }}
          >
            <img
              src={titleImage}
              alt="Traditional Arts & Handicrafts"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
        <CraftCard item={items[4]} className="col-start-2 row-start-4" />
        <CraftCard item={items[5]} className="col-start-3 row-start-4" />
      </div>
    </div>
  );
};

export default ArtAndCraftsDisplay;
