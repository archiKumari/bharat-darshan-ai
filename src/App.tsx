import { useState } from "react";
import IndiaMap from "./components/IndiaMap";
import Modal from "./components/Modal";

function App() {
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [selectedStateTitle, setSelectedStateTitle] = useState<string | null>(null);

  const handleStateClick = (id: string, title: string) => {
    setSelectedStateId(id);
    setSelectedStateTitle(title);
  };

  return (
    <div className="bg-gray-100 p-6 overflow-x-hidden">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
        Bharat Darshan AI
      </h1>

      <div className="w-full max-w-3xl mx-auto h-[80vh] overflow-hidden">
        <IndiaMap onStateClick={(id, title) => handleStateClick(id, title)} />
      </div>

      <Modal
        isOpen={!!selectedStateId}
        title={selectedStateTitle || ''}
        onClose={() => {
          setSelectedStateId(null);
          setSelectedStateTitle(null);
        }}
      >
        <p className="text-gray-700 text-center">
          You clicked on: <strong>{selectedStateId}</strong>
        </p>
      </Modal>
    </div>
  );
}

export default App;
