import * as React from 'react';
import { StyleSheet, Button, View } from 'react-native';
// import * as RootNavigation from '../navigation/RootNavigation';
// import colors from '../constants/Colors';

function DeckViewActions(props) {
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

export default DeckViewActions;
