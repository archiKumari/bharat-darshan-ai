import React from "react";
import Minimap from "./Minimap";
import bgImage from "../assets/stateIntroBackground.png";

export interface StateDescription {
  title: string;
  description: string;
  highlights: string[];
}

export interface StateIntroProps {
  stateId: string;
  stateDescription?: StateDescription;
}

const placeholder: StateDescription = {
  title: "Gujarat",
  description:
    "Perched on India’s western edge along the Arabian Sea, Gujarat is a land of striking contrasts—where ancient desert salt flats meet bustling industrial ports, and time-honored traditions blend seamlessly with modern enterprise. As the birthplace of Mahatma Gandhi, it carries a profound historical legacy, yet its cities—Ahmedabad, Vadodara and Surat—throb with contemporary energy. From the snow-white expanse of the Rann of Kutch to the lush woodlands of Gir, Gujarat invites you to explore its rich tapestry of landscapes, cultures and flavors.",
  highlights: [
    "Statue of Unity",
    "UNESCO World Heritage Sites",
    "Sacred Seaside Cities",
    "Economic Dynamo",
    "Culinary Extravaganza",
    "Wild & White Wonders",
  ],
};

const StateIntro: React.FC<StateIntroProps> = ({
  stateId,
  stateDescription,
}) => {
  const { title, description, highlights } = stateDescription || placeholder;

  return (
    <div
      className="relative h-screen w-screen p-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full w-full p-2 border-4 border-dashed border-[#75420f] pointer-events-none">
        {/* Content wrapper with white background */}
        <div className="relative flex flex-col md:flex-row overflow-hidden">
          {/* Left column: title, description, highlights */}
          <div className="md:w-1/2 p-6">
            <h1 className="eagle-lake-regular text-5xl text-[#63330c] leading-tight mb-5">
              {title}
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

          <div className="md:w-1/2 h-auto">
            <Minimap stateCode={stateId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateIntro;
