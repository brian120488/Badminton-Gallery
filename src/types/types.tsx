export interface Item {
  image: string;
  name: string;
  price: number;
  quantity?: number;
  description?: string
}

export interface Cart {
  items: Item[];
  itemCount: number;
  subtotal: number;
}