import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function Total({ navigation }) {
    const [quantity, setQuantity] = useState(1);
    const [discount, setDiscount] = useState(0);
    const [shipping, setShipping] = useState(10);
    const subTotal = quantity * 35 - discount + shipping;
    return (
        <View style={styles.container}>
            <View style={styles.backButn}>
                <View style={styles.row_1}>
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
                </View>

                <View style={styles.row_2}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => navigation.navigate("ConfirmOrder")}>Place My Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>


    )
}
const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    backButn: {
        backgroundColor: '#6B50F6',
        width: 330,
        height: 230,
        borderRadius: 20,
    },
    summaryText: {
        fontSize: 18,
        color: '#ffff',
        marginBottom: 7,
        marginTop: 10,
        marginLeft: 10,
    },
    subTotalText: {
        fontSize: 18,
        color: '#ffff',
        marginBottom: 7,
        marginTop: 10,
        marginLeft: 10,
    },
    subTotalPrice: {
        fontSize: 18,
        color: '#ffff',
        marginBottom: 7,
        marginTop: 10,
        textAlign: 'right',
        marginRight: 5,
    },
    row_1: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius:15,
    },
    buttonText:{
        padding:15,
        textAlign:'center',
    },
    prices:{
        textAlign:'right',
    }
})