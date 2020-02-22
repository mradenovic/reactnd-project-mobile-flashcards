import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DeckInfo(props) {
  const { deck } = props;
  const cardCount = Object.keys(deck.cards).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.subtitle}>
        {cardCount} card{cardCount !== 1 && 's'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
  }
});
