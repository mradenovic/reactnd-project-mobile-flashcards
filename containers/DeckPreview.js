import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import DeckView from './DeckView';

function DeckPreview(props) {
  const handlePress = () => {
    console.log('open deck view');
  };


  return (
    <TouchableOpacity onPress={handlePress} >
      <DeckView id={props.id} />
    </TouchableOpacity>
  );
}

export default DeckPreview;
