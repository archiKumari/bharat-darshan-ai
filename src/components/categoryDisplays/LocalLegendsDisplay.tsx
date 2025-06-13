import React from "react";
import localTitleImage from "../../assets/local.png";
import legendsTitleImage from "../../assets/legends.png";
import placeholderImage from "../../assets/Category placeholders/LocalLegends.png";
import wallBackground from "../../assets/legend background.png";
import lampImage from "../../assets/lamp.png";

interface Legend {
  title: string;
  description?: string;
  imageUrl?: string;
}

interface LocalLegendsDisplayProps {
  people: Legend[];
}

const LocalLegendsDisplay: React.FC<LocalLegendsDisplayProps> = ({
  people,
}) => {
  return (
    <div
      className="w-full h-screen p-6 bg-cover bg-center"
      style={{
        backgroundImage: `radial-gradient(circle at top, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%), linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${wallBackground})`,
      }}
    >
      <div className="relative flex justify-center items-center mb-20 mt-8 space-x-4">
        <img
          src={localTitleImage}
          alt="Local"
          className="relative z-10 h-12 sm:h-16 md:h-14"
        />
        <img
          src={legendsTitleImage}
          alt="Legends"
          className="relative z-10 h-12 sm:h-16 md:h-14 mt-2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {people.map((legend, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative">
              <img
                src={lampImage}
                alt="Vintage lamp"
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-28 z-20 opacity-80"
              />
              <div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40 lg:w-52 h-28 filter drop-shadow-[0_0_1rem_rgba(210,180,140,0.6)] pointer-events-none z-10"
                style={{
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                  background:
                    "linear-gradient(to bottom, rgba(210,180,140,0.8) 0%, rgba(210,180,140,0.2) 50%, rgba(210,180,140,0) 100%)",
                }}
              />
              <img
                src={legend.imageUrl || placeholderImage}
                alt={`${legend.title} portrait`}
                className="relative z-0 w-24 sm:w-32 md:w-40 lg:w-48 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.6)] filter brightness-90 object-contain"
              />
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
            </div>

            <div className="mt-4 text-center max-w-xs">
              <h3 className="eagle-lake-regular text-lg text-brown-800 leading-tight">
                {legend.title}
              </h3>
              <p className="quintessential-regular text-sm text-brown-900 mt-1 leading-snug">
                {legend.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocalLegendsDisplay;
