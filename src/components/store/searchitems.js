import { createSlice } from "@reduxjs/toolkit";

const SearchItemsSlice = createSlice({
  name: "SearchItems",
  initialState: [],
  reducers: {
    AddAllProdcuts: (state, action) => {
      return action.payload;
    },
  },
});

export const SearchItemsactions = SearchItemsSlice.actions;

export default SearchItemsSlice;
