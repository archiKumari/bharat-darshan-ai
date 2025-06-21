import { useState } from "react";
import IndiaMap from "./components/IndiaMap";
import StateModal from "./components/StateModal";
import { statesMap } from "./data/states";
import StateSvg from './assets/indiaStates.svg?react';

function App() {
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStateClick = (id: string) => {
    setSelectedStateId(id);
    setIsModalOpen(true);
  };
  const selectedStateData = selectedStateId ? statesMap[selectedStateId] : null;

  return (
    <>
      < StateSvg style={{ display: "none" }} />
      <div className="bg-gray-100 p-6 overflow-x-hidden">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          Bharat Darshan AI
        </h1>

        <div className="w-full max-w-3xl mx-auto h-[85vh] overflow-hidden">
          <IndiaMap onStateClick={(id) => handleStateClick(id)} />
        </div>
        {selectedStateData && (
          <StateModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            state={selectedStateData}
          />
        )}
      </div>
    </>
  );
}

export default App;
