import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
// import Filter from '../Page/Filter';


const IconSearch = require('../assets/images/iconsearch.png');
const FilterIcon = require('../assets/images/icons8-slider-48.png');


export default function Header({navigation}) {

    return (
        <View sstyle={styles.box}>
            <Text style={styles.textFavorite}>Find Your{'\n'}Favorite Food</Text>
            <View style={styles.groupSearch} >
                <View style={styles.swrapIcon}>
                    <Image source={IconSearch} resizeMode="cover" style={styles.Icons}></Image>
                </View>
                <TextInput style={styles.inputText} placeholder="What do you want to order?" />
                <TouchableOpacity style={styles.rightIcon} onPress={()=>navigation.navigate("Filter")}>
                    <View>
                        <Image source={FilterIcon} resizeMode="cover" style={styles.icon} />
                    </View>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    textFavorite: {
        color: '#22242E',
        fontSize: 31,
        fontStyle: 'normal',
        marginRight: '40%',
        marginTop: '15%',
    },
    inputText: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        padding: 9,
        width: 200,
        marginRight: '20%',
        color: '#ffff',
        backgroundColor: '#F0EEFE',
  
    },
    swrapIcon: {
        height: 50,
        width: 50,
        backgroundColor: '#F0EEFE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
    },
    groupSearch: {
        marginTop: 10,
        flexDirection: 'row',
    },
    FilterIcon: {
        marginLeft: '20%',
    },
    rightIcon: {
        height: 50,
        width: 50,
        backgroundColor: '#F0EEFE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        marginLeft: '-15%',
    },
    icon:{
        width:25,
    }
})