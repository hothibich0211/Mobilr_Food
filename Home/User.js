
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native';
import React from 'react';
import DataCart from "../Data/DataCart";

const Profile = require('../assets/images/image_Profile.png');
const Edit = require('../assets/images/icon_Edit.png');
const Voucher = require('../assets/images/Voucher.png');

export default function User({ navigation }) {
    const [dataItem, setDataItem] = useState(DataCart);
    return (
        <View style={styles.container}>

            <ImageBackground source={Profile} resizeMode="cover" style={styles.Profile}>
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
                    <FlatList
                        data={dataItem}
                        renderItem={({ item }) => (
                            <View style={styles.Row}>
                                <Image source={item.imageSource} resizeMode="cover" style={styles.imgItem} />
                                <View style={styles.Item}>
                                    <Text style={styles.textName}>{item.name}</Text>
                                    <Text style={styles.textWaroenk}>{item.restaurant}</Text>
                                    <Text style={styles.textPrice}>{item.price}</Text>
                                </View>
                                <Text style={styles.textProcess}>Buy Again</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
            

                </View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Profile: {
        width: '100%',
    },
    background: {
        flexDirection: 'column',
        gap: 20,
        paddingTop: 34,
        paddingHorizontal: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#F6F6F6',
        marginTop: -35,
        zIndex: 4,
        padding: 20,
    },
    button: {
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
        marginTop: -10,
    },
    icon_Voucher: {
        width: 50,
        height: 50,
        marginTop: 10,
    },
    Voucher: {
        marginTop: -58,
        marginLeft:55,
        fontSize:20,
    },

    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    Menu: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icon_Edit:{
        marginTop:-50,
        marginLeft:300,
    },

    content: {
        flex: 3,
    },
    Row: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 20,
        marginLeft: 15,
        width: 350,
        height: 70,
    },
    Item: {
        flex: 1,
    },
    textName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textWaroenk: {
        fontSize: 15,
        opacity: 0.3,
    },
    textPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6B50F6',
    },
    textProcess: {
        borderRadius: 10,
        backgroundColor: '#6B50F6',
        justifyContent: 'center',
        color: '#FFFF',
        padding: 5,
        height: 30,
        marginTop: 20,
        marginRight: 20,
        fontWeight:'bold',
    },
});