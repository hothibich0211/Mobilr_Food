import Header from "../Components/Header";
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
export default function Filter(){
    return(
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
            <Header/>
        <View>
            <Text style={styles.text_type}>Type</Text>
            <TouchableOpacity style={styles.buttonR}>
                <Text style={styles.TextRes}>Restaurant</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={styles.buttonM}>
                <Text style={styles.TextMenu}>Menu</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.location}>
            <Text style={styles.text_loc}>Location</Text>
            <TouchableOpacity style={styles.buttonK}>
                <Text style={styles.TextKm}>1 Km</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonK1}>
                <Text style={styles.TextK1}> 10 Km</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonK2}>
                <Text style={styles.TextK2}>10 Km</Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.food}>
            <Text style={styles.text_food}>Food</Text>
            <TouchableOpacity style={styles.buttonF}>
                <Text style={styles.TextC}>Cake</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonF1}>
                <Text style={styles.TextS}>Soup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonF3}>
                <Text style={styles.TextMC}>Main Course</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonF4}>
                <Text style={styles.TextA}>Appetizer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonF5}>
                <Text style={styles.TextD}>Dessert</Text>
            </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.buttonF6}>
                <Text style={styles.TextButtons}>Search</Text>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
    </View>
    </ScrollView>
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
    text_type: {
        fontSize: 18,
        left: '-25%',
        top: 50,
        fontWeight: 'bold',
    },
    buttonR: {
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        marginLeft: 40,
        marginTop: 415,
        alignItems: 'center',
        width: 100,
        top: -350,
        right: '35%',
    },
    TextRes: {
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    TextMenu: {
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonM: {
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        marginLeft: 100,
        top: 415,
        alignItems: 'center',
        width: 70,
        top: -390,
        justifyContent: 'center',
        right: 60,
        flexDirection: 'row',
    },
    text_loc:{
        fontSize: 18,
        left: '-20%',
        top:-380,
        fontWeight: 'bold',
    },
    buttonK:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        marginLeft: 100,
        alignItems: 'center',
        width: 70,
        top: -365,
        justifyContent: 'center',
        right: '47%',
    },
    TextKm:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonK1:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        left:95,
        alignItems: 'center',
        width: 70,
        top: -405,
        justifyContent: 'center',
    },
    TextK1:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonK2:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        marginLeft: 13,
        alignItems: 'center',
        width: 70,
        top: -448,
        justifyContent: 'center',
    },
    TextK2:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text_food:{
        fontSize: 18,
        left: '-27%',
        top:-435,
        fontWeight: 'bold',
    },
    buttonF:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        right: 94,
        alignItems: 'center',
        width: 70,
        top: -420,
        justifyContent: 'center',
    },
    TextC:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonF1:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        right: 11,
        alignItems: 'center',
        width: 70,
        top: -460,
        justifyContent: 'center',
    },
    TextS:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonF3:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        right: -72,
        alignItems: 'center',
        width: 120,
        top: -500,
        justifyContent: 'center',
    },
    TextMC:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonF4:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        right: 92,
        alignItems: 'center',
        width: 100,
        top: -490,
        justifyContent: 'center',
    },
    TextA:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonF5:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        right: -22,
        alignItems: 'center',
        width: 90,
        top: -530,
        justifyContent: 'center',
    },
    TextD:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },

    buttonF6:{
        backgroundColor: '#6b50f6',
        borderRadius: 15,
        padding: 10,
        right: 2.5,
        alignItems: 'center',
        width: 300,
        top: -430,
        justifyContent: 'center',
    },
    TextButtons:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})