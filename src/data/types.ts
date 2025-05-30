export type CategoryKey =
  | "touristPlaces"
  | "food"
  | "culture"
  | "festivals"
  | "nature"
  | "crafts"
  | "people"
  | "trivia"; 

export interface StateInfoItem {
  title: string;
  description: string;
  image?: string;
  coordinates?: [number, number];
}

export interface StateMiniMap {
  pins: StateInfoItem[];
  image?: string;
}

export type FoodSubtype = "main" | "dessert" | "drink" | "condiment";

export interface FoodItem {
  title: string;
  description: string;
  image?: string;
  subtype: FoodSubtype;
}

export interface StateData {
  id: string;
  name: string;
  capital?: string;
  miniMap: StateMiniMap;
  categories: {
  touristPlaces: StateInfoItem[];
  culture: StateInfoItem[];
  festivals: StateInfoItem[];
  nature: StateInfoItem[];
  crafts: StateInfoItem[];
  people: StateInfoItem[];
  trivia: StateInfoItem[];
  food: FoodItem[];
};
}