import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native"
import { useRoute } from "@react-navigation/native";
const PatientDetails = (props) => {
    const route = useRoute();
    return (
        <View style={styles.v1}>

            <Text>Hi {route.params.name}</Text>

            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? '#5a6373'
                        : 'black'
                },
                styles.Btn
            ]} >
                <Text style={styles.text}>Begin Experiment</Text>
            </Pressable>
        </View>
    )

}
export default PatientDetails;

const styles = StyleSheet.create({

    v1: {
        margin: 20
    },
    btn: {
        width: 600
    },
    text: {
        color: "white"
    }
})