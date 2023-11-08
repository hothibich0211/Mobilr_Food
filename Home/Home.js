import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../Components/Header';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, title, description } from 'react-native';

const IconSearch = require('../assets/images/iconsearch.png');
const FilterIcon = require('../assets/images/icons8-slider-48.png');
const Adv = require('../assets/images/promo_advertising.png');
const Restaurant = require('../assets/images/resturant_image.png');
const Restaurant_Image = require('../assets/images/restaurant.png');
const Menu = require('../assets/images/photo_menu.png');
const Photo_1 = require('../assets/images/Photo_Menu-2.png');
const Photo_2 = require('../assets/images/Menu_Photo.png');

export default function HomeScreem({navigation}) {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Header navigation={navigation}/>
                <View style={styles.GroupAd}>
                    <Image source={Adv} resizeMode="cover" style={styles.Advert}></Image>
                    <Text style={styles.textOcteber}>Special Deal For {'\n'}October</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Detail")}>
                        <Text style={styles.buttonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textNearst}>Nearest Restaurant</Text>
                    <Text style={styles.textView}>View More</Text>
                </View>
                <View style={styles.card}>
                    <Image source={Restaurant} style={styles.Restaurant_image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}Vegan Resto</Text>
                        <Text style={styles.description}>{description}12 Mins</Text>
                    </View>
                </View>

                <View style={styles.Card}>
                    <Image source={Restaurant_Image} style={styles.Restaurant} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}Healthy Food</Text>
                        <Text style={styles.description}>{description}8 Mins</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.textPopular}>Popular Menu</Text>
                    <Text style={styles.textGreen}>View More</Text>
                </View>
                <View>
                    <View style={styles.Cards}>
                        <Image source={Menu} resizeMode="cover" style={styles.Menu_list}></Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.textGreenNodol}>Green Noddle</Text>
                            <Text style={styles.textPrice}>$15</Text>
                        </View>
                    </View>
                    <View style={styles.Cards}>
                        <Image source={Photo_1} resizeMode="cover" style={styles.Menu_list}></Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.textGreenNodol}>Green Noddle</Text>
                            <Text style={styles.textPrice}>$15</Text>
                        </View>
                    </View>
                    <View style={styles.Cards}>
                        <Image source={Photo_2} resizeMode="cover" style={styles.Menu_list}></Image>
                        <View style={styles.textContainer}>
                            <Text style={styles.textGreenNodol}>Green Noddle</Text>
                            <Text style={styles.textPrice}>$15</Text>
                        </View>
                    </View>

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

    Advert: {
        top: '80%',
    },
    GroupAd: {
        top: '-10%',
    },
    textOcteber: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        top: '97%',
        left: '45%',
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        top: '50%',
        left: '45%',
        width: 100,
        height: 40,
    },
    buttonText: {
        color: '#6B50F6',
        fontSize: 15,
        top: '20%',
    },
    textNearst: {
        fontSize: 18,
        fontWeight: 'bold',
        top: 40,
        right: '23%',
    },
    textView: {
        top: 20,
        left: '45%',
        color: '#6B50F6',
    },
    card: {
        backgroundColor: '#fff',
        width: 160,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 5,
        right: '23%',
        top: 40,
    },
    Restaurant_image: {
        width: 150,
        height: 100,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    description: {
        fontSize: 13,
        textAlign: 'center'
    },
    Card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 5,
        left: '23%',
        top: -138,
    },
    Restaurant: {
        width: 150,
        height: 100,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    textPopular: {
        top: -120,
        fontSize: 18,
        fontWeight: 'bold',
        right: '28%'
    },
    textGreen: {
        color: '#6B50F6',
        left: '40%',
        top: -140,
    },
    Cards: {
        backgroundColor: '#fff',
        width: 330,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 5,
        right: '-1%',
        top: -125,
        height:80,
    },
    Menu_list: {
        left: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        top:8,
    },
    textContainer: {
        padding: 10,
    },
    textGreenNodol: {
        right: '13%',
        fontSize: 18,
        top: -70,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    textPrice: {
        top: -100,
        left: '40%',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#6B50F6',
        textAlign: 'center'
    },

   
})