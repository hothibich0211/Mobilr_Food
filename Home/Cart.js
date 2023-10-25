import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import ConfirmOrder from '../Page/ConfirmOrder';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Order = require('../assets/images/Menu_Photo-1.png');

export default function Cart({navigation}) {
    const [quantity, setQuantity] = useState(1);
    const [discount, setDiscount] = useState(0);
    const [shipping, setShipping] = useState(10);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const subTotal = quantity * 35 - discount + shipping;

    return (
       
            <View style={styles.container}>
                <View>
                    <Text style={styles.textChat}>Order details</Text>
                    <View style={styles.Cart1}>
                        <View style={styles.Cards}>
                            <Image source={Order} resizeMode="cover" style={styles.Menu_list} />
                            <View style={styles.textContainer}>
                                <Text style={styles.textGreenNodol}>Spacy fresh crab</Text>
                                <Text style={styles.textPrice}>$ 35</Text>
                                <Text style={styles.textYour}>Waroenk kita</Text>
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
                    <View style={styles.Card2}>
                        <View style={styles.Card}>
                            <Image source={Order} resizeMode="cover" style={styles.Menu_list} />
                            <View style={styles.textContainer}>
                                <Text style={styles.textGreenNodol}>Spacy fresh crab</Text>
                                <Text style={styles.textPrice}>$ 35</Text>
                                <Text style={styles.textYour}>Waroenk kita</Text>
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
                    <View style={styles.Card3}>
                        <View style={styles.Cardd}>
                            <Image source={Order} resizeMode="cover" style={styles.Menu_list} />
                            <View style={styles.textContainer}>
                                <Text style={styles.textGreenNodol}>Spacy fresh crab</Text>
                                <Text style={styles.textPrice}>$ 35</Text>
                                <Text style={styles.textYour}>Waroenk kita</Text>
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
                        <Text style={styles.buttonText} onPress={()=>navigation.navigate("ConfirmOrder")}>Place My Order</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <StatusBar style="auto" />
            </View>
        
    );
}

const styles = StyleSheet.create({
    // scrollViewContent: {
    //     flexGrow: 1,
    // },
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
        fontWeight:'bold',
        fontSize: 20,
        left: '2%',
    },
    Cart1:{
        top: 250,
        padding:10,
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
        top: -140,
        height: 80,
        margin: 5,
    },
    Card2:{
        top: 190,
        padding:10,
    },
    Card: {
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
        top: -140,
        height: 80,
        margin: 5,
    },
    Card3:{
        top: 130,
        padding:10,
    },
    Cardd:{
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
        top: -140,
        height: 80,
        margin: 5,
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
        paddingVertical: -2,
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
    summaryContainer: {
        marginTop: 30,
        top: 12,
        backgroundColor:'#6B50F6',
        borderRadius: 20,
        height:245,
        width:350,
        left:7.5,
       
    },
    summaryText: {
        top:18,
        fontSize: 18,
        color:'white',
        marginBottom: 10,
        left: 30,
    },
    subTotalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
        marginTop: 20,
        left:30,
    },
    subTotalPrice:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
        marginTop: -145,
        padding:40,
        textAlign:'right',
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
        fontWeight:'bold',
    },
});