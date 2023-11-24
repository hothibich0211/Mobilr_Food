import { View, StyleSheet, StatusBar, Image, TouchableOpacity, Text, FlatList, ImageBackground, ScrollView } from "react-native";
import Header from "../Components/Header";
import { useState } from "react";
import DataItem from "../Data/DataItem";
import DataCart from "../Data/DataHome";
// import { ScrollView } from "react-native-gesture-handler";
const PatternB = require('../assets/images/PatternB.png');
const Adv = require('../assets/images/promo_advertising.png');
export default function Home({ navigation }) {
    const [item, setItem] = useState(DataItem);
    const [data, setDate] = useState(DataCart);

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={PatternB} resizeMode="cover" style={styles.Bg}>
                <Header />
                <ScrollView style={styles.scrollView}>
                    <View>
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
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}

                        />
                        <View style={styles.GroupP}>
                            <Text style={styles.textPopular}>Popular Menu</Text>
                            <Text style={styles.textGreen}>View More</Text>
                        </View>
                        {data.map((item) => (
                            <View style={styles.Cards} key={item.id}>
                                <Image source={item.imageSource} resizeMode="cover" style={styles.Images} />
                                <Text style={styles.textGreenNodol}>{item.name}</Text>
                                <Text style={styles.textPrice}>{item.price}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </ImageBackground >
            <StatusBar style="auto" />

        </ScrollView >
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
        marginHorizontal: 15,
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
        marginHorizontal: 15,
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
        marginTop: -20,
        alignItems: 'center',
    },
    Row: {
        padding: 40,
    },
    textPopular: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
    },
    textGreen: {
        color: '#6B50F6',
    },
    GroupP: {
        flexDirection: 'row',
        gap: 145,
        marginTop: -30,

    },
    Cards: {
        flexDirection: 'row',
        gap: 30,
    },
    textGreenNodol: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
    },
    textPrice: {
        fontSize: 18,
        marginTop: 20,
        fontWeight: 'bold',
        color: '#6B50F6',
    },
    Images: {
        marginTop:10,
        marginHorizontal: 20,
    }
})