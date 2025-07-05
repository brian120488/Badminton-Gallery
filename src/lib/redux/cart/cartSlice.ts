import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Item, Cart } from '@/types/types'

const initialState: Cart = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;