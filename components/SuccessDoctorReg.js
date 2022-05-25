import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Touchable, Button } from "react-native"
import Header from "./Header";
const SuccessDoctorReg = ({ navigation }) => {
    return (
        <View>
            <Header />
            <View style={styles.V2}>
                <Image style={styles.logo} source={require("../assets/success.gif")} />
            </View>
            <View style={styles.V1}>
                <Text>Registration Successfully!</Text>
            </View>

            <View style={styles.v1}>

                <Button onPress={() => navigation.navigate("DoctorRegister")} title="ADD NEW DOCTOR" />
            </View>
            <View style={styles.v1} >

                <Button title="Delete Doctor" />
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
    }
})

export default SuccessDoctorReg;