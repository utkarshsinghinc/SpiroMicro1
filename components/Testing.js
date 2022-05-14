import React from "react";
import { Text, Button, View, StyleSheet } from "react-native"
import Header from "./Header";

const Testing = ({ navigation }) => {
    return (
        <View style={styles.V1}>
            <Header />
            <View style={styles.View}>
                <Button title="Respiratory" />


            </View>

            <View style={styles.View}>
                <Button title=" Cough" onPress={() => navigation.navigate("AudioRecoder")} />


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

    }

})
export default Testing;
