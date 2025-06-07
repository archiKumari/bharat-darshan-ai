import React from "react";
import placeholder from "../../assets/Category placeholders/nature.png";
import leafPattern from "../../assets/leaves.png";
import titleImage from "../../assets/natureTitle.png";
import parchment from "../../assets/parchment.png";

export interface NatureItem {
  image?: string;
  title: string;
  description: string;
}

interface NatureLayoutProps {
  items: NatureItem[];
}

const TitleWithLeaves: React.FC = () => (
  <h2
    className="
      text-6xl md:text-8xl font-sans font-bold bg-repeat text-center
      bg-clip-text text-transparent drop-shadow-md
    "
    style={{ backgroundImage: `url(${leafPattern})` }}
  >
    Nature
  </h2>
);

// Vertical offsets for hill-wave effect
const verticalOffsets = ["0px", "4rem", "2rem", "0px", "3rem"];
// Rotation angles for fan-out effect
const rotationAngles = ["-3deg", "2deg", "-1deg", "3deg", "-2deg"];

const NatureDisplay: React.FC<NatureLayoutProps> = ({ items }) => {
  return (
    <div className="relative bg-nature bg-cover bg-center bg-no-repeat bg-black bg-opacity-5 bg-blend-darken min-h-screen">
      {/* Title (static) */}
      <div className="flex justify-center pt-2 pb-2">
        <img
          src={titleImage}
          alt="Nature"
          className="h-48 md:h-40 object-contain"
        />
      </div>

      {/* Horizontal scroll container for cards only */}
      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide w-full">
        <div className="inline-flex items-start space-x-[-1rem] py-4 px-6">
          {items.map((item, idx) => {
            const topOffset = verticalOffsets[idx % verticalOffsets.length];
            const rotation = rotationAngles[idx % rotationAngles.length];
            const zIndex = idx + 10;
            return (
              <div
                key={idx}
                className="flex-shrink-0 w-72 relative"
                style={{
                  marginTop: topOffset,
                  transform: `rotate(${rotation})`,
                  zIndex,
                }}
              >
                {/* Card with parchment texture and overlay */}
                <div
                  className="rounded-2xl shadow-lg overflow-hidden border border-gray-300"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${parchment})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={item.image || placeholder}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-t-2xl"
                  />
                  <div className="p-4">
                    <h3 className="text-center font-serif text-xl text-gray-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NatureDisplay;
