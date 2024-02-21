import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  searchinput: false,
};

const SearchItemsSlice = createSlice({
  name: "SearchItems",
  initialState,
  reducers: {
    AddAllProdcuts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProductsByPriceRange: (state, action) => {
      const { minPrice, maxPrice } = action.payload;
      state.filteredProducts = state.allProducts.filter((item) => {
        return item.price >= minPrice && item.price <= maxPrice;
      });
    },
    filterProductsBySearch: (state, action) => {
      const { input } = action.payload;
      state.filteredProducts = state.allProducts.filter((item) => {
        return new RegExp(input, "i").test(item.title);
      });
    },
  },
});

export const SearchItemsactions = SearchItemsSlice.actions;

export default SearchItemsSlice;
