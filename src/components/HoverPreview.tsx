type HoverPreviewProps = {
    visible: boolean;
    x: number;
    y: number;
    name: string;
  };
  
  export default function HoverPreview({ visible, x, y, name }: HoverPreviewProps) {
    if (!visible) return null;
  
    return (
      <div
        className="fixed z-50 bg-white text-sm font-medium px-3 py-1 rounded shadow border border-gray-300 pointer-events-none transition-opacity duration-150"
        style={{ top: y - 40, left: x - 80 }}
      >
        {name}
      </div>
    );
  }
  