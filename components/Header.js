import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Touchable, SafeAreaView } from "react-native"

const Header = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.Safe}>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomePage")}>
                <Image style={styles.logo} source={require("../assets/spiromicro.png")} />
            </TouchableOpacity >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        margin: 20
    },
    Safe: {
        justifyContent: "center",
        alignItems: "center",
        height: 50
    }
})

export default Header;