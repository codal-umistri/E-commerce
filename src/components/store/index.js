import { configureStore } from "@reduxjs/toolkit";
import BagItemsSlice from "./Bagitems";
import SearchItemsSlice from "./searchitems";

const brighspaceStore = configureStore({
  reducer: {
    BagItems: BagItemsSlice.reducer,
    SearchItems: SearchItemsSlice.reducer
  },
});

export default brighspaceStore;
