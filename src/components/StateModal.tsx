import { useEffect } from "react";
import type { StateData } from "../data/types";
import placeholder from "../assets/placeholder.png";
// import { arunachal } from "../data/states/arunachal";

interface StateModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: StateData;
}

export default function StateModal({ isOpen, onClose, state }: StateModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // const state = arunachal;

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-scroll">
      <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center shadow-md z-50">
        <h2 className="text-xl font-semibold text-indigo-700">
          Explore {state.name}
        </h2>
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-red-500"
        >
          ✕ Close
        </button>
      </div>
      <section className="p-6 border-b">
        <h3 className="text-lg font-semibold mb-2">Mini Map</h3>
        <div className="w-full h-64 bg-gray-100 rounded flex items-center justify-center">
          {/* Replace with MiniMapView Components /> */}
          <p className="text-gray-500">[MiniMapView Placeholder]</p>
        </div>
      </section>

      <section className="p-6 space-y-12">
        {Object.entries(state.categories).map(([key, items]) => (
          <div key={key} className="space-y-4">
            <h3 className="text-xl font-bold capitalize text-indigo-800">
              {key.replace(/([A-Z])/g, " $1")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border rounded shadow hover:shadow-md transition overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={placeholder}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 px-3 py-1 text-white text-sm rounded backdrop-blur-sm bg-white/20 border border-white/30 shadow-sm">
                      {item.title}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
