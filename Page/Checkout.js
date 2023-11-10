import { View, StyleSheet, StatusBar } from "react-native";
import Header from "../Components/Header";
export default function CheckOut(navigation) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <View>

            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})