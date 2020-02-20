import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/Colors';

function DeckView(props) {
  const { deck } = props;
  const cardCount = Object.keys(deck.cards).length;

  return (
    <View style={styles.container}>
      <Text>{deck.title}</Text>
      <Text>{cardCount} card{cardCount !== 1 && 's'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tabBar,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    flex: 1,
  }
});

function mapStateToProps({ decks }, { id }) {
  return {
    deck: decks[id]
  };
}

export default connect(mapStateToProps)(DeckView);
