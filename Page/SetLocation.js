import { View, TextInput, StyleSheet } from "react-native";
export default function SetLocation() {
    return (
        <View style={styles.container}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 16.054018080603388,
                    longitude: 108.26807969802243,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <TextInput style={styles.inputText} placeholder="Find Your Location" />
        </View>
    )


}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInput: {
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        padding: 9,
        width: 200,
        marginRight: 20,
        color: '#ffff',
        backgroundColor: '#F0EEFE',
    }


})