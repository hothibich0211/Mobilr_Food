import { View, StyleSheet, StatusBar, Image, TouchableOpacity, Text, FlatList, ImageBackground } from "react-native";
import Header from "../Components/Header";
import { useState } from "react";
import DataItem from "../Data/DataItem";
const PatternB = require('../assets/images/PatternB.png');
const Adv = require('../assets/images/promo_advertising.png');
export default function Home({ navigation }) {
    const [item, setItem] = useState(DataItem);
    return (
        <View style={styles.container}>
            <ImageBackground source={PatternB} resizeMode="cover" style={styles.Bg}>
                <Header />
                <View style={styles.GroupAd}>
                    <Image source={Adv} resizeMode="cover" style={styles.Advert}></Image>
                    <Text style={styles.textOcteber}>Special Deal For {'\n'}October</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Detail")}>
                        <Text style={styles.buttonText}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.GroupItem}>
                    <Text style={styles.textNearst}>Nearest Restaurant</Text>
                    <Text style={styles.textView}>View More</Text>
                </View>
                <FlatList
                    data={item}
                    renderItem={({ item }) => (
                        <View style={styles.Row}>
                            <Image source={item.imageSource} style={styles.Restaurant_image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.description}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                    horizontal
                    keyExtractor={(item) => item.id}
                />

            </ImageBackground >
            <StatusBar style="auto" />

        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF',
    },
    Bg: {
        alignItems: 'center',
    },
    GroupAd: {
        marginTop: 15,
    },
    textOcteber: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -130,
        marginLeft: 170,
    },
    buttonText: {
        color: '#6B50F6',
        fontSize: 15,
        marginTop: 10,
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 170,
        width: 100,
        height: 40,
    },
    GroupItem: {
        flexDirection: 'row',
        gap: 90,
        marginTop: 30,
    },
    textNearst: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textView: {
        color: '#6B50F6',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 15,
        opacity: 0.3,
        marginLeft: 15,
    },
   
    Restaurant_image: {
    
    },
    Row: {
        padding: 40,
    }
})