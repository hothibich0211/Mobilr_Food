import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
const IconSearch = require('../assets/images/iconsearch.png');
const Location = require('../assets/images/icon_Location.png');

export default function SetLocation({navigation}) {
    const embedUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15337.174061805954!2d108.24962609999996!3d16.050251529598214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1700208173800!5m2!1sen!2s';
    return (
        <View style={styles.container}>
            <WebView style={styles.map} source={{ html: `<iframe src="${embedUrl}" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>` }} />
            <View style={styles.groupSearch} >
                <View style={styles.swrapIcon}>
                    <Image source={IconSearch} resizeMode="cover" style={styles.Icons} />
                </View>
                <TextInput style={styles.inputText} placeholder="What do you want to order?" />
            </View>
            <View style={styles.yourLocation}>
                <View style={styles.row1}>
                    <Image source={Location} resizeMode="cover" style={styles.Icons} />
                    <Text style={styles.location}>4517 Washington Ave. Manchester,{'\n'} Kentucky 39495</Text>
                </View>
                <TouchableOpacity style={styles.row2} onPress={() => navigation.navigate('Shipping')} >
                    <Text style={styles.textLocation}>Set location</Text>
                </TouchableOpacity>
            </View>
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
    swrapIcon: {
        height: 50,
        width: 50,
        alignItems: 'center',
        marginLeft: 10,
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,

    },
    groupSearch: {
        position: 'absolute',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 15,
    },
    inputText: {
        flex: 1,
        padding: 9,
        color: '#ffff',
    },
    yourLocation: {
        position: 'absolute',
        marginLeft: 30,
        padding: 20,
        marginTop:540,
        backgroundColor: '#FFFF',
        borderRadius: 20,
    },
    row1: {
        backgroundColor: '#FFFF',
        flexDirection: 'row',
        gap: 10,
    },
    row2: {
        backgroundColor: '#6B50F6',
        height: 60,
        width: 260,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textLocation: {
        color: '#FFFF',
        fontSize: 18,
        fontWeight: 'bold',
    }

});
