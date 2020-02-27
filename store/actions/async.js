import { AsyncStorage } from 'react-native';
import { deckActions } from '../index';
import example from '../example';

const KEY = '@mobile-flashcards:decks';

export const initDecks = () => async (dispatch) => {
  const data = await AsyncStorage.getItem(KEY);
  const decks = data
    ? JSON.parse(data)
    : example;
  dispatch(deckActions.initDecks(decks));
};

export const addDeck = ({ deck }) => (dispatch) => {
  dispatch(deckActions.addDeck({ deck }));
};

export const addCard = ({ id, card }) => (dispatch) => {
  dispatch(deckActions.addCard({ id, card }));
};

export const addScore = ({ id, score }) => (dispatch) => {
  dispatch(deckActions.addScore({ id, score }));
};
