import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';

export const  = configureStore({
  reducer: {
    cart,
  },
});
