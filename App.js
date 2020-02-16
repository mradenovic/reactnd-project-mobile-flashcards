import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import AppView from './AppView';

export default function App() {
  return (
    <View style={styles.container}>
      <AppView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
