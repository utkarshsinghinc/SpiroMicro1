import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Touchable, SafeAreaView, Button } from "react-native"
import Header from "./Header";
import DoctorDashboard from "./DoctorDashboard";
const AddDoctor = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Header />
            <View style={styles.v1}>

                <Button onPress={() => navigation.navigate("DoctorRegister")} title="ADD DOCTOR" />
            </View>
            <View style={styles.v1} >

                <Button title="Delete Doctor" />
            </View>

            <DoctorDashboard />
        </SafeAreaView>


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
    }
})

export default AddDoctor;
