import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import CardForm from  '../components/CardForm';

export default function CardFormScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CardForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
