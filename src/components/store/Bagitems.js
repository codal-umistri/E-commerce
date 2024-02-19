import { createSlice } from "@reduxjs/toolkit";

const BagItemsSlice = createSlice({
  name: "BagItems",
  initialState: [],
  reducers: {
    addtoBag: (state, action) => {
      state.push(action.payload);
    },
    removefromBag: (state, action) => {
      console.log(state);
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const BagItemsactions = BagItemsSlice.actions;

export default BagItemsSlice;
