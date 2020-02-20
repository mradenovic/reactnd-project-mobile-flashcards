import * as React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import DeckView from './DeckView';

function DeckRoute() {
  const route = useRoute();
  const { id } = route.params;

  return (
    <View>
      <DeckView id={id} />
    </View>
  );
}

export default DeckRoute;
