import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Selection, Item, Cart } from '@/types/types'

const initialState: Cart = {
  items: [],
  itemCount: 0,
  subtotal: 0,
};

function isSameItem(item1: Item, item2: Item) {
  if (item1.id != item2.id) return false;

  const sel1 = item1.selection || {};
  const sel2 = item2.selection || {};

  const keys = Object.keys(sel1) as (keyof Selection)[];

  for (const key of keys) {
    if (sel1[key] !== sel2[key]) {
      return false;
    }
  }

  return true;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const i = state.items.findIndex(item => isSameItem(item, action.payload));
      if (i != -1) {
        state.items[i].quantity! += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.itemCount += action.payload.quantity;
      state.subtotal += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(item => isSameItem(item, action.payload));
      const item = state.items[index];
      state.itemCount -= item.quantity!;
      state.subtotal -= item.price * item.quantity!
      state.items.splice(index, 1);
    },
    clearCart: (state) => {
      state.items = [];
      state.itemCount = 0;
      state.subtotal = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;