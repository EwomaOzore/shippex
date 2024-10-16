import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ShipmentsState {
  searchTerm: string;
  categoryTerm: string[];
}

const initialState: ShipmentsState = {
  searchTerm: "",
  categoryTerm: [""],
};

const shipmentsSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<{ searchTerm: string }>) => {
      state.categoryTerm = initialState.categoryTerm;
      state.searchTerm = action.payload.searchTerm;
    },

    setCategoryTerm: (
      state,
      action: PayloadAction<{ categoryTerm: string }>,
    ) => {
      state.searchTerm = "";
      state.categoryTerm = [...state.categoryTerm, action.payload.categoryTerm];
    },

    removeCategoryTerm: (
      state,
      action: PayloadAction<{ categoryTerm: string }>,
    ) => {
      state.categoryTerm = state.categoryTerm.filter(
        (term) => term !== action.payload.categoryTerm,
      );
    },

    clearCategoryTerm: (state) => {
      state.categoryTerm = initialState.categoryTerm;
    },
  },
});

export const {
  setSearchTerm,
  setCategoryTerm,
  removeCategoryTerm,
  clearCategoryTerm,
} = shipmentsSlice.actions;
export default shipmentsSlice.reducer;