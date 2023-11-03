import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import Total from '../Components/Total';
import DataCart from '../Data/DataCart';

const Decrease = require('../assets/images/IconDe.png');
const Increase = require('../assets/images/IconP.png');

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
                <Text style={styles.textCard}>Order details</Text>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>

                    {itemCart.map((item) => (
                        <View style={styles.Card1} key={item.id}>

                            <Image source={item.imageSource} resizeMode="cover" style={styles.Menu_list} />

                            <View style={styles.textContainer}>
                                <Text style={styles.textGreenNodol}>{item.name}</Text>
                                <Text style={styles.textYour}>{item.restaurant}</Text>
                                <Text style={styles.textPrice}>{item.price}</Text>

                            </View>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                                    <Image source={Decrease} resizeMode="cover" style={styles.Iconde}></Image>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{quantity}</Text>
                                <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                                    <Image source={Increase} resizeMode="cover" style={styles.IconP}></Image>
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
    },
    textCard: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
    },
    Card1: {
        backgroundColor: '#fff',
        marginTop: 30,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    Menu_list: {
        marginLeft: 1,
        alignSelf: 'center',
    },
    textContainer: {
        flex: 3,

    },
    textGreenNodol: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textYour: {
        fontSize: 15,
        opacity: 0.3,
    },
    textPrice: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#6B50F6',
    },
    quantityContainer: {
        marginTop: 3,
        flex: 1.5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,

    },
    quantitydecrease: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6B50F6',
    },

});
