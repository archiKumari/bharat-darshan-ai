import React from "react";
import placeholderImage from "../../assets/Category placeholders/food1.png";
import type { FoodItem } from "../../data/types";
import Tooltip from "../Tooltip";

interface Props {
  foodItems: FoodItem[];
}

const getCircularPosition = (index: number, total: number, radius: number) => {
  const angle = (2 * Math.PI * index) / total;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    transform: "translate(-50%, -50%)",
  };
};

const getArcPosition = (
  index: number,
  total: number,
  position: "top" | "bottom"
) => {
  const arcAngle = (2 * Math.PI) / 3;
  const centerAngle = position === "top" ? -Math.PI / 2 : Math.PI / 2;
  const startAngle = centerAngle - arcAngle / 2;
  const angleStep = arcAngle / (total - 1);
  const angle = startAngle + index * angleStep;

  const radius = 220;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    transform: "translate(-50%, -50%)",
  };
};

const getSideArcPosition = (index: number, side: "left" | "right") => {
  const baseAngle = side === "left" ? Math.PI : 0;
  const angleOffsets = [-Math.PI / 6, -Math.PI / 18, Math.PI / 18, Math.PI / 6];
  const angle =
    baseAngle + (side === "left" ? angleOffsets[index] : -angleOffsets[index]);

  const radius = 340;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
    transform: "translate(-50%, -50%)",
  };
};

const FoodDisplay: React.FC<Props> = ({ foodItems }) => {
  const breadBasket = foodItems.find((i) => i.subtype === "breadbasket");
  const condiments = foodItems.filter((i) => i.subtype === "condiment");
  const mainDishes = foodItems.filter((i) => i.subtype === "main");
  const mainsTop = mainDishes.slice(0, 5);
  const mainsBottom = mainDishes.slice(5, 10);

  const riceDishes = foodItems.filter((i) => i.subtype === "rice");
  const riceLeft = riceDishes[0];
  const riceRight = riceDishes[1];
  const desserts = foodItems.filter((i) => i.subtype === "dessert");
  const drinks = foodItems.filter((i) => i.subtype === "drink");

  return (
    <div className="relative w-full h-screen bg-stone-100 overflow-visible">
      {breadBasket && (
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="relative ">
            <Tooltip
              content={
                <div>
                  <div className="font-semibold">{breadBasket.title}</div>
                  <div className="text-xs text-gray-600">
                    {breadBasket.description}
                  </div>
                </div>
              }
              position="top"
            >
              <img
                src={breadBasket?.image || placeholderImage}
                alt={breadBasket?.title || "Bread Basket"}
                className="w-32 h-32 rounded-full"
              />
            </Tooltip>
          </div>
        </div>
      )}

      {condiments.map((item, i) => (
        <div
          key={i}
          className="absolute"
          style={getCircularPosition(i, condiments.length, 110)}
        >
          <div className="relative ">
            <Tooltip
              content={
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-600">
                    {item.description}
                  </div>
                </div>
              }
              position="top"
            >
              <img
                src={placeholderImage}
                alt={item.title}
                className="w-14 h-14 rounded-full"
              />
            </Tooltip>
          </div>
        </div>
      ))}

      {[riceLeft, riceRight].map((item, i) =>
        item ? (
          <div
            key={`rice-${i}`}
            className="absolute"
            style={{
              top: "50%",
              left: i === 0 ? "calc(50% - 220px)" : "calc(50% + 220px)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="relative ">
              <Tooltip
                content={
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-xs text-gray-600">
                      {item.description}
                    </div>
                  </div>
                }
                position="top"
              >
                <img
                  src={item.image || placeholderImage}
                  alt={item.title}
                  className="w-28 h-24 rounded-full"
                />
              </Tooltip>
            </div>
          </div>
        ) : null
      )}

      {[...mainsTop, ...mainsBottom].map((item, i) => (
        <div
          key={`main-${i}`}
          className="absolute"
          style={getArcPosition(i % 5, 5, i < 5 ? "top" : "bottom")}
        >
          <div className="relative ">
            <Tooltip
              content={
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-600">
                    {item.description}
                  </div>
                </div>
              }
              position="top"
            >
              <img
                src={placeholderImage}
                alt={item.title}
                className="w-20 h-20 rounded-full"
              />
            </Tooltip>
          </div>
        </div>
      ))}

      {[
        ...drinks.slice(0, 2),
        ...desserts.slice(0, 2),
        drinks[1],
        drinks[2],
        ...desserts.slice(2, 4),
        drinks[3],
      ].map((item, i) => (
        <div
          key={`side-${i}`}
          className="absolute"
          style={getSideArcPosition(i % 4, i < 4 ? "left" : "right")}
        >
          <div className="relative ">
            <Tooltip
              content={
                <div>
                  <div className="font-semibold">{item?.title}</div>
                  <div className="text-xs text-gray-600">
                    {item?.description}
                  </div>
                </div>
              }
              position="top"
            >
              <img
                src={item?.image || placeholderImage}
                alt={item?.title || "item"}
                className="w-16 h-16 rounded-md"
              />
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodDisplay;
