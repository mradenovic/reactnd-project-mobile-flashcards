import { combineReducers } from 'redux';
import loading from './loading';
import decks from './decks';
import permissions from './permissions';

const store = combineReducers({
  loading,
  decks,
  permissions,
});

export default store;
