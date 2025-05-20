import { useState } from "react";
import IndiaMap from "./components/IndiaMap";
import StateModal from "./components/StateModal";

function App() {
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [selectedStateTitle, setSelectedStateTitle] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStateClick = (id: string, title: string) => {
    setSelectedStateId(id);
    setSelectedStateTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-gray-100 p-6 overflow-x-hidden">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
        Bharat Darshan AI
      </h1>

      <div className="w-full max-w-3xl mx-auto h-[85vh] overflow-hidden">
        <IndiaMap onStateClick={(id, title) => handleStateClick(id, title)} />
      </div>

      <StateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;