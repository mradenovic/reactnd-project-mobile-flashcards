import * as React from 'react';
import { connect } from 'react-redux';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Text,
  Button
} from 'react-native';
import colors from '../constants/Colors';

function DeckForm(props) {
  const [state, setState] = React.useState({
    id: '',
    title: '',
    cards: [],
    results: {}
  });

  function handleChangeText(key) {
    return text => {
      setState({ ...state, [key]: text });
    };
  }

  function handleSubmit() {
    console.log('submit data to store', state);
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.subtitle}>What is the title of your new deck?</Text>
      <TextInput
        style={styles.input}
        placeholder="Deck Title"
        value={state.value}
        onChangeText={handleChangeText('question')}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tabBar,
    margin: 10,
    padding: 10
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  }
});

export default connect()(DeckForm);
