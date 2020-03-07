import { AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import * as deckActions from '../reducers/decks';
import * as permissionActions from '../reducers/permissions';
import example from '../example';

const KEY = '@mobile-flashcards:decks';
const NOTIFICATION_KEY = '@mobile-flashcards:notifications';

export const initDecks = () => async dispatch => {
  const data = await AsyncStorage.getItem(KEY);

  if (!data) {
    await AsyncStorage.setItem(KEY, JSON.stringify(example));
  }

  const decks = data ? JSON.parse(data) : example;
  dispatch(deckActions.initDecks(decks));
};

export const addDeck = ({ deck }) => async dispatch => {
  const newDeck = { [deck.id]: deck };
  await AsyncStorage.mergeItem(KEY, JSON.stringify(newDeck));
  dispatch(deckActions.addDeck({ deck }));
};

export const addCard = ({ id, card }) => async (dispatch, getState) => {
  dispatch(deckActions.addCard({ id, card }));
  const deck = getState().decks[id];
  const newDeck = { [deck.id]: deck };
  await AsyncStorage.mergeItem(KEY, JSON.stringify(newDeck));
};

export const addScore = ({ id, score }) => async (dispatch, getState) => {
  dispatch(deckActions.addScore({ id, score }));
  const deck = getState().decks[id];
  const newDeck = { [deck.id]: deck };
  await AsyncStorage.mergeItem(KEY, JSON.stringify(newDeck));
};

export const setPermision = () => async (dispatch) => {
  try {
    const { permissions: { notifications } } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    const { status } = notifications;

    if (status === 'granted') {
      dispatch(permissionActions.setPermission({ notifications }))
      return Promise.resolve(notifications);
    } else {
      const { permissions: { notifications } } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      dispatch(permissionActions.setPermission({ notifications }))
      return Promise.resolve(notifications);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};
