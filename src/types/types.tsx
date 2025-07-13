export type Item =
  | RacketItem
  | ShoesItem
  | StringItem
  | ShuttleItem
  | AccessoryItem
  | BagItem
  | PaddleItem;

export type ItemType =
  | 'racket'
  | 'shoes'
  | 'string'
  | 'shuttle'
  | 'accessory'
  | 'bag'
  | 'paddle';

export interface BaseItem {
  id: string
  type: ItemType;
  name: string;
  brand: string
  images: string[];
  price: number;
  quantity: number;
  selection: Selection;
}

export type Selection = Partial<{
  color: string;
  weight_grip: string;
  string: string;
  tension: number;
}>;

export interface Cart {
  items: Item[];
  itemCount: number;
  subtotal: number;
}

export interface RacketItem extends BaseItem {
  type: 'racket';
  specs: {
    balance: 'head-heavy' | 'even' | 'head-light';
    flex: 'stiff' | 'medium' | 'flexible';
    weight_grip: string[];
    colors: string[];
  };
}

export interface BagItem extends BaseItem {
  type: 'bag';
  capacity: number;  
  waterproof?: boolean;
  colors: string[];
}

export interface ShoesItem extends BaseItem {
  type: 'shoes';
  availableSizes: number[];
  gender: 'men' | 'women' | 'unisex';
  color: string;
}

export interface StringItem extends BaseItem {
  type: 'string';
  name: string;       
  colors: string[];
  lengths: number[];  // in meters
}

export interface ShuttleItem extends BaseItem {
  type: 'shuttle';
  feather: 'goose' | 'duck' | 'synthetic';
  grade: 'training' | 'tournament' | 'premium';
  speed?: string;            // e.g., 76, 77
  countPerTube?: number;
}

export interface AccessoryItem extends BaseItem {
  type: 'accessory';
  category: string;          // e.g., "grip", "bag", etc.
  color?: string;
}

export interface PaddleItem extends BaseItem {
  type: 'paddle';
  material: string;         // e.g., carbon, wood, composite
  weight: number;           // in grams
  gripSize: string;         // e.g., G4
  length?: number;          // in mm
}
