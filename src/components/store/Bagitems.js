import { createSlice } from "@reduxjs/toolkit";

const BagItemsSlice = createSlice({
  name: "BagItems",
  initialState: [],
  reducers: {
    addtoBag: (state, action) => {
      state.push(action.payload);
    },
    removefromBag: (state, action) => {
      return state.filter((item) => item.item.id !== action.payload);
    },
    addQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.find((item) => item.item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
      } else {
        return state;
      }
    },
    minusQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.find((item) => item.item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity -= 1;
      } else {
        return state;
      }
    },
  },
});

export const BagItemsactions = BagItemsSlice.actions;

export default BagItemsSlice;
