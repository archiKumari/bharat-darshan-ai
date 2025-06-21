import { useEffect } from "react";
import type { StateData } from "../data/types";
import TouristPlacesDisplay from "../components/categoryDisplays/TouristPlacesDisplay";
import FoodDisplay from "./categoryDisplays/FoodDisplay";
import type { FoodItem } from "../data/types";
import CultureDisplay from "./categoryDisplays/CultureDisplay";
import FestivalDisplay from "./categoryDisplays/FestivalDisplay";
import NatureDisplay from "./categoryDisplays/NatureDisplay";
import LocalLegendsDisplay from "./categoryDisplays/LocalLegendsDisplay";
import ArtAndCraftsDisplay from "./categoryDisplays/Art&CraftsDisplay";
import TriviaBubbles from "./TriviaBubbles";
import type { TriviaFact } from "./TriviaBubbles";
import Minimap from "./Minimap";

interface StateModalProps {
  isOpen: boolean;
  onClose: () => void;
  state: StateData;
}

export default function StateModal({ isOpen, state }: StateModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  console.log("State prop in state modal", state);

  const triviaFacts: TriviaFact[] = (state.categories.trivia || []).map(
    (t, idx) => ({
      id: String(idx),
      shortLabel: t.title,
      fullFact: t.description,
    })
  );

  return (
    <div className="fixed inset-0 bg-white z-50 scrollbar-hide overflow-y-scroll">
      <section className="p-6 border-b">
        <h3 className="text-lg font-semibold mb-2">Mini Map</h3>
        <div className="w-full h-64 bg-gray-100 rounded flex items-center justify-center">
          <Minimap stateCode={state.id} />
        </div>
      </section>

      <div className="relative">
        <TriviaBubbles facts={triviaFacts} />
        <section className=" space-y-12">
          {Object.entries(state.categories).map(([key, items]) => {
            if (key === "touristPlaces") {
              return (
                <div key={key}>
                  <TouristPlacesDisplay places={items} />
                </div>
              );
            }

            if (key === "food") {
              return (
                <div key={key}>
                  <FoodDisplay foodItems={items as FoodItem[]} />
                </div>
              );
            }

            if (key === "culture") {
              return (
                <div key={key}>
                  <CultureDisplay culture={items} />
                </div>
              );
            }

            if (key === "festivals") {
              return (
                <div key={key}>
                  <FestivalDisplay festivals={items} />
                </div>
              );
            }

            if (key === "nature") {
              return (
                <div key={key}>
                  <NatureDisplay items={items} />
                </div>
              );
            }

            if (key === "people") {
              return (
                <div key={key}>
                  <LocalLegendsDisplay people={items} />
                </div>
              );
            }

            if (key === "crafts") {
              return (
                <div key={key}>
                  <ArtAndCraftsDisplay crafts={items} />
                </div>
              );
            }
          })}
        </section>
      </div>
    </div>
  );
}
