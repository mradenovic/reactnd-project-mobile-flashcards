import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

function Deck(props) {
  const { deck } = props;

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(deck)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

export default connect(mapStateToProps)(Deck);
