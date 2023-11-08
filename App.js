import React from 'react';
import { StyleSheet} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation';
import Filter from './Page/Filter';
import ConfirmOrder from './Page/ConfirmOrder';
import Message from './Page/Message';
import Call from './Page/Call';
import Phone from './Page/Phone';
import Phones from './Page/Phones';
import Rating from './Page/Rating';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainStack" component={Navigation} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="Phone" component={Phone} />
        {/* <Stack.Screen name="Phones" component={Phones} /> */}
        <Stack.Screen name="Rating" component={Rating} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});