import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import QuizView from '../components/QuizView';

export default function QuizScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <QuizView navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
