import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isDataEntryModalOpen: false,
    isBlockPreviewModalOpen: false,
    selectedBlock: null,
  },
  reducers: {
    openDataEntryModal: (state, action) => {
      state.isDataEntryModalOpen = true;
      state.selectedBlock = action.payload;
    },
    closeDataEntryModal: (state) => {
      state.isDataEntryModalOpen = false;
      state.selectedBlock = null;
    },
    openBlockPreviewModal: (state, action) => {
      state.isBlockPreviewModalOpen = true;
      state.selectedBlock = action.payload;
    },
    closeBlockPreviewModal: (state) => {
      state.isBlockPreviewModalOpen = false;
      state.selectedBlock = null;
    },
  },
});

export const {
  openDataEntryModal,
  closeDataEntryModal,
  openBlockPreviewModal,
  closeBlockPreviewModal,
} = uiSlice.actions;

export default uiSlice.reducer;
