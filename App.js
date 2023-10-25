import React from 'react';
import { StyleSheet} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import Filter from './Page/Filter';
import ConfirmOrder from './Page/ConfirmOrder';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainStack" component={Navigation} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});