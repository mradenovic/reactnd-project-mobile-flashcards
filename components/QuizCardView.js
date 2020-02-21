import * as React from 'react';
import { View, Text } from 'react-native';

import QuizCardViewActions from './QuizCardViewActions';

export default function QuizCardView(props) {
  const { card, handleResults } = props;

  return (
    <View>
      <Text>{card.question}</Text>
      <Text>{card.answer}</Text>
      <QuizCardViewActions id={card.id} handleResults={handleResults} />
    </View>
  );
}
