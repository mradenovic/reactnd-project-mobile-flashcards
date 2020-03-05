import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store, { asyncActions } from './store';
import AppView from './AppView';

export default function App() {
  React.useEffect(() => {
    store.dispatch(asyncActions.initDecks());
    store.dispatch(asyncActions.setPermision())
  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppView />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
