import React from "react";
import type { FoodItem } from "../../data/types";
import placeholderImage from "../../assets/Category placeholders/food1.png";
import table from "../../assets/food background.png";

interface Props {
  foodItems: FoodItem[];
}

const FoodDisplay: React.FC<Props> = ({ foodItems }) => {
  const mains = foodItems.filter((item) => item.subtype === "main");
  const condiments = foodItems.filter((item) => item.subtype === "condiment");
  const drinks = foodItems.filter((item) => item.subtype === "drink");
  const desserts = foodItems.filter((item) => item.subtype === "dessert");

  return (
    <div
      className="relative w-full h-screen bg-no-repeat bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${table})` }}
    >
      {/* Main Dishes – Top Edge */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4/5 flex justify-between mt-4 ">
        {mains.slice(0, 5).map((item, idx) => (
          <DishCard key={idx} item={item} tooltipPosition="bottom" />
        ))}
      </div>

      {/* Main Dishes – Bottom Edge */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4/5 flex justify-between mb-4">
        {mains.slice(5, 10).map((item, idx) => (
          <DishCard key={idx} item={item} tooltipPosition="top" />
        ))}
      </div>

      {/* Desserts – Right Edge */}
      <div className="absolute top-20 bottom-20 right-0 w-28 flex flex-col justify-between items-center">
        {desserts.slice(0, 4).map((item, idx) => (
          <DishCard key={idx} item={item} tooltipPosition="left" />
        ))}
      </div>

      {/* Drinks – Left Edge */}
      <div className="absolute top-20 bottom-20 left-0 w-28 flex flex-col justify-between items-center">
        {drinks.slice(0, 4).map((item, idx) => (
          <DishCard key={idx} item={item} tooltipPosition="right" />
        ))}
      </div>

      {/* Condiments – Staggered Center Grid */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-6">
        {/* Top row: 5 items evenly spaced */}
        <div className="flex justify-center gap-8">
          {condiments.slice(0, 5).map((item, idx) => (
            <DishCard key={idx} item={item} small tooltipPosition="top" />
          ))}
        </div>
        {/* Bottom row: 4 items offset to align between top row items */}
        <div className="flex justify-center gap-8 pl-10">
          {condiments.slice(5, 10).map((item, idx) => (
            <DishCard key={idx} item={item} small tooltipPosition="bottom" />
          ))}
        </div>
      </div>
    </div>
  );
};

const DishCard: React.FC<{
  item: FoodItem;
  small?: boolean;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
}> = ({ item, small, tooltipPosition = "top" }) => (
  <div
    className={`flex flex-col items-center transition-transform hover:-translate-y-2 hover:scale-105 relative group ${
      small ? "w-16" : "w-24"
    }`}
  >
    <img
      src={item.image || placeholderImage}
      alt={item.title}
      className="rounded-full"
    />
    <div
      className={`
    absolute z-20 w-56 px-4 py-2 bg-white text-gray-800 text-sm shadow-lg rounded-lg
    opacity-0 group-hover:opacity-100 transition-all duration-200
    ${
      tooltipPosition === "top"
        ? "bottom-full mb-3 left-1/2 -translate-x-1/2"
        : ""
    }
    ${
      tooltipPosition === "bottom"
        ? "top-full mt-3 left-1/2 -translate-x-1/2"
        : ""
    }
    ${
      tooltipPosition === "left"
        ? "right-full mr-3 top-1/2 -translate-y-1/2"
        : ""
    }
    ${
      tooltipPosition === "right"
        ? "left-full ml-3 top-1/2 -translate-y-1/2"
        : ""
    }
  `}
    >
      <div className="font-semibold text-center">{item.title}</div>
      <div className="mt-1 text-xs text-center italic">{item.description}</div>
    </div>
  </div>
);

export default FoodDisplay;
