import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Touchable, SafeAreaView, Button, ScrollView, VirtualizedList, ImageBackground, Pressable } from "react-native"
import Header from "./Header";
import DoctorDashboard from "./DoctorDashboard";

const AddDoctor = ({ navigation, Page, item }) => {
    return (

        <ScrollView>
            {/* <ImageBackground source={require("../assets/back.png")}> */}
            <SafeAreaView>

                <View style={styles.v1}>
                    <Pressable style={styles.Btn} onPress={() => navigation.navigate("DoctorRegister")} >
                        <Text style={styles.text}>ADD DOCTOR</Text>
                    </Pressable>
                </View>
                <View style={styles.v1} >




                    <Pressable style={styles.Btn}>
                        <Text style={styles.text}>Delete DOCTOR</Text>
                    </Pressable>



                </View>

                <DoctorDashboard />

            </SafeAreaView>
            {/* </ImageBackground> */}
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
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

export default AddDoctor;
