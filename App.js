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
import Payment from './Page/Payment';
import Detail_Product from './Page/Detail';
import Shipping from './Page/Shipping';
import CheckOut from './Page/Checkout';
import SetLocation from './Page/SetLocation';
import TrackOrder from './Page/TrackOrder';

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
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Detail" component={Detail_Product} />
        <Stack.Screen name="Shipping" component={Shipping} />
        <Stack.Screen name="Checkout" component={CheckOut} />
        <Stack.Screen name="SetLocation" component={SetLocation} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});