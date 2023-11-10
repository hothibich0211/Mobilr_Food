import { View, StyleSheet, StatusBar, Image,TouchableOpacity, Text } from "react-native";
import Header from "../Components/Header";
import DataCart from "../Data/DataCart";
import { useState } from "react";
export default function CheckOut(navigation) {
    const [dataItem, setDataItem] = useState(DataCart);
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            {dataItem.slice(0, 5).map((item) => (
                <View style={styles.Row}>
                    <Image source={item.imageSource} resizeMode="cover" style={styles.imgItem} />
                    <View style={styles.Item}>
                        <Text style={styles.textName}>{item.name}</Text>
                        <Text style={styles.textWaroenk}>{item.restaurant}</Text>
                        <Text style={styles.textPrice}>{item.price}</Text>
                    </View>
                    <Text style={styles.textProcess}>Process</Text>
                </View>
            ))}
            <TouchableOpacity style={styles.checkOut}>
                <Text style={styles.textCheckout}>Check out</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Row: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 20,
        marginLeft: 20,
    },
    Item:{
        flex: 1,
    },
    textName:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    textWaroenk:{
        fontSize: 15,
        opacity: 0.3,
    },
    textPrice:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6B50F6',
    },
    textProcess:{
        borderRadius: 10,
        backgroundColor:'#6B50F6',
        justifyContent:'center',
        color:'#FFFF',
        padding: 5,
        height: 30,
        marginTop:20,
        marginRight:20,
    },
    checkOut:{
        backgroundColor:'#6B50F6',
        padding: 20,
        marginTop:70,
        paddingLeft:120,
        paddingRight: 120,
        borderRadius: 15,
    },
    textCheckout:{
        color:'#FFFF',
        fontSize:18,
        fontWeight:'bold',
    }




})