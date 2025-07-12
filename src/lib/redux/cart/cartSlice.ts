import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Item, Cart } from '@/types/types'

const initialState: Cart = {
  items: [],
  itemCount: 0,
  subtotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      // TODO: check selection object, not just name
      const i = state.items.findIndex(item => item.name === action.payload.name);
      if (i != -1) {
        state.items[i].quantity! += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.itemCount += action.payload.quantity;
      state.subtotal += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(item => item.name === action.payload.name);
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