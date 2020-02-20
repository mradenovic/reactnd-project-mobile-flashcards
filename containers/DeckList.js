import * as React from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import DeckPreview from './DeckPreview';

function DeckList(props) {
  const { decks } = props;

  return (
    <View >
      <FlatList
        data={decks}
        renderItem={({ item }) => <DeckPreview id={item} />}
        keyExtractor={item => item}
      />
    </View>
  );
}

function mapStateToProps({decks}) {
  return {
    decks: Object.keys(decks)
  };
}

export default connect(mapStateToProps)(DeckList);
