import React, { useState } from "react";
import placeholderImage from "../../assets/Category placeholders/festival.png";
import festival1 from "../../assets/Category placeholders/festival1.png";
import background from "../../assets/festival background.png";
import stringImg from "../../assets/string.png";

interface FestivalItem {
  title: string;
  description: string;
  image?: string;
}

interface Props {
  festivals: FestivalItem[];
}

const FestivalDisplay: React.FC<Props> = ({ festivals }) => {
  const [activeFestivalIndex, setActiveFestivalIndex] = useState<number | null>(
    null
  );

  return (
    <div
      className="w-full h-screen flex flex-col justify-between"
      style={{
        backgroundImage: `radial-gradient(rgba(100,10,10,0.9), rgba(201,40,40,0.4)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide flex-1 flex items-center text-[rgba(201,40,40,0.64)]">
        <div className="flex gap-x-4 px-4 justify-center w-full">
          {festivals.map((festival, index) => {
            const isEven = index % 2 === 0;
            const threadHeight = isEven ? "32vh" : "52vh";

            return (
              <div
                key={festival.title}
                className="relative flex flex-col items-center h-screen cursor-pointer"
                onClick={() => setActiveFestivalIndex(index)}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none">
                  <div
                    className="w-6"
                    style={{
                      height: threadHeight,
                      backgroundImage: `url(${stringImg})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>

                <div
                  className="relative z-30 flex items-center justify-center"
                  style={{ marginTop: threadHeight }}
                >
                  <div className="w-28 h-28 rounded-full border-4 border-yellow-400 hover:shadow-[0_0_30px_6px_rgba(255,230,0,0.7)] transition-shadow duration-300 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-2 border-yellow-300 border-dashed flex items-center justify-center overflow-hidden text-red-950">
                      <img
                        src={festival.image || placeholderImage}
                        alt={festival.title}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-3 tagesschrift-regular tracking-wider font-semibold text-yellow-400 text-lg">
                  {festival.title}
                </div>

                <div className="text-center text-xs text-yellow-100 max-w-[9rem] mt-0.5">
                  {festival.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h2 className="text-6xl tagesschrift-regular text-yellow-400 mb-8 drop-shadow-[0_0_6px_rgba(255,215,0,0.6)] tracking-wider text-center">
        Festivals
      </h2>

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
