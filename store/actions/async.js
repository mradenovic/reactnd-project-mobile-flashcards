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

export const clearLocalNotification = () => async () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export const setLocalNotification = () => async (dispatch, getState) => {
  try {
    const { permissions: { notifications: { status } } } = getState();
    const notificationId = JSON.parse(await AsyncStorage.getItem(NOTIFICATION_KEY))

    if (notificationId === null && status === 'granted') {
      await Notifications.cancelAllScheduledNotificationsAsync()

      let tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(20)
      tomorrow.setMinutes(0)
      tomorrow.setSeconds(0);

      const notificationId = await Notifications.scheduleLocalNotificationAsync(
        {
          title: 'Directions to Carnegie Hall',
          body: "Practice, practice, practice...!",
          ios: {
            sound: true,
          },
          android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
          }
        },
        {
          time: tomorrow,
          repeat: 'day',
        }
      )

      await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(notificationId))
      return Promise.resolve(notificationId);
    }
  } catch (e) {
    return Promise.reject(e);
  }
}
