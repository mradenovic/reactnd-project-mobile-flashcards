import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import * as RootNavigation from '../navigation/RootNavigation';
// import colors from '../constants/Colors';

function DeckViewActions(props) {
  const { id } = props;

  function handleStartQuiz() {
    RootNavigation.push('Quiz', { id });
  }

  function handleAddCard() {
    RootNavigation.push('Add Card', { id });
  }
  return (
    <View style={styles.container}>
      <Button title="Start Quiz" onPress={handleStartQuiz} />
      <Button title="Add Card" onPress={handleAddCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});

export default DeckViewActions;
