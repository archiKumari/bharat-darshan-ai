import React from "react";

export interface MinimapProps {
  stateCode: string;
  width?: string;
  height?: string;
}

const VIEW_BOX = "0 0 611.86 695.70";

const Minimap: React.FC<MinimapProps> = ({
  stateCode,
  width = "500px",
  height = "500px",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={VIEW_BOX}
      width={width}
      height={height}
      className="flex justify-center items-center"
      role="img"
      aria-label={`Minimap of state ${stateCode}`}
    >
      <use href={`#${stateCode}`} fill="teal" stroke="black" strokeWidth={1} />
    </svg>
  );
};

export default Minimap;
