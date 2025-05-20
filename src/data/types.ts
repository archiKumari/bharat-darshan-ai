export type CategoryKey =
  | "touristPlaces"
  | "food"
  | "culture"
  | "festivals"
  | "nature"
  | "crafts"
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

export interface StateData {
  id: string;
  name: string;
  capital?: string;
  categories: Record<CategoryKey, StateInfoItem[]>;
  miniMap: StateMiniMap;
}
