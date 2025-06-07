import React, { useState } from "react";
import placeholderImage from "../../assets/Category placeholders/festival.png";
import festival1 from "../../assets/Category placeholders/festival1.png";

interface FestivalItem {
  title: string;
  description: string;
  image?: string;
}

interface Props {
  festivals: FestivalItem[];
}

const FestivalDisplay: React.FC<Props> = ({ festivals }) => {
  const [activeFestivalIndex, setActiveFestivalIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-screen bg-festival-radial flex flex-col justify-between">
      {/* Lantern Strip */}
      <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide flex-1 flex items-center">
        <div className="flex gap-x-12 px-6 justify-center w-full">
          {festivals.map((festival, index) => {
            const isEven = index % 2 === 0;
            // Alternate thread lengths for zigzag
            const threadHeight = isEven ? "30vh" : "50vh";

            return (
              <div
                key={festival.title}
                className="relative flex flex-col items-center h-screen cursor-pointer"
                onClick={() => setActiveFestivalIndex(index)}
              >
                {/* Hanging thread */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none">
                  <div
                    className="w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-200 to-yellow-500"
                    style={{ height: threadHeight }}
                  ></div>
                </div>

                {/* Lantern positioned below thread with ornamental frame */}
                <div
                  className="relative z-30 flex items-center justify-center"
                  style={{ marginTop: threadHeight }}
                >
                  {/* Outer ornamental ring */}
                  <div className="w-28 h-28 rounded-full border-4 border-yellow-400 shadow-[0_0_20px_4px_rgba(255,200,0,0.5)] hover:shadow-[0_0_30px_6px_rgba(255,230,0,0.7)] transition-shadow duration-300 flex items-center justify-center">
                    {/* Inner dashed ring */}
                    <div className="w-24 h-24 rounded-full border-2 border-yellow-300 border-dashed flex items-center justify-center overflow-hidden">
                      <img
                        src={festival.image || placeholderImage}
                        alt={festival.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mt-3 font-semibold text-yellow-200 text-sm">
                  {festival.title}
                </div>

                {/* Description - full text hanging below lantern */}
                <div className="text-center text-xs text-yellow-100 max-w-[8rem] mt-1">
                  {festival.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Heading at bottom */}
      <h2 className="text-5xl font-serif text-yellow-300 mb-6 italic drop-shadow-[0_0_5px_rgba(255,255,0,0.6)] tracking-wide text-center">
        Festivals
      </h2>

      {/* Overlay Card */}
      {activeFestivalIndex !== null && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="relative bg-yellow-400/35 backdrop-blur-md rounded-2xl p-6 max-w-lg w-full mx-4">
            <button
              className="absolute top-3 right-3 text-yellow-300 text-2xl"
              onClick={() => setActiveFestivalIndex(null)}
            >
              ×
            </button>
            <h3 className="text-3xl font-serif text-white italic drop-shadow-[0_0_8px_rgba(255,215,0,0.8)] tracking-wide text-center mb-4">
              {festivals[activeFestivalIndex].title}
            </h3>
            <div className="flex items-center justify-center mb-4">
              <img
                src={festivals[activeFestivalIndex].image || festival1}
                alt={festivals[activeFestivalIndex].title}
                className="w-full h-56 object-cover rounded-xl"
              />
            </div>
            <p className="text-sm text-yellow-50 text-center">
              {festivals[activeFestivalIndex].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FestivalDisplay;
