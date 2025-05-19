import IndiaSVG from "../assets/india.svg?react";

type Props = {
  onStateClick: (stateId: string, title: string) => void;
};

export default function IndiaMap({ onStateClick }: Props) {
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
    <div className="w-full h-full">
      <IndiaSVG
        className="w-full h-full object-contain"
        onClick={handleClick}
      />
    </div>
  );
}
