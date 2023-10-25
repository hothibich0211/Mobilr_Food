import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Location = require('../assets/images/icon_Location.png');
const Pay = require ('../assets/images/paypal_Logo.png')

export default function ConfirmOrder() {
  return (
    <View style={styles.container}>
      <Text style={styles.textConfirm}>Confirm Order</Text>
      <View style={styles.CartLocation}>
        <View style={styles.card}>
          <Image source={Location} resizeMode="cover" style={styles.imageLocation} />
          <View style={styles.textContainer}>
            <Text style={styles.textDeliver}>Deliver To</Text>
            <Text style={styles.textLocation}>4517 Washington Ave. Manchester, {'\n'}Kentucky 39495</Text>
            <Text style={styles.textEdit}>Edit</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardPay}>
        <View style={styles.card}>
          <Image source={Pay} resizeMode="cover" style={styles.imagePay} />
          <View style={styles.textContainer}>
            <Text style={styles.textPay}>Payment Method</Text>
            <Text style={styles.textBank}>2121 6352 8465 ****</Text>
            <Text style={styles.textEdit2}>Edit</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textConfirm:{
    top:-200,
    fontWeight:'bold',
    fontSize:20,
    left: -110,
  },
  CartLocation:{
    backgroundColor: '#fff',
    width: 340,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 5,
    right: '0.5%',
    top: -180,
    height:90,
   margin:5,
  },
  imageLocation:{
    top: 35,
    left:10,
  },
  textDeliver:{
    top: -30,
    left: 10,
    color:'#dededf'
  },
  textLocation:{
    top: -21,
    left:60,
    fontWeight:'bold',
    fontSize:17,
  },
  textEdit:{
    top:-93,
    color:'#6B50F6',
    left:300,
  },
  imagePay:{
    top:35,
    left:10,
  },
  cardPay:{
    backgroundColor: '#fff',
    width: 340,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 5,
    right: '0.5%',
    top: -180,
    height:90,
   margin:5,
  },
  textPay:{
    top:-20,
    left: 10,
    color:'#dededf',
  },
  textBank:{
    top:-8,
    left:145,
    fontSize:18,
  },
  textEdit2:{
    top:-63,
    left: 300,
    color:'#6B50F6'
  }
  
});