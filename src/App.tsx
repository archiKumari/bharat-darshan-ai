
import { useState } from "react";
import IndiaMap from "./components/IndiaMap";

function App() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <div className="bg-gray-100 p-6 overflow-x-hidden">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        Bharat Darshan AI
      </h1>

      {/* Selected State Output */}
      {selectedState && (
        <div className="mt-8 text-center text-lg">
          You selected:{" "}
          <span className="font-semibold text-indigo-700">{selectedState}</span>
        </div>
      )}

      {/* Bordered Map Frame */}
      <div className="w-full max-w-5xl mx-auto border border-gray-300 rounded-lg bg-white shadow p-4">
        <h2 className="text-xl font-semibold text-center mb-4">
          Click on a state
        </h2>

        {/* Maintain proper aspect ratio */}
        <div className="w-full aspect-[4/5]">
          <IndiaMap onStateClick={(name) => setSelectedState(name)} />
        </div>
      </div>
    </div>
  );
}

export default App;