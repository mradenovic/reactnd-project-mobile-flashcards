# Udacity React Nanodegree: Mobile Flashcards Project

**Mobile Flashcards** is the third project built during completion of the [Udacity's](https://www.udacity.com/) [React Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

It is a simple native app built with [React Native](https://github.com/facebook/react-native) for Android and iOS that lets a user create flashcards and practice.

## Tools and technologies

This project was bootstrapped with [Expo CLI](https://github.com/expo/expo-cli). You can find more information in [Expo CLI documentation](https://docs.expo.io/versions/v36.0.0/).

State of the app is managed with [Redux](https://redux.js.org/) and implementation is done with [Redux Toolkit](https://redux-toolkit.js.org/), the official toolset for Redux. The bindings bwtween the app and the state are establisehd throutgh [React Redux](https://react-redux.js.org/).

## Develop (or review project)

The prefered way to work with the project is `yarn`, although `npm` will work too:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

Although data is sotred thru [AsyncStorage](https://reactnative.dev/docs/asyncstorage), the app can be fairly easy extended to store data on a remote server.

## License

[MIT License](LICENSE.md)