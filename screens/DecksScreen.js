import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import DeckList from '../components/DeckList';

export default function DecksScreen() {

  return (
    <View style={styles.container}>
      <DeckList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
