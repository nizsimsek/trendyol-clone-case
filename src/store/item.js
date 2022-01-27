import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [],
    filteredItems: [],
    brands: [],
    isFilter: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.filteredItems = action.payload.items;
      state.brands = [
        ...new Set(action.payload.items.map((item) => item.brandName)),
      ];
    },
    dataFilter(state, action) {
      const { prop, val } = action.payload;

      const filteredData = state.items.filter((item) => item[prop] === val);

      state.filteredItems = filteredData;
      state.isFilter = true;
    },
    filterBrandName(state, action) {
      state.filteredItems = state.items.filter(
        (item) =>
          item.brandName
            .toLocaleLowerCase()
            .indexOf(action.payload.toLocaleLowerCase()) !== -1
      );

      state.isFilter = true;
    },
    filterItemName(state, action) {
      state.filteredItems = state.items.filter(
        (item) =>
          item.name
            .toLocaleLowerCase()
            .indexOf(action.payload.toLocaleLowerCase()) !== -1
      );

      state.isFilter = true;
    },
    filterPrice(state, action) {
      const { min, max } = action.payload;
      state.filteredItems = state.items.filter(
        (item) => item.price <= max && item.price >= min
      );

      state.isFilter = true;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;
