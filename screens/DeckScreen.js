import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import DeckView from '../components/DeckView';

export default function DeckScreen({ route }) {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <DeckView id={id} showActions/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
