import { configureStore } from "@reduxjs/toolkit";
import swimlanesReducer from "./slices/swimlanesSlice";
import blocksReducer from "./slices/blocksSlice";
import uiReducer from "./slices/uiSlice";

const store = configureStore({
  reducer: {
    swimlanes: swimlanesReducer,
    blocks: blocksReducer,
    ui: uiReducer,
  },
});

export default store;
