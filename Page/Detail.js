import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native';
import React from 'react';

const Detail = require('../assets/images/Detail_Restaurant.png');
const Loaction = require('../assets/images/icon_Location.png');
const Love = require('../assets/images/icon_Love.png');
const Map = require('../assets/images/icon_map.png');
const Star = require('../assets/images/Star.png');
const star = require('../assets/images/Icon_Star.png');
// const Cheese = require('./assets/image/Detail_1.png');

const data = [
    {
        id: '1',
        image: require('../assets/images/Detail_1.png'),
        title: 'Spacy fresh crab',
        price: '8$',
    },
    {
        id: '2',
        image: require('../assets/images/Detail_2.png'),
        title: 'Spacy fresh crab',
        price: '18$',
    },
    {
        id: '3',
        image: require('../assets/images/Detail_1.png'),
        title: 'Spacy fresh crab',
        price: '28$',
    },
    {
        id: '4',
        image: require('../assets/images/Detail_2.png'),
        title: 'Spacy fresh crab',
        price: '16$',
    },
];

const dataMenu = [
    {
        id: '1',
        image: require('../assets/images/Profile.png'),
        name: 'Dianne Rusell',
        day: '12 April 2021'
    },
    {
        id: '2',
        image: require('../assets/images/Profile.png'),
        name: 'Dianne Rusell',
        day: '12 April 2021'
    },
    {
        id: '3',
        image: require('../assets/images/Profile.png'),
        name: 'Dianne Rusell',
        day: '12 April 2021'
    },
    {
        id: '4',
        image: require('../assets/images/Profile.png'),
        name: 'Dianne Rusell',
        day: '12 April 2021'
    },
];

export default function Detail_Product({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <ImageBackground source={Detail} resizeMode="cover" style={styles.Detaill_Restaurant} />
            
                <View style={styles.background}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.Textbutton}>Popular</Text>
                        <Image source={Loaction} resizeMode="cover" style={styles.icon_Location} />
                        <Image source={Love} resizeMode="cover" style={styles.icon_Love} />
                    </TouchableOpacity>
                    <Text style={styles.TextTitle}>Wijie Bar and Resto</Text>
                    <Image source={Map} resizeMode="cover" style={styles.icon_Map} />
                    <Text style={styles.Kilomet}>19 Km</Text>
                    <Image source={Star} resizeMode="cover" style={styles.icon_Star} />
                    <Text style={styles.Rating}>4.8 Rating</Text>
                    <Text style={styles.texttitle}>
                        Most Whole Alaskan RedKing Carbs get broken down into legs, claws and lump meat. We offer all of these
                        options as well in our online shop, but there is nothing like getting the whole...
                    </Text>


                    <Text style={styles.Menu}>Popular Menu</Text>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <Image source={item.image} style={styles.Restaurant} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                    <Text style={styles.Menu}>Testimonials</Text>
                    <FlatList
                        data={dataMenu}
                        renderItem={({ item }) => (
                            <View style={styles.cards}>

                                <Image source={item.image} style={styles.Item} />
                                <View style={styles.textCon}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.day}>{item.day}</Text>
                                    <Text style={styles.Textname}>This Is great. So delicious!You Must Here With Your family...</Text>
                                </View>
                                <Image source={star} style={styles.Star} />


                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Detaill_Restaurant: {
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
        width: 70,
        height: 30,
    },
    Textbutton: {
        color: '#6B50F6',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon_Location: {
        marginTop: -20,
        marginLeft: 250,
        width: 32,
        height: 32,
    },
    icon_Love: {
        marginTop: -34,
        width: 34,
        height: 34,
        marginLeft: 300,
    },
    TextTitle: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    Kilomet: {
        marginTop: -40,
        marginLeft: 30,
    },
    icon_Star: {
        width: 20,
        height: 20,
        marginLeft: 80,
        marginTop: -42,
    },
    Rating: {
        marginLeft: 110,
        marginTop: -38,
    },

    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    Menu: {
        fontSize: 20,
        fontWeight: 'bold',
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
        alignItems: 'center',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    description: {
        fontSize: 13,
        textAlign: 'center',
    },
    price: {
        textAlign: 'center',
    },
    cards: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 5,
        width: 340,
        height: 125,
        flexDirection: 'row',
        marginLeft: 1,
        flexWrap: 'wrap',
        gap: 20,

    },
    textCon: {
        flex: 5,
        marginLeft: 80,
        marginTop: -90,
        width: 150,
    },
    Item: {
        marginRight: 300,
        marginTop: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    Star: {
        marginTop: -80,
        left: -20,
    },
    Textname: {
        marginTop: 20,
    }
});