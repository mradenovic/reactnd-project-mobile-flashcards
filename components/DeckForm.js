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
import { asyncActions } from '../store';
import { generateID } from '../utils/helpers';

function DeckForm({ dispatch, navigation }) {
  const [state, setState] = React.useState({
    id: '',
    title: '',
    cards: {},
    scores: {}
  });

  function handleChangeText(key) {
    return text => {
      setState({ ...state, [key]: text });
    };
  }

  async function handleSubmit() {
    const id = generateID();
    await dispatch(asyncActions.addDeck({ deck: {
      ...state,
      id,
    }}));
    navigation.navigate('Deck', { id: id });
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.subtitle}>What is the title of your new deck?</Text>
      <TextInput
        style={styles.input}
        placeholder="Deck Title"
        value={state.value}
        onChangeText={handleChangeText('title')}
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
