import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native';

const Chat_1 = require('../assets/images/chat_3.png');
const Call = require('../assets/images/call_logo.png');
const Send = require('../assets/images/icon_Send.png');



export default function Message() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textChat}>Chat</Text>
                <View style={styles.Cards}>
                    <Image source={Chat_1} resizeMode="cover" style={styles.Menu_list}></Image>
                    <View style={styles.textContainer}>
                        <Text style={styles.textGreenNodol}>Louis Kelly</Text>
                        <Image source={Call} resizeMode="cover" style={styles.Call}></Image>
                        <Text style={styles.textOnline}>Online</Text>
                    </View>
                </View>
                <View style={styles.Button}>
                    <View>
                        <TouchableOpacity style={styles.buttonR}>
                            <Text style={styles.TextRes}>Just to order</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonS}>
                            <Text style={styles.TextOkay}>Okay, for what level of spiciness ?</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buttonK}>
                            <Text style={styles.TextWai}>Okay, wait a minute?</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonH}>
                            <Text style={styles.TextIam}>Okay, I'm waiting </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                <TextInput style={styles.TextMess} placeholder="Okay I'm waiting" />
                <Image source={Send} resizeMode="cover" style={styles.Send}></Image>
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
    textChat: {
        top: '-30%',
        fontSize: 20,
        left: '2%',
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
        top: -80,
        height: 63,
        margin: 5,
    },

    textGreenNodol: {
        right: '13%',
        fontSize: 18,
        top: -55,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    textOnline: {
        top: -93,
        left: '24.5%',
        color: '#cfcfd1'
    },
    Call: {
        top: -80,
        left: 260,
    },
    buttonR: {
        backgroundColor: '#f6f6f6',
        borderRadius: 15,
        padding: 10,
        marginLeft: 5,
        alignItems: 'left',
        width: 140,
        top: -120,
    },
    TextRes: {
        fontSize: 17,
    },
    buttonS: {
        backgroundColor: '#6B50F6',
        borderRadius: 15,
        padding: 10,
        marginLeft: 55,
        alignItems: 'left',
        width: 280,
        top: -90,
    },
    TextOkay: {
        fontSize: 17,
        color: '#fff'
    },
    buttonK: {
        backgroundColor: '#f6f6f6',
        borderRadius: 15,
        padding: 10,
        marginLeft: 5,
        alignItems: 'left',
        width: 180,
        top: -55,
    },
    TextWai: {
        fontSize: 17,
    },
    buttonH: {
        backgroundColor: '#6B50F6',
        borderRadius: 15,
        padding: 10,
        marginLeft: 185,
        alignItems: 'left',
        width: 150,
        top: -23,
    },
    TextIam: {
        fontSize: 17,
        color: '#fff'
    },
    Button:{
        top: 90,
    },
    TextMess:{
        top:188,
        backgroundColor: '#F0EEFE',
        padding: 9,
        right:2.5,
        color: '#ffff',
        width:345,
        borderRadius:10,
    },
    Send:{
        top:157,
        left: 300,
    }
})