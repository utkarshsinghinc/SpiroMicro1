import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Touchable, SafeAreaView, TouchableHighlight } from "react-native"

const Header = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.Safe}>
            <TouchableHighlight onPress={() => navigation.navigate("HomePage")}>
                <Image style={styles.logo} source={require("../assets/spiromicro.png")} />
            </TouchableHighlight >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
        marginTop: 30
    },
    Safe: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        flex: 0.1
    }
})

export default Header;