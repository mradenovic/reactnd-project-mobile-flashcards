import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FlipCard from 'react-native-flip';

import QuizViewCardActions from './QuizViewCardActions';

export default function QuizViewCard(props) {
  const { card, handleScores } = props;
  const [side, setSide] = React.useState(0);

  function handleCardAction(key, id) {
    return () => {
      setSide(0);
      handleScores(key, id);
    };
  }

  function flipCard() {
    setSide(side => (side === 0 ? 1 : 0));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.text}
        onPress={flipCard}
      >
        <FlipCard
          style={styles.flipContainer}
          side={side}
          front={<Text style={styles.text}>Q: {card.question}</Text>}
          back={<Text style={styles.text}>A: {card.answer}</Text>}
        />
      </TouchableOpacity>
      <QuizViewCardActions id={card.id} handleScores={handleCardAction} flipCard={flipCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  flipContainer: {
    margin: 10,
    padding: 10,
    height: 200,
    width: 300,
    borderRadius: 20,
    borderWidth: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20
  }
});
