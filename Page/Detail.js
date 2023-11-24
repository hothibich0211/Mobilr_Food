import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';

const Detail = require('../assets/images/Detail_Restaurant.png');
const Location = require('../assets/images/icon_Location.png');
const Love = require('../assets/images/icon_Love.png');
const Map = require('../assets/images/icon_map.png');
const Star = require('../assets/images/Star.png');
const star = require('../assets/images/Icon_Star.png');

const data = [
    {
        id: '1',
        image: require('../assets/images/Detail_1.png'),
        title: 'Spicy fresh crab',
        price: '8$',
    },
    {
        id: '2',
        image: require('../assets/images/Detail_2.png'),
        title: 'Spicy fresh crab',
        price: '18$',
    },
    {
        id: '3',
        image: require('../assets/images/Detail_1.png'),
        title: 'Spicy fresh crab',
        price: '28$',
    },
    {
        id: '4',
        image: require('../assets/images/Detail_2.png'),
        title: 'Spicy fresh crab',
        price: '16$',
    },
];

const dataMenu = [
    {
        id: '1',
        image: require('../assets/images/Profile.png'),
        name: 'Dianne Russell',
        day: '12 April 2021',
    },
    {
        id: '2',
        image: require('../assets/images/Profile.png'),
        name: 'Dianne Russell',
        day: '12 April 2021',
    },
    {
        id: '3',
        image: require('../assets/images/Profile.png'),
        name: 'Dianne Russell',
        day: '12 April 2021',
    },
    {
        id: '4',
        image: require('../assets/images/Profile.png'),
        name: 'Dianne Russell',
        day: '12 April 2021',
    },
];

const DetailProduct = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <View style={styles.container}>
            <ScrollView
                onScroll={(event) => {
                    const yOffset = event.nativeEvent.contentOffset.y;
                    setIsCollapsed(yOffset > 50);
                }}
                scrollEventThrottle={16}
            >
                <Collapsible collapsed={isCollapsed}>
                    <Image source={Detail} style={styles.image} />
                </Collapsible>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textbutton}>Popular</Text>
                    <Image source={Location} resizeMode="cover" style={styles.icon_Location} />
                    <Image source={Love} resizeMode="cover" style={styles.icon_Love} />
                </TouchableOpacity>
                <Text style={styles.TextTitle}>Wijie Bar and Resto</Text>
                <Image source={Map} resizeMode="cover" style={styles.icon_Map} />
                <Text style={styles.Kilomet}>19 Km</Text>
                <Image source={Star} resizeMode="cover" style={styles.icon_Star} />
                <Text style={styles.Rating}>4.8 Rating</Text>
                <Text style={styles.texttitles}>
                    Most Whole Alaskan RedKing Carbs get broken down into legs, claws, and lump meat. We offer all of these
                    options as well in our online shop, but there is nothing like getting the whole...
                </Text>
                <Text style={styles.Menu}>Popular Menu</Text>
                {/* FlatList for data */}
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
                {/* FlatList for dataMenu */}
                <FlatList
                    data={dataMenu}
                    renderItem={({ item }) => (
                        <View style={styles.cards}>
                            <Image source={item.image} style={styles.Item} />
                            <View style={styles.textCon}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.day}>{item.day}</Text>
                                <Text style={styles.Textname}>
                                    This is great. So delicious! You must be here with your family...
                                </Text>
                            </View>
                            <Image source={star} style={styles.Star} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 200,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },


    button: {
        backgroundColor: '#3FDA85',
        borderRadius: 20,
        width: 70,
        height: 30,
        marginTop: 10,
    },
    Textbutton: {
        color: '#6B50F6',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon_Location: {
        marginTop:-21,
        marginLeft: 250,
        width: 32,
        height: 32,
    },
    icon_Love: {
        marginTop:-35,
        width: 34,
        height: 34,
        marginLeft: 300,
    },
    TextTitle: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    texttitles:{
        marginTop:30,
    },
    icon_Map:{
        marginTop:10,
    },
    Kilomet: {
        marginTop: -20,
        marginLeft: 30,
    },
    icon_Star: {
        width: 20,
        height: 20,
        marginLeft: 80,
        marginTop: -22,
    },
    Rating: {
        marginLeft: 110,
        marginTop: -18,
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

export default DetailProduct;
