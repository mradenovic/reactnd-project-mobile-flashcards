import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import QuizView from '../components/QuizView';

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <QuizView></QuizView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
