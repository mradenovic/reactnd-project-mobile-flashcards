import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import CardForm from  '../components/CardForm';

export default function CardFormScreen() {
  return (
    <View style={styles.container}>
      <CardForm></CardForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
