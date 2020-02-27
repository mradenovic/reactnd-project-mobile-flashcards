import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import * as deckActions from './reducers/decks';
import * as asyncActions from './actions/async';

const store = configureStore({
  reducer: rootReducer
});

export default store;

export { deckActions, asyncActions };
