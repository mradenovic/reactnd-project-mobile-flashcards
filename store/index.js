import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { initDecks } from './reducers/decks';

const store = configureStore({
  reducer: rootReducer
});

export default store;

export { initDecks };
