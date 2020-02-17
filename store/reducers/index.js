import { combineReducers } from 'redux';
import loading from './loading';
import decks from './decks';

const store = combineReducers({
  loading,
  decks,
});

export default store;
