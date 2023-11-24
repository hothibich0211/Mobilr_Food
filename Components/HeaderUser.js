
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native';
import Collapsible from 'react-native-collapsible';
import React from 'react';
import DataCart from "../Data/DataCart";

const Profile = require('../assets/images/image_Profile.png');
const Edit = require('../assets/images/icon_Edit.png');
const Voucher = require('../assets/images/Voucher.png');

export default function HeaderUser() {
    
    return (
        <View style={styles.container}>

            <View style={styles.background}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>Member Gold</Text>
                </TouchableOpacity>
                <Text style={styles.TextTitle}>Arash Ranjbaran</Text>
                <Image source={Edit} resizeMode="cover" style={styles.icon_Edit} />
                <Text style={styles.email}>awdesign.ar@gmail.com</Text>
                <Image source={Voucher} resizeMode="cover" style={styles.icon_Voucher} />
                <Text style={styles.Voucher}>You Have 3 Voucher</Text>
                <Text style={styles.Menu}>Favorite</Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
   
    button: {
        marginTop:10,
        backgroundColor: '#3FDA85',
        borderRadius: 20,
        width: 100,
        height: 30,
    },
    Textbutton: {
        color: '#6B50F6',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    TextTitle: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    email: {
        marginTop:20,
    },
    icon_Voucher: {
        width: 50,
        height: 50,
        marginTop: 20,
    },
    Voucher: {
        marginTop: -38,
        marginLeft: 55,
        fontSize: 20,
    },

    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    Menu: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    icon_Edit: {
        marginTop: -30,
        marginLeft: 300,
    },

    content: {
        flex: 3,
    },
    
});