import { StyleSheet} from 'react-native'
import React from 'react'
import User from './Home/User';
import Cart from './Home/Cart';
import Mess from './Home/Mess';
import HomeScreem from './Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image } from 'react-native';

const Users = require('./assets/images/icons8-user-30.png');
const Carts = require('./assets/images/icons8-cart-30.png');
const Messa = require('./assets/images/Chat.png');
const HomePage = require('./assets/images/icons8-home-24.png');
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreem} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={HomePage} style={{ tintColor: color, width: size, height: size }} />
          ),
        }} />
        <Tab.Screen name="User" component={User} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Users} style={{ tintColor: color, width: size, height: size }} />
          ),
        }} />
        <Tab.Screen name="Cart" component={Cart} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Carts} style={{ tintColor: color, width: size, height: size }} />
          ),
        }} />
        <Tab.Screen name="Mess" component={Mess} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Messa} style={{ tintColor: color, width: size, height: size }} />
          ),
        }} />

      </Tab.Navigator>

  )
}
const styles = StyleSheet.create({})