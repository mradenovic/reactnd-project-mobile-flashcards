import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import DeckRoute from '../components/DeckRoute';

export default function DeckScreen() {

  return (
    <View style={styles.container}>
      <DeckRoute />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
