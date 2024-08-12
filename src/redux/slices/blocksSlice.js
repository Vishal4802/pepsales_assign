import { createSlice } from "@reduxjs/toolkit";

const blocksSlice = createSlice({
  name: "blocks",
  initialState: {
    blocks: [],
  },
  reducers: {
    setBlocks: (state, action) => {
      state.blocks = action.payload;
    },
    updateBlockState: (state, action) => {
      const { blockId, newState, additionalData } = action.payload;
      const block = state.blocks.find((block) => block.id === blockId);
      if (block) {
        block.state = newState;
        block.history.push(newState);
        block.additionalData = additionalData;
      }
    },
  },
});

export const { setBlocks, updateBlockState } = blocksSlice.actions;

export default blocksSlice.reducer;
