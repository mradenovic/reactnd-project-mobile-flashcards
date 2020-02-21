import * as React from 'react';
import { View, Text } from 'react-native';
import connectWithDeck from '../navigation/withDeck';

function QuizView(props) {
  return (
    <View>
      <Text>Quiz {JSON.stringify(props.deck)}</Text>
    </View>
  );
}

export default connectWithDeck(QuizView);
