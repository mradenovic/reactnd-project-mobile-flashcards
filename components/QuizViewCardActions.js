import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';

function QuizViewCardActions(props) {
  const { id, handleResults } = props;

  return (
    <View style={styles.container}>
      <Button color="green" title="Correct" onPress={handleResults('correct', id)} />
      <Button color="red" title="Incorrect" onPress={handleResults('incorrect', id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});

export default QuizViewCardActions;
