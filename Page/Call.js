import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const Calling = require('../assets/images/image_call.png');
const Speak = require('../assets/images/Speaker_icon.png');
const Close = require('../assets/images/Close_icon.png');



export default function Call() {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image source={Calling} resizeMode="cover" style={styles.Calling}></Image>
                    <Text style={styles.textLew}>Richard Lewis</Text>
                    <Text style={styles.textRing}>Ringing...</Text>
                </View>
                <View>
                    <Image source={Speak} resizeMode="cover" style={styles.Speaker}></Image>
                    <Image source={Close} resizeMode="cover" style={styles.Close}></Image>
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
    textLew: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        top: 40,
    },
    textRing: {
        fontSize: 16,
        textAlign: 'center',
        top: 50,
        color: '#cfcfd1',
    },
    Speaker: {
        top: 200,
        left: -20,
    },
    Close: {
        top: 123,
        left: 100,
    }
})