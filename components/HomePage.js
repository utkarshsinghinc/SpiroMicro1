import React from "react"
import { Text, View, StyleSheet, Button, SafeAreaView, ImageBackground, Pressable } from "react-native"
import Header from "./Header"

const HomePage = ({ navigation }) => {

    return (
        <ImageBackground source={require("../assets/back.png")} >
            <SafeAreaView >

                <View style={styles.v1}>
                    <View>
                        <Text style={styles.textView}>Login as:</Text>
                    </View>
                    <View style={styles.btnView}>

                        <Pressable style={styles.Btn} onPress={() => navigation.navigate("AdminLogin")} >
                            <Text style={styles.text}>System Admin</Text>
                        </Pressable>
                    </View>
                    <View style={styles.btnView} >
                        <Pressable style={styles.Btn} onPress={() => navigation.navigate("Login")} >
                            <Text style={styles.text}>Doctor</Text>
                        </Pressable>
                    </View>
                </View>

            </SafeAreaView>
        </ImageBackground>

    )

}

const styles = StyleSheet.create({
    textView: {
        fontSize: 20,
        fontWeight: "300"
    },
    btnView: {
        margin: 60,
        height: 200
    },
    v1: {
        height: 700
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
    },


})


export default HomePage;