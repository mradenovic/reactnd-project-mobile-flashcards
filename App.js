import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import AppView from './AppView';

export default function App() {
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
