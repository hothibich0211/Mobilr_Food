import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home/Home';
import Filter from './Page/Filter';
import Mess from './Home/Mess';
import Cart from './Home/Cart';
import User from './Home/User';
import ConfirmOrder from './Page/ConfirmOrder';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Homepage" component={HomeScreen} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator >
        <Tab.Screen name="Home" options={{
          headerShown: false,
        }} component={MainStack} />
        <Tab.Screen name="User" options={{
          headerShown: false,
        }} component={User} />
        <Tab.Screen name="Mess" options={{
          headerShown: false,
        }} component={Mess} />
        <Tab.Screen name="Cart" options={{
          headerShown: false,
        }} component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
