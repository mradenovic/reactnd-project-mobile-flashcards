import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../constants/Colors';
import connectWithDeck from '../navigation/withDeck';
import QuizViewCard from './QuizViewCard';
import QuizViewScore from './QuizViewScore';

function QuizView(props) {
  const { deck } = props;
  const [results, setResults] = React.useState({
    correct: [],
    incorrect: []
  });
  const { correct, incorrect } = results;

  const cardCount = Object.keys(deck.cards).length;
  const answeredCount = correct.length + incorrect.length;
  const unansweredCards = Object.keys(deck.cards)
    .filter(key => !correct.includes(key) && !incorrect.includes(key))
    .map(key => deck.cards[key]);
  const card = unansweredCards[0];

  function handleResults(key, id) {
    return () => {
      setResults({ ...results, [key]: [...results[key], id] });
    };
  }

  function handleSubmit() {
    console.log('submit results', results);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text style={styles.subtitle}>
        {answeredCount} of {cardCount} cards answered
      </Text>
      {card && <QuizViewCard card={card} handleResults={handleResults} />}
      {!card && <QuizViewScore results={results} handleSubmit={handleSubmit} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tabBar,
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
  }
});

export default connectWithDeck(QuizView);
