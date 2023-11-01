import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import Total from '../Components/Total';
import DataCart from '../Data/DataCart';

const Order = require('../assets/images/Menu_Photo-1.png');

export default function Cart({ navigation }) {
    const [itemCart, setItemCart] = useState(DataCart);
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    const calculateTotal = () => {
        let total = 0;
        for (const item of itemCart) {
            total += item.price * quantity;
        }
        return total;
    };


    useEffect(() => {
        const newTotal = calculateTotal();
        setTotal(newTotal);
    }, [quantity, itemCart]);

    return (
        <View style={styles.container}>
            <View>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <Text style={styles.textChat}>Order details</Text>
                    {itemCart.map((item) => (
                        <View style={styles.Cart1} key={item.id}>
                            <View style={styles.Cards}>
                                <Image source={item.imageSource} resizeMode="cover" style={styles.Menu_list} />
                                <View style={styles.textContainer}>
                                    <Text style={styles.textGreenNodol}>{item.name}</Text>
                                    <Text style={styles.textPrice}>{item.price}</Text>
                                    <Text style={styles.textYour}>{item.restaurant}</Text>
                                </View>
                            </View>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{quantity}</Text>
                                <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <Total navigation={navigation} total={total} />
            </View>
            <StatusBar style="auto" />
        </View>

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
    Menu_list: {
        top: 9.5,
    },
    textChat: {
        top: '12%',
        fontWeight: 'bold',
        fontSize: 20,
        left: '5%',
    },
    Cart1: {
        top: 250,
        padding: 3,
        margin: 5,
    },
    Cards: {
        backgroundColor: '#fff',
        width: 345,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: -20,
        right: '-5%',
        top: -140,
        height: 80,
    },

    textGreenNodol: {
        right: '7%',
        fontSize: 18,
        top: -60,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    textPrice: {
        top: -45,
        left: '-22%',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6B50F6',
        textAlign: 'center',
    },
    textYour: {
        top: -88,
        left: '23%',
        color: '#cfcfd1',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        left: 110,
        top: -213,
    },
    quantityButton: {
        backgroundColor: '#ccc',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 5,
    },
    quantityButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6B50F6',
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 20,
    },
});
