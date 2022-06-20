import React from "react";
import { Text, Button, View, StyleSheet, Pressable } from "react-native"


const Update = ({ navigation }) => {
    return (
        <View style={styles.V1}>
            <Text style={styles.text2}>UPDATE</Text>
            <View style={styles.View}>

                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#5a6373'
                            : 'black'
                    },
                    styles.Btn
                ]} onPress={() => navigation.navigate("EmailUpdate")}  >
                    <Text style={styles.text}>Email</Text>
                </Pressable>

            </View>

            <View style={styles.View}>


                <Pressable style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#5a6373'
                            : 'black'
                    },
                    styles.Btn
                ]} onPress={() => navigation.navigate("PasswordUpdate")} >
                    <Text style={styles.text}>Password</Text>
                </Pressable>
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

    },
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
        //backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    text2: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    }

})
export default Update;
