import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';

function QuizViewCardActions(props) {
  const { id, handleScores } = props;

  return (
    <View style={styles.container}>
      <Button color="green" title="Correct" onPress={handleScores('correct', id)} />
      <Button color="red" title="Incorrect" onPress={handleScores('incorrect', id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});

export default QuizViewCardActions;
