import { StyleSheet, ImageBackground, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
const Bg = require('../assets/images/Bg.png');
const Back = require('../assets/images/IConBack.png');

export default function Payment({navigation}){
	const [payment, setPayment] = useState(DataPay);
    return(
        <View style={styles.container}>
			<ImageBackground source={Bg} resizeMode="cover" style={styles.Bg}>
				<TouchableOpacity  onPress={()=>navigation.goBack()}>
					<Image source={Back} resizeMode='cover' style={styles.iconBack} />
				</TouchableOpacity>
				<Text style={styles.textConfirm}>Payment</Text>
				{payment.map((item) => (
					<View style={styles.card} key={item.id}>
						<View style={styles.row_2}>
							<Image source={item.imageSource} resizeMode="cover" style={styles.imageLocation} />
							<Text style={styles.textLocation}>{item.pay}</Text>
						</View>
					</View>
				))}
			</ImageBackground>
			<StatusBar style="auto" />
		</View>
    )
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
	row_2: {
		flex: 1,
		marginTop: 40,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 20,
		marginLeft: 35,
	},


});