import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import HeaderUser from '../Components/HeaderUser';
import Collapsible from 'react-native-collapsible';
import DataCart from "../Data/DataCart";
const Profile = require('../assets/images/image_Profile.png');

const User = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Dummy data for FlatList
    const DATA = DataCart;
    const renderItem = ({ item }) => (
        <Text style={styles.item}>
            {`${item.name}, ${item.price}, ${item.restaurant}, ${item.imageSource}`}
        </Text>
    );

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
                    <Image
                        source={Profile} // Replace with your image URL
                        style={styles.image}
                    />
                </Collapsible>
                <HeaderUser />
                <FlatList
                    data={DATA}
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
                    keyExtractor={(item) => item.id.toString()}
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
    background: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#F6F6F6',

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
    },
    icon_Edit: {
        marginTop: -50,
        marginLeft: 300,
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
        fontWeight: 'bold',
    },
});

export default User;
