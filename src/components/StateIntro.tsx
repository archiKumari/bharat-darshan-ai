import React from "react";
import Minimap from "./Minimap";
import bgImage from "../assets/stateIntroBackground.png";

export interface StateDescription {
  description: string;
  highlights: string[];
}

export interface StateIntroProps {
  stateId: string;
  title: string;
  stateIntro: string;
}

const HIGHLIGHTS = [
  "Places to Explore",
  "Local Food & Cuisine",
  "Culture & Heritage",
  "Festivals & Traditions",
  "Nature & Wildlife",
  "Famous Personalities",
  "Arts & Handicrafts",
];

const StateIntro: React.FC<StateIntroProps> = ({
  stateId,
  title,
  stateIntro,
}) => {
  const stateTitle = title;
  const description = stateIntro;
  const highlights = HIGHLIGHTS;

  return (
    <div
      className="relative h-screen w-screen p-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full w-full p-2 border-4 border-dashed border-[#75420f] pointer-events-none ">
        <div className="relative flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6">
            <h1 className="eagle-lake-regular text-5xl text-[#63330c] leading-tight mb-5">
              {stateTitle}
            </h1>
            <p className="mb-4 text-lg text-[#42270b] leading-snug">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {highlights.map((point, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-[#734110] text-[#f3cca4] px-3 py-1 rounded-md text-sm"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 h-screen ">
            <Minimap stateCode={stateId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateIntro;
