import { useState } from "react";

import IndiaSVG from "../assets/india.svg?react";
import HoverPreview from "./HoverPreview";

type Props = {
  onStateClick: (stateId: string, title: string) => void;
};
export default function IndiaMap({ onStateClick }: Props) {
  const [hoverInfo, setHoverInfo] = useState<{
    visible: boolean;
    x: number;
    y: number;
    name: string;
  }>({ visible: false, x: 0, y: 0, name: "" });

  const handleMouseMove = (e: React.MouseEvent) => {
    const target = e.target as SVGElement;
    const hoveredPath = target.closest("path");
    const title = hoveredPath?.getAttribute("title");

    if (title) {
      setHoverInfo({
        visible: true,
        x: e.clientX,
        y: e.clientY,
        name: title,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoverInfo({ visible: false, x: 0, y: 0, name: "" });
  };
  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const target = event.target as SVGElement;
    const clickedPath = target.closest("path");

    if (clickedPath) {
      const stateId = clickedPath.id;
      const stateTitle = clickedPath.getAttribute("title") || stateId;

      if (stateId.startsWith("IN-")) {
        onStateClick(stateId, stateTitle);
      }
    }
  };

  return (
    <div className="w-full h-full relative">
      <IndiaSVG
        className="w-full h-full object-contain"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />

      <HoverPreview
        visible={hoverInfo.visible}
        x={hoverInfo.x}
        y={hoverInfo.y}
        name={hoverInfo.name}
      />
    </div>
  );
}
