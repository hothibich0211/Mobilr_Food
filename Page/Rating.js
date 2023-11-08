import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const Calling = require('../assets/images/image_call.png');
const Edit = require('../assets/images/edit_icon.png');
const StarFilled = require('../assets/images/Star.png');
const StarOutline = require('../assets/images/Star_outline.png');

export default function Rating({ navigation }) {
    const [rating, setRating] = useState(0);

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmitRating = () => {
        // Gửi giá trị rating lên server hoặc xử lý theo logic của bạn
        // Sau khi hoàn thành, bạn có thể chuyển hướng đến màn hình khác bằng navigation.navigate()
    };

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image source={Calling} resizeMode="cover" style={styles.Calling} />
                    <Text style={styles.textLew}>Thank You! {'\n'} Order Completed</Text>
                    <Text style={styles.textDriver}>Please rate your last Driver</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <TouchableOpacity
                        onPress={() => handleRating(1)}
                        style={styles.starButton}
                    >
                        <Image
                            source={rating >= 1 ? StarFilled : StarOutline}
                            style={styles.starIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleRating(2)}
                        style={styles.starButton}
                    >
                        <Image
                            source={rating >= 2 ? StarFilled : StarOutline}
                            style={styles.starIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleRating(3)}
                        style={styles.starButton}
                    >
                        <Image
                            source={rating >= 3 ? StarFilled : StarOutline}
                            style={styles.starIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleRating(4)}
                        style={styles.starButton}
                    >
                        <Image
                            source={rating >= 4 ? StarFilled : StarOutline}
                            style={styles.starIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleRating(5)}
                        style={styles.starButton}
                    >
                        <Image
                            source={rating >= 5 ? StarFilled : StarOutline}
                            style={styles.starIcon}
                        />
                    </TouchableOpacity>

                </View>
                <View style={styles.Feedback}>
                    <TextInput style={styles.TextMess} placeholder="Leave feeback " />
                    <Image source={Edit} resizeMode="cover" style={styles.Edit_Icon}></Image>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmitRating}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button} onPress={handleSubmitRating}>
                    <Text style={styles.submitText}>Skip</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Calling: {
        alignSelf: 'center',
    },
    textLew: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        top: 40,
    },
    textDriver: {
        fontSize: 16,
        textAlign: 'center',
        top: 50,
        color: '#cfcfd1',
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    starButton: {
        marginHorizontal: 5,
    },
    starIcon: {
        width: 20,
        height: 20,
        marginTop: 50,
    },
    Feedback: {
        marginTop: 70,
    },
    TextMess: {
        width: 330,
        height: 60,
        borderRadius: 10,
        borderColor: '#cfcfd1',
        color: '#cfcfd1',
        borderWidth: 1,
        paddingLeft: 40,

    },
    Edit_Icon: {
        marginTop: -42,
        left: 10,
    },
    submitButton: {
        backgroundColor: '#6B50F6',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 100,
        width:210,
    },
    submitButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign:'center',
    },
    Button: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: -44.5,
        marginLeft:220,
        width:80
    },
    submitText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6B50F6',
    }
});