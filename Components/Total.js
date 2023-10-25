import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import ConfirmOrder from '../Page/ConfirmOrder';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function Total ({ navigation }){
    const [quantity, setQuantity] = useState(1);
    const subTotal = quantity * 35 - discount + shipping;
    return (
        <View style={styles.container}>
            <View style={styles.summaryContainer}>
                    <Text style={styles.summaryText}>Total Quantity: </Text>
                    <Text style={styles.summaryText}>Discount: </Text>
                    <Text style={styles.summaryText}>Shipping: </Text>
                    <Text style={styles.subTotalText}>Sub Total:</Text>
                </View>
                <View style={styles.prices}>
                    <Text style={styles.subTotalPrice}>{quantity}$</Text>
                    <Text style={styles.subTotalPrice}>{discount}$</Text>
                    <Text style={styles.subTotalPrice}>{shipping}$</Text>
                    <Text style={styles.subTotalPrice}> {subTotal}$</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => navigation.navigate("ConfirmOrder")}>Place My Order</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    summaryContainer: {
        marginTop: 30,
        top: 12,
        backgroundColor: '#6B50F6',
        borderRadius: 20,
        height: 245,
        width: 350,
        left: 7.5,

    },
    summaryText: {
        top: 18,
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
        left: 30,
    },
    subTotalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        left: 30,
    },
    subTotalPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -145,
        padding: 40,
        textAlign: 'right',
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        top: -40,
        left: '9%',
        width: 300,
        height: 40,
    },
    buttonText: {
        color: '#6B50F6',
        fontSize: 15,
        top: '20%',
        fontWeight: 'bold',
    },
})