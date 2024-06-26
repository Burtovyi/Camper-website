import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectItems } from "../campers/slice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { filters: {} },
  reducers: {
    setFilters(state, { payload }) {
      state.filters = payload;
    },
    resetFilters(state) {
      state.filters = {};
    },
  },
  selectors: {
    selectFilters(state) {
      return state.filters;
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export const { selectFilters } = filtersSlice.selectors;
export const filtersReducer = filtersSlice.reducer;

export const selectFilteredCampers = createSelector(
  [selectItems, selectFilters],
  (campers, filters) => {
    const normalizedFilters = Object.fromEntries(
      Object.entries(filters)
        .filter(([key, value]) => {
          return Array.isArray(value) ? value[0] !== "" : value !== "";
        })
        .map(([key, value]) => [key, Array.isArray(value) ? value[0] : value])
    );

    return campers.filter((camper) => {
      for (const key in normalizedFilters) {
        if (
          key === "location" &&
          !camper[key].includes(normalizedFilters[key])
        ) {
          return false;
        } else if (key === "form" && normalizedFilters[key] !== camper.form) {
          return false;
        } else if (
          key in camper.details &&
          normalizedFilters[key] !== camper.details[key]
        ) {
          return false;
        } else if (
          !(key in camper.details) &&
          camper[key] !== undefined &&
          normalizedFilters[key] !== camper[key]
        ) {
          return false;
        }
      }
      return true;
    });
  }
);