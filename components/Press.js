import React from 'react'
import { View, Text, Pressable, StyleSheet } from "react-native"

export default function Press(Page, item) {
    return (
        <View>
            <Pressable style={styles.Btn} onPress={() => navigation.navigate(Page)} >
                <Text style={styles.text}>{item}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    Btn: {
        widht: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

})


