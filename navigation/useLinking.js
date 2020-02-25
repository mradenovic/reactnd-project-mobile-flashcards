import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        screens: {
          Decks:  'decks',
          'Add Deck': 'decks/add-deck',
        }
      },
      Deck: 'decks/:id',
      Quiz: 'decks/:id/quiz',
      'Add Card': 'decks/:id/add-card',
    },
  });
}
