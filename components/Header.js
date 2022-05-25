import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Touchable } from "react-native"

const Header = ({ navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("HomePage")}>
            <Image style={styles.logo} source={require("../assets/spiromicro.png")} />
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    }
})

export default Header;