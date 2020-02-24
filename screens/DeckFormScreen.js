import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import DeckForm from  '../components/DeckForm';

export default function DeckFormScreen() {
  return (
    <View style={styles.container}>
      <DeckForm></DeckForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
