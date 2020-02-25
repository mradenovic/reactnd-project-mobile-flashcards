import * as React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import connectWithDeck from '../navigation/withDeck';
import DeckInfo from './DeckInfo';
import colors from '../constants/Colors';
import { addCard } from '../store';
import { generateID } from '../utils/helpers';

function CardForm(props) {
  const { dispatch, navigation } = props;
  const [state, setState] = React.useState({
    question: '',
    answer: ''
  });

  function handleChangeText(key) {
    return text => {
      setState({ ...state, [key]: text  });
    };
  }

  function handleSubmit() {
    dispatch(addCard({
      id: props.deck.id,
      card: {
        id: generateID(),
        ...state
      }
    }));
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <DeckInfo deck={props.deck} />
      <TextInput
        style={styles.input}
        placeholder="Enter question"
        value={state.value}
        onChangeText={handleChangeText('question')}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter question"
        value={state.value}
        onChangeText={handleChangeText('answer')}
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
    // alignItems: 'center',
    // flex: 1
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    padding: 10
  }
});

export default connectWithDeck(CardForm);
