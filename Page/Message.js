import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DataChat from '../Data/DataChat';

const Chat_1 = require('../assets/images/chat_3.png');
const Call = require('../assets/images/call_logo.png');
const Send = require('../assets/images/icon_Send.png');



export default function Message({ navigation }) {
    
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
            <View>
                <Text style={styles.textChat}>Chat</Text>
               
                    <>
                        <View style={styles.Cards} >
                            <Image source={Chat_1} resizeMode="cover" style={styles.Menu_list}></Image>
                            <View style={styles.textContainer}>
                                <Text style={styles.textGreenNodol}>Louis Kelly</Text>
                                <TouchableOpacity onPress={() => navigation.navigate("Phone")} >
                                    <Image source={Call} resizeMode="cover" style={styles.Call}></Image>
                                </TouchableOpacity>

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
                        <View style={styles.search}>
                            <TextInput style={styles.TextMess} placeholder="Okay I'm waiting" />
                            <Image source={Send} resizeMode="cover" style={styles.Send}></Image>
                        </View>

                    </>
                
                
            </View>

            <StatusBar style="auto" />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textChat: {
        marginTop: '-30%',
        fontSize: 20,
        marginLeft: '2%',
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
        flexDirection: "row",
        backgroundColor: '#fff',
        width: 330,
        borderRadius: 10,
        shadowOpacity: 0.3,
        marginTop: 30,
        height: 70,
        margin: 5,
    },

    textGreenNodol: {
        marginRight: '13%',
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    textOnline: {
        marginTop: -20,
        marginLeft: '24.5%',
        color: '#cfcfd1'
    },
    Call: {
        marginTop: -25,
        marginLeft: 170,
    },
    Menu_list1: {
        marginLeft: 10,
        marginRight: 30,
        // alignSelf: "center",
        marginTop:5,
    },
   
    buttonR: {
        backgroundColor: '#f6f6f6',
        borderRadius: 15,
        padding: 10,
        marginLeft: 5,
        alignItems: 'left',
        width: 140,
        marginRight: -120,
        marginTop:-50,
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
        marginTop:20
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
        marginTop:30,
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
       marginTop:20
    },
    TextIam: {
        fontSize: 17,
        color: '#fff'
    },
    Button: {
        top: 90,
    },
    search:{
        marginTop:90,
    },
    TextMess: {
        top: 188,
        backgroundColor: '#F0EEFE',
        padding: 9,
        right: 2.5,
        color: '#ffff',
        width: 350,
        borderRadius: 10,
    },
    Send: {
        top: 157,
        left: 300,
    }
})