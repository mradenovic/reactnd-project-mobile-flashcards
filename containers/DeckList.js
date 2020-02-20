import * as React from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import DeckListItem from './DeckListItem';

function DeckList(props) {
  const { decks } = props;

  return (
    <View >
      <FlatList
        data={decks}
        renderItem={({ item }) => <DeckListItem id={item} />}
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
