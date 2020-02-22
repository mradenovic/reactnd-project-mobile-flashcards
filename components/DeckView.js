import * as React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import colors from '../constants/Colors';
import DeckViewActions from './DeckViewActions';
import DeckInfo from './DeckInfo';

function DeckView(props) {
  const { deck, showActions } = props;

  return (
    <View style={styles.container}>
      <DeckInfo deck={deck} />
      {showActions && <DeckViewActions id={deck.id} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tabBar,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  }
});

function mapStateToProps({ decks }, { id }) {
  return {
    deck: decks[id]
  };
}

export default connect(mapStateToProps)(DeckView);
