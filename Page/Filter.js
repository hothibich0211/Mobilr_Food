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
            {/* <TouchableOpacity style={styles.buttonF4}>
                <Text style={styles.TextA}>Appetizer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonF5}>
                <Text style={styles.TextD}>Dessert</Text>
            </TouchableOpacity> */}
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
    text_type:{
        fontSize:20,
        fontWeight:'bold',
        marginRight:90,
        marginTop:10,
    },
   
    buttonR: {
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        width: 100,
        marginRight: '60%',
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
        marginTop:-40,
        alignItems: 'center',
        width: 70,
        justifyContent: 'center',
        marginLeft: 70,
        flexDirection: 'row',
    },
    text_loc:{
        fontSize: 20,
        marginRight: 250,
        fontWeight: 'bold',
        marginTop:10,
    },
    buttonK:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        width: 70,
        justifyContent: 'center',
        marginRight: '47%',
        marginTop:10,
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
        marginLeft:95,
        alignItems: 'center',
        width: 70,
        justifyContent: 'center',
        marginTop:-40,
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
        marginLeft: 190,
        alignItems: 'center',
        width: 70,
        justifyContent: 'center',
        marginTop:-40,
    },
    TextK2:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    text_food:{
        fontSize: 20,
        marginRight: 280,
        fontWeight: 'bold',
    },
    buttonF:{
        backgroundColor: '#e6fff0',
        borderRadius: 15,
        padding: 10,
        marginRight: 50,
        alignItems: 'center',
        width: 70,
        justifyContent: 'center',
        marginTop:10,
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
        marginLeft: 100,
        alignItems: 'center',
        width: 70,
        justifyContent: 'center',
        marginTop:-40,
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
        marginLeft: 195,
        alignItems: 'center',
        width: 120,
        justifyContent: 'center',
        marginTop:-42,
    },
    TextMC:{
        color: '#6b50f6',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // buttonF4:{
    //     backgroundColor: '#e6fff0',
    //     borderRadius: 15,
    //     padding: 10,
    //     marginRight: 92,
    //     alignItems: 'center',
    //     width: 100,
    //     justifyContent: 'center',
    // },
    // TextA:{
    //     color: '#6b50f6',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    // },
    // buttonF5:{
    //     backgroundColor: '#e6fff0',
    //     borderRadius: 15,
    //     padding: 10,
    //     marginRight: -22,
    //     alignItems: 'center',
    //     width: 90,
    //     justifyContent: 'center',
    // },
    // TextD:{
    //     color: '#6b50f6',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    // },

    buttonF6:{
        backgroundColor: '#6b50f6',
        borderRadius: 15,
        padding: 10,
        marginRight: 2.5,
        alignItems: 'center',
        width: 300,
        justifyContent: 'center',
        marginTop:180,
    },
    TextButtons:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})