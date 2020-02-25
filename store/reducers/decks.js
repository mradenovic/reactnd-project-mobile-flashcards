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
    },
    addCard(state, action) {
      const { id, card } = action.payload;
      state[id].cards[card.id] = card;
    }
  }
});

export const { initDecks, addDeck, addCard } = decks.actions;

export default decks.reducer;
