import { createSlice } from '@reduxjs/toolkit';

const decks = createSlice({
  name: 'decks',
  initialState: {},
  reducers: {
    initDecks(state, action) {
      return action.payload;
    }
  }
});

export const { initDecks } = decks.actions;

export default decks.reducer;
