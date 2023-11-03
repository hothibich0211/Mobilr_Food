import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import DataChat from '../Data/DataChat';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Mess({ navigation }) {
    const [itemChat] = useState(DataChat);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textChat}>Chat</Text>
                {itemChat.map((item) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Message")}>
                        <View style={styles.Card} key={item.id}>
                            <Image source={item.imageSource} resizeMode="cover" style={styles.Menu_list1}></Image>
                            <View style={styles.textContainer1}>
                                <View style={styles.infor}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                                <Text style={styles.status}>{item.status}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    textChat: {
        marginTop: 20,
        fontSize: 20,
        left: '2%',
    },


    Menu_list1: {
        marginLeft: 10,
        marginRight: 20,
        alignSelf: "center",
    },

    Card: {
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
        height: 80,
        margin: 5,
    },

    infor: {
        flexDirection: "row",
        gap: 100,
    },
    name: {
        right: 0,
        fontWeight: 'bold',
        fontSize: 20,
    },

    textContainer1: {
        alignSelf: "center",
        gap: 10,
    },

    status: {
        color: '#cfcfd1',
    },
    time: {
        color: '#cfcfd1',
    }
})