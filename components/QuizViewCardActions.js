import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';

function QuizViewCardActions(props) {
  const { id, handleScores, flipCard } = props;

  return (
    <View>
      <Button title="Flip Card" onPress={flipCard} />

      <View style={styles.container}>
        <Button color="green" title="Correct" onPress={handleScores('correct', id)} />
        <Button color="red" title="Incorrect" onPress={handleScores('incorrect', id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  }
});

export default QuizViewCardActions;
