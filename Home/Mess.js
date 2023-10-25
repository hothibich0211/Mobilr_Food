import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../Components/Header';
import { StyleSheet, Text, View, Image,} from 'react-native';

const Chat_1 = require('../assets/images/chat_3.png');
const Chat_2 = require('../assets/images/chat_0.png');
const Chat_3 = require('../assets/images/chat_1.png');


export default function Mess() {
    return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textChat}>Chat</Text>
                    <View style={styles.Cards}>
                        <Image source={Chat_1} resizeMode="cover" style={styles.Menu_list}></Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.textGreenNodol}>Louis Kelly</Text>
                            <Text style={styles.textPrice}>20:00</Text>
                            <Text style={styles.textYour}>Your Order Just Arrived !</Text>
                        </View>
                    </View>

                    <View style={styles.Cards}>
                        <Image source={Chat_2} resizeMode="cover" style={styles.Menu_list}></Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.textGreenNodol}>Paul Koch</Text>
                            <Text style={styles.textPrice}>20:00</Text>
                            <Text style={styles.textYour}>Your Order Just Arrived !</Text>
                        </View>
                    </View>
                    <View style={styles.Cards}>
                        <Image source={Chat_3} resizeMode="cover" style={styles.Menu_list}></Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.textGreenNodol}>Carla Klein</Text>
                            <Text style={styles.textPrice}>20:00</Text>
                            <Text style={styles.textYour}>Your Order Just Arrived !</Text>
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
	textChat:{
		top:'-80%',
        fontSize:20,
        left:'2%',
	},
    Cards: {
        backgroundColor: '#fff',
        width: 330,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 5,
        right: '-1%',
        top: -180,
        height:63,
       margin:5,
    },

    textGreenNodol: {
        right: '13%',
        fontSize: 18,
        top: -55,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    textPrice: {
        top: -80,
        left: '40%',
        fontSize: 15,
        color: '#cfcfd1',
        textAlign: 'center'
    },
    textYour:{
        top:-73,
        left:'24.5%',
        color:'#cfcfd1'
    }
   
   
})