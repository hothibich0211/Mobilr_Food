import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import DataPay from '../Data/DataPay';
const Bg = require('../assets/images/Bg.png');
const Location = require('../assets/images/icon_Location.png');
const Back = require('../assets/images/IConBack.png');
export default function Shipping({ navigation }) {
	const [payment, setPayment] = useState(DataPay);
	return (
		<View style={styles.container}>
			<ImageBackground source={Bg} resizeMode="cover" style={styles.Bg}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image source={Back} resizeMode='cover' style={styles.iconBack} />
				</TouchableOpacity>
				<Text style={styles.textConfirm}>Shipping</Text>
				<ScrollView>
					{payment.slice(0, 2).map((item) => (
						<View style={styles.card} key={item.id}>
							<View style={styles.row_1}>
								<Text style={styles.textDeliver}>{item.name}</Text>
							</View>
							<TouchableOpacity style={styles.row_2} onPress={() => navigation.navigate('ConfirmOrder')}>
								<Image source={item.imageSource} resizeMode="cover" style={styles.imageLocation} />
								<Text style={styles.textLocation}>{item.pay}</Text>
							</TouchableOpacity>
						</View>
					))}
				</ScrollView>
			</ImageBackground>
			

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


});