import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function QuizViewScore(props) {
  const { score, handleSubmit } = props;
  const { correct, incorrect } = score;

  return (
    <View>
      <Text>Correct answers: {correct.length}</Text>
      <Text>Incorrect answers: {incorrect.length}</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
