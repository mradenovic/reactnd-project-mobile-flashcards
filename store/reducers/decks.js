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
    },
    addScore(state, action ) {
      const { id,  score } = action.payload;
      state[id].scores[score.id] = score;
    }
  }
});

export const { initDecks, addDeck, addCard, addScore } = decks.actions;

export default decks.reducer;
