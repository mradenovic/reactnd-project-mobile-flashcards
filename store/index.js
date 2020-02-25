import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { initDecks, addDeck, addCard, addResult } from './reducers/decks';

const store = configureStore({
  reducer: rootReducer
});

export default store;

export { initDecks, addDeck, addCard, addResult };
