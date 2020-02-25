import { createSlice } from '@reduxjs/toolkit';

const decks = createSlice({
  name: 'decks',
  initialState: {},
  reducers: {
    initDecks(state, action) {
      return action.payload;
    },
    addDeck(state, action) {
      const deck = action.payload;
      state[deck.id] = deck;
    }
  }
});

export const { initDecks, addDeck } = decks.actions;

export default decks.reducer;
