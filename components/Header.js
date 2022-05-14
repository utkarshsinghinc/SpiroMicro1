import React from "react";
import { Text, View, Image, StyleSheet } from "react-native"

const Header = () => {
    return (
        <View>
            <Image style={styles.logo} source={require("../assets/spiromicro.png")} />
        </View>
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