import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const {id,item} = action.payload;
      if(!state[id]){
        state[id] = {...item,quantity:0};
      }else{
        state[id].quantity+=1;
      }
      
    },
    decrement: (state, action) => {
      const id = action.payload;
      if(state[id]){
        if(state[id].quantity>1){
          state[id].quantity-=1;
        }else{
          delete state[id];
        }
      }
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {},
//   reducers: {
//     increment: (state, action) => {
//       const itemId = action.payload.id; // Item ID
//       const itemData = action.payload.item; // Item data (name, price, etc.)
//       if (!state[itemId]) {
//         // If the item is not in the cart, add it with count 1
//         state[itemId] = { ...itemData, quantity: 1 };
//       } else {
//         // If the item is already in the cart, increment the quantity
//         state[itemId].quantity += 1;
//       }
//     },
//     decrement: (state, action) => {
//       const itemId = action.payload;
//       if (state[itemId]) {
//         if (state[itemId].quantity > 1) {
//           state[itemId].quantity -= 1; // Decrease quantity
//         } else {
//           delete state[itemId]; // Remove the item if quantity is 0
//         }
//       }
//     },
//   },
// });

// export const { increment, decrement } = cartSlice.actions;
// export default cartSlice.reducer;
