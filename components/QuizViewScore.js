import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function QuizViewScore(props) {
  const { score, handleSubmit, handleReset } = props;
  const { correct, incorrect } = score;

  return (
    <View>
      <Text>Correct answers: {correct.length}</Text>
      <Text>Incorrect answers: {incorrect.length}</Text>
      <View style={styles.row}>
        <Button title="Reset Quiz" onPress={handleReset} />
        <Button title="Submit Score" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10
  }
});
