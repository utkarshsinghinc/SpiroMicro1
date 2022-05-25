import React from "react"
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native"
import Header from "./Header"

const HomePage = ({ navigation }) => {

    return (

        <SafeAreaView >
            <Header />
            <View style={styles.v1}>
                <View>
                    <Text style={styles.textView}>Login as:</Text>
                </View>
                <View style={styles.btnView}>

                    <Button style={styles.Btn} onPress={() => navigation.navigate("AdminLogin")} title="System Admin" />
                </View>
                <View style={styles.btnView} >
                    <Button style={styles.Btn} onPress={() => navigation.navigate("Login")} title="Doctor" />
                </View>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    textView: {
        fontSize: 20,
        fontFamily: "san-sarif",
        fontWeight: 10
    },
    btnView: {
        margin: 20
    },
    v1: {
        margin: 40
    },
    Btn: {
        widht: 50,
        height: 50,
        borderRadius: 10
    }


})


export default HomePage;