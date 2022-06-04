import React from "react"
import { Text, View, StyleSheet, Button, SafeAreaView, ImageBackground, Pressable, TouchableHighlight, Image } from "react-native"
import Header from "./Header"

const HomePage = ({ navigation }) => {

    return (
        <ImageBackground style={{ flex: 1, resizeMode: 'cover' }} source={require("../assets/back.png")} >
            <SafeAreaView >

                <View style={styles.v1}>
                    <View style={styles.vrow}>
                        <Text style={styles.textView}>Login as:</Text>
                        {/* <Pressable style={styles.Btnsys} onPress={() => navigation.navigate("AdminLogin")} >
                            <Text style={styles.text}>Admin</Text>
                        </Pressable> */}

                        <TouchableHighlight onPress={() => navigation.navigate("AdminLogin")}>
                            <View>
                                <Image
                                    source={require("../assets/admin.png")}
                                    style={{ height: 50, width: 50 }}
                                />
                                <Text style={{ fontWeight: "bold" }}>Admin</Text>
                            </View>
                        </TouchableHighlight>


                    </View>
                    <View style={styles.btnView}>

                        {/* <Pressable style={styles.Btn} onPress={() => navigation.navigate("AdminLogin")} >
                            <Text style={styles.text}>System Admin</Text>
                        </Pressable> */}
                    </View>
                    <View style={styles.btnView} >
                        {/* <Pressable style={styles.Btn} onPress={() => navigation.navigate("Login")} >
                            <Text style={styles.text}>Doctor</Text>
                        </Pressable> */}
                        <TouchableHighlight onPress={() => navigation.navigate("Login")}>
                            <View>
                                <Image
                                    source={require("../assets/doctor.png")}
                                    style={{ height: 200, width: 200 }}
                                />
                                <Text style={{ marginLeft: 80, fontWeight: "bold" }}>Doctor</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

            </SafeAreaView>
        </ImageBackground>

    )

}

const styles = StyleSheet.create({
    textView: {
        fontSize: 20,
        fontWeight: "300",
        marginRight: 100,
        fontWeight: "bold"
    },
    btnView: {
        justifyContent: "center",
        alignItems: "center",
        margin: 60,
        height: 70
    },
    v1: {
        height: 700,
        margin: 20
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
    vrow: {
        flexDirection: "row",
        minWidth: 50
    },
    Btnsys: {
        widht: 10,
        height: 50,
        borderRadius: 10,
        alignItems: "flex-end",
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',


    }



})


export default HomePage;