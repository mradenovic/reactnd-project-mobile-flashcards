import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

function DeckList(props) {
  const { decks } = props;

  return (

    <View style={styles.container}>
      {decks.map( deck => (
        <Text key={deck}>
          Deck ID: {deck}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

function mapStateToProps({decks}) {
  return {
    decks: Object.keys(decks)
  };
}

export default connect(mapStateToProps)(DeckList);
