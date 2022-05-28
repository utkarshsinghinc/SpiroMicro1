import React from "react";
import { Text, Button, View, StyleSheet, Pressable } from "react-native"
import Header from "./Header";

const Testing = ({ navigation }) => {
    return (
        <View style={styles.V1}>

            <View style={styles.View}>

                <Pressable style={styles.Btn}  >
                    <Text style={styles.text}>Respiratory</Text>
                </Pressable>

            </View>

            <View style={styles.View}>


                <Pressable style={styles.Btn} onPress={() => navigation.navigate("AudioRecoder")} >
                    <Text style={styles.text}>Cough</Text>
                </Pressable>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({


    View: {

        margin: 20,
        marginTop: 100,
        marginLeft: 50,
        marginRight: 50,
        widht: 50,
        height: 50,
        borderRadius: 50

    },
    V1: {
        justifyContent: "center"

    },
    Btn: {
        widht: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }

})
export default Testing;
