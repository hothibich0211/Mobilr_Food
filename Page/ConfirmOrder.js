import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import DataPay from '../Data/DataPay';
import Total from '../Components/Total';
const Bg = require('../assets/images/Bg.png');
const Location = require('../assets/images/icon_Location.png');
const imageSource = require('../assets/images/paypal_Logo.png');
const Back = require('../assets/images/IConBack.png');
export default function ConfirmOrder({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground source={Bg} resizeMode="cover" style={styles.Bg}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image source={Back} resizeMode='cover' style={styles.iconBack} />
				</TouchableOpacity>
				<Text style={styles.textConfirm}>Confirm Order</Text>
				<ScrollView>
						<TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Shipping')}>
							<View style={styles.row_1}>
								<Text style={styles.textDeliver}>Deliver to</Text>
								<Text style={styles.textEdit}>Edit</Text>
							</View>
							<View style={styles.row_2}>
								<Image source={Location} resizeMode="cover" style={styles.imageLocation} />
								<Text style={styles.textLocation}>4517 Washington Ave.Manchester</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.card2} onPress={() => navigation.navigate('Payment')}>
							<View style={styles.row_3}>
								<Text style={styles.textPay}>Payment method</Text>
								<Text style={styles.textEdit}>Edit</Text>
							</View>
							<View style={styles.row_4}>
								<Image source={imageSource} resizeMode="cover" style={styles.imageLocation} />
								<Text style={styles.textLocation}>2121 6352 8465 ****</Text>
							</View>
						</TouchableOpacity>
				</ScrollView>
			</ImageBackground>
			<Total destination="Checkout" title="Go to Checkout" />

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	Bg: {
		flex: 1,
	},
	iconBack: {
		marginLeft: 25,
		marginTop: 60,
	},
	textConfirm: {
		marginTop: 20,
		marginLeft: 25,
		fontSize: 30,
		fontWeight: 'bold',
	},
	card: {

	},

	row_1: {
		marginTop: 30,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginLeft: 35,

	},
	textDeliver: {
		fontSize: 15,
		opacity: 0.3,
		flex: 1,
	},
	textEdit: {
		color: '#6B50F6',
		marginRight: 30,
	},
	row_2: {
		marginTop: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 20,
		marginLeft: 35,
		
	},
	card2:{

	},
	row_3:{
		marginTop: 30,
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginLeft: 35,
	},
	textPay:{
		fontSize: 15,
		opacity: 0.3,
		flex: 1,
	},
	row_4:{
		marginTop: 20,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 20,
		marginLeft: 35,
	}


});