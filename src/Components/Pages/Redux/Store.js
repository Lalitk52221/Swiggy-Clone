import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slicer';
export const store = configureStore({
  reducer: {
    cart: counterReducer,
  },    
})