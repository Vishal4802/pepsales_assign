import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  swimlanes: [
    { id: "backlog", title: "Backlog" },
    { id: "inProgress", title: "In Progress" },
    { id: "done", title: "Done" },
  ],
};

const swimlanesSlice = createSlice({
  name: "swimlanes",
  initialState,
  reducers: {
    setSwimlanes: (state, action) => {
      state.swimlanes = action.payload;
    },
  },
});

export const { setSwimlanes } = swimlanesSlice.actions;

export default swimlanesSlice.reducer;
