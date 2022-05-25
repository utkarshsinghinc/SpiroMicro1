import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Touchable } from "react-native"

const Header2 = ({ navigation }, text) => {
    return (
        <View style={styles.authView}>
            <Text style={styles.authText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    authText: {
        justifyContent: "flex-start",
        fontSize: 20,

    },
    authView: {

        margin: 20

    }

})

export default Header2;