import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./item.js";
import categoriesSlice from "./categories.js";

const store = configureStore(
  {
    reducer: {
      item: itemSlice,
      categories: categoriesSlice,
    },
  },
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);

export default store;
