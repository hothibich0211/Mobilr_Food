import React from 'react';
import { ImageBackground } from 'react-native';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
const MessageButton = require('../assets/images/MessageButton.png');
const PhotoProfile = require('../assets/images/PhotoProfile.png');
const Back = require('../assets/images/IConBack.png');
const Iconmaps = require('../assets/images/Iconmaps.png');
const Calllogo = require('../assets/images/Calllogo.png');
const Pattern = require('../assets/images/Pattern.png');
export default function TrackOrder({navigation}) {
    const embedUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15337.174061805954!2d108.24962609999996!3d16.050251529598214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1700208173800!5m2!1sen!2s';
    return (
        <View style={styles.container}>
            <WebView style={styles.map} source={{ html: `<iframe src="${embedUrl}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>` }} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={Back} resizeMode='cover' style={styles.iconBack} />
            </TouchableOpacity>
            <ImageBackground source={Pattern} resizeMode='cover'  style={styles.yourLocation}>
                <Text style={styles.TrackOrder}>Track Orders</Text>
                <View style={styles.row1}>
                    <Image source={PhotoProfile} resizeMode="cover" style={styles.PhotoProfile} />
                    <View>
                        <Text style={styles.textName}>Mr. Kemplas</Text>
                        <Image source={Iconmaps} resizeMode="cover" style={styles.PhotoProfile}></Image>
                        <Text style={styles.textMinutes}>25 minutes on the way</Text>
                    </View>

                </View>
                <View style={styles.row2}>
                    <TouchableOpacity style={styles.GoupCall}>
                        <Image source={Calllogo} resizeMode="cover" style={styles.Call} ></Image>
                        <Text style={styles.texCall}>Call</Text>
                    </TouchableOpacity>
                    <Image source={MessageButton} resizeMode="cover" style={styles.MessageButton} ></Image>
                </View>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    map: {
        flex: 1,
    },
    iconBack: {
        position: 'absolute',
        marginTop: -660,
        marginLeft: 10,
    },
    yourLocation: {
        position: 'absolute',
        marginLeft: 15,
        paddingLeft: 24,
        marginTop: 480,
        backgroundColor: '#FFFF',
        borderRadius: 20,
    },
    row1: {
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        gap: 10,
        marginTop: 15,
    },
    row2: {
        flexDirection: 'row',

    },
    MessageButton: {
        marginTop: -38,
        marginLeft: -35,

    },
    GoupCall: {
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        height: 60,
        width: 200,
        gap:10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textMinutes: {
        fontSize: 15,
        opacity: 0.3,
    },
    TrackOrder: {
        marginTop:10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textName: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    texCall: {
        fontSize: 18,
        fontWeight: 'bold',
    }

});
