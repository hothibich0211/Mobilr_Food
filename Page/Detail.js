import { StyleSheet, ImageBackground, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
const Detail = require('../assets/images/Detail_Restaurant.png');


export default function Detail_Product({ navigation }) {
   
    return (
        <View style={styles.container}>
            <View>
                <Image source={Detail} resizeMode="cover" style={styles.Detail_Restaurant}></Image>
            </View>
           
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