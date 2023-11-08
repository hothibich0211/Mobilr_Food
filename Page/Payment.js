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
				{payment.slice(1,4).map((item) => (
					<View style={styles.card} key={item.id}>
						<TouchableOpacity style={styles.row_2}>
							<Image source={item.imageSource} resizeMode="cover" style={styles.imageLocation} />
							<Text style={styles.textLocation}>{item.pay}</Text>
						</TouchableOpacity>
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
		// flex: 1,
		padding:10,
		marginTop: 40,
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 20,
		marginLeft: 35,
		backgroundColor:'#fff',
		width:300,
		height:70,
		borderRadius: 15,
		alignItems: 'center',
		shadowColor: 'rgba(0,0,0,0.5)',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 1,
		shadowRadius: 4,
		elevation: 4,
	},
	textLocation:{
		marginTop:20,
	}
	

});