import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DeckView from './DeckView';

function DeckListItem(props) {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.push('Deck', { id: props.id });
  };


  return (
    <TouchableOpacity onPress={handlePress} >
      <DeckView id={props.id} />
    </TouchableOpacity>
  );
}

export default DeckListItem;
