export interface Item {
  image: string;
  name: string;
  price: number;
}

export interface Cart {
  items: Item[];
}