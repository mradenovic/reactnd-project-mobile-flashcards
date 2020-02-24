import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import DecksScreen from '../screens/DecksScreen';
import DeckFormScreen from '../screens/DeckFormScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Decks';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Decks"
        component={DecksScreen}
        options={{
          title: 'Decks',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-albums" />
          )
        }}
      />
      <BottomTab.Screen
        name="Add Deck"
        component={DeckFormScreen}
        options={{
          title: 'Add Deck',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-add-circle" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Decks':
      return 'Decks';
    case 'Add Deck':
      return 'Add Deck';
  }
}
