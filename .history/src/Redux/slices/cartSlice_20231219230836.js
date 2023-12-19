import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.image1 === action.payload.image1);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      const itemToRemove = state.items.find((obj) => obj.image1 === action.payload.image1);

      if (itemToRemove) {
        if (itemToRemove.count === 1) {
          state.items = state.items.filter((obj) => obj.image1 !== action.payload.image1);
        } else {
          itemToRemove.count--;
        }

        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      }
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
