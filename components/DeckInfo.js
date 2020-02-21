import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DeckInfo(props) {
  const { deck } = props;
  const cardCount = Object.keys(deck.cards).length;

  return (
    <View style={styles.container}>
      <Text>{deck.title}</Text>
      <Text>
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
  }
});
