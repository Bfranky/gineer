export type MenuCategory = "sharwama" | "grills" | "sides" | "drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  emoji: string;
  popular?: boolean;
  spicyLevel?: 1 | 2 | 3;
  available?: boolean;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  rating: number;
  date: string;
  text: string;
  highlighted?: boolean;
}

export interface DriveThruStep {
  step: number;
  title: string;
  description: string;
  emoji: string;
}
