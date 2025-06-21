// src/components/Minimap.tsx
import React from "react";
import stateMapIndex from "../assets/state maps";

export interface MinimapProps {
  stateCode: string; // e.g. "IN-AN"
}

const Minimap: React.FC<MinimapProps> = ({ stateCode }) => {
  const key = stateCode.replace(/-/g, "");
  const Svg = stateMapIndex[key];
  if (!Svg) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        Map not found
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Svg
        className="w-full h-full pt-4"
        style={{
          stroke: "#63330c", 
          fill: "#8B4513", 
          strokeWidth: 1,
        }}
      />
    </div>
  );
};

export default Minimap;
