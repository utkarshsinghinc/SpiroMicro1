import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native"

const PatientDetails = (props) => {

    return (
        <View style={styles.v1}>

            <Text>Hi {props.name}</Text>

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