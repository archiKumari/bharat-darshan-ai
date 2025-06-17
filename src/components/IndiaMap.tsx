import { useState } from "react";
import IndiaSVG from "../assets/in.svg?react";
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const path = (e.target as Element).closest("path");
    if (!path) {
      setHoverInfo({ visible: false, x: 0, y: 0, name: "" });
      return;
    }

    const label = path.getAttribute("title");
    if (!label) {
      setHoverInfo({ visible: false, x: 0, y: 0, name: "" });
      return;
    }

    setHoverInfo({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      name: label,
    });
  };

  const handleMouseLeave = (
  ) => {
    setHoverInfo({ visible: false, x: 0, y: 0, name: "" });
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const path = (e.target as Element).closest("path");
    if (!path) return;
    const stateId = path.id;
    const title = path.getAttribute("title") || stateId;
    console.log("path",path);
    console.log(stateId,title);


    if (stateId.startsWith("IN")) {
      onStateClick(stateId, title);
    }
  };

  return (
    <div
      className="w-full h-full relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <IndiaSVG className="w-full h-full object-contain" />
      <HoverPreview
        visible={hoverInfo.visible}
        x={hoverInfo.x}
        y={hoverInfo.y}
        name={hoverInfo.name}
      />
    </div>
  );
}
