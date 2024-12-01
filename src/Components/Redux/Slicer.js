import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  mode:"light"
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const { id, item } = action.payload;
      if (!state[id]) {
        state[id] = { ...item, quantity: 1 };
      } else {
        state[id].quantity += 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state[id]) {
        if (state[id].quantity > 1) {
          state[id].quantity -= 1;
        } else {
          delete state[id];
        }
      }
    },
    toggleMode: (state) => {
      
      if(state.mode ==="light"){
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        state.mode = "dark";
      }else{
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode"); 
        state.mode="light"
      }
    },
  },
});

export const { increment, decrement, toggleMode } = cartSlice.actions;
export default cartSlice.reducer;
