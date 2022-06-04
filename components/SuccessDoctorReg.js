import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Touchable, Button, Pressable } from "react-native"
import Header from "./Header";
const SuccessDoctorReg = ({ navigation }) => {
    return (
        <View>

            <View style={styles.V2}>
                <Image style={styles.logo} source={require("../assets/success.gif")} />
            </View>
            <View style={styles.V1}>
                <Text>Registration Successfully!</Text>
            </View>

            <View style={styles.v1}>


                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#5a6373'
                            : 'black'
                    },
                    styles.Btn
                ]} onPress={() => navigation.navigate("DoctorRegister")}  >
                    <Text style={styles.text}>ADD NEW DOCTOR</Text>
                </Pressable>
            </View>
            <View style={styles.v1} >


                <Pressable style={{
                    backgroundColor: pressed
                        ? '#5a6373'
                        : 'black'
                }} >
                    <Text style={styles.text}>Delete Doctor</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {

        alignItems: "center",
        width: 100,
        height: 100,
        margin: 20,

    },
    V1: {
        margin: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    V2: {
        justifyContent: "center",
        alignItems: "center"
    },
    v1: {
        margin: 40
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
        //backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
})

export default SuccessDoctorReg;