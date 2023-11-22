import { View, StyleSheet, StatusBar, Image, TouchableOpacity, Text, FlatList } from "react-native";
import Header from "../Components/Header";
import DataCart from "../Data/DataCart";
import { useState } from "react";
export default function CheckOut({navigation}) {
    const [dataItem, setDataItem] = useState(DataCart);
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View style={styles.content}>
                <FlatList
                    data={dataItem}
                    renderItem={({ item }) => (
                        <View style={styles.Row}>
                            <Image source={item.imageSource} resizeMode="cover" style={styles.imgItem} />
                            <View style={styles.Item}>
                                <Text style={styles.textName}>{item.name}</Text>
                                <Text style={styles.textWaroenk}>{item.restaurant}</Text>
                                <Text style={styles.textPrice}>{item.price}</Text>
                            </View>
                            <Text style={styles.textProcess}>Process</Text>
                        </View>
                    )}
                    keyExtractor={(item) =>item.id}
                />
            </View>
            <TouchableOpacity style={styles.checkOut} onPress={() => navigation.navigate('TrackOrder')}>
                <Text style={styles.textCheckout}>Check out</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    checkOut: {
        // flex: 1,
        backgroundColor: '#6B50F6',
        marginBottom: 5,
        height: 60,
        width: 300,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems:'center',
    },
    textCheckout: {
        color: '#FFFF',
        fontSize: 18,
        fontWeight: 'bold',
    }




})