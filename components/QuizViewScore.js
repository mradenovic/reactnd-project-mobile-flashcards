import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function QuizViewScore(props) {
  const { results, handleSubmit } = props;
  const { correct, incorrect } = results;

  return (
    <View>
      <Text>Correct answers: {correct.length}</Text>
      <Text>Incorrect answers: {incorrect.length}</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
