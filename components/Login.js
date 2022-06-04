import React, { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity, Image, Pressable, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import { AsyncStorage } from 'react-native';

const Login = ({ navigation }) => {

    const handleSubmit = async (values) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        return fetch(`http://localhost:4000/users/authenticate`, requestOptions)
            .then(handleResponse)
            .then(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));

                return user;
            })
            .then()
            .then(() => navigation.navigate("PatientLogin"));

    }

    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    location.reload(true);
                }

                const error = (data && data.message) || response.statusText;

                return Promise.reject(error);
            }

            return data;
        });
    }



    // This function will be triggered when the button is pressed

    return (
        < Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, error }) => (

                <View style={styles.V1}>

                    <View style={styles.V2}>
                        <View style={styles.authView}>
                            <Text style={styles.authText}>Doctor's Login:</Text>
                        </View>
                        {error && touched ? (
                            <View>{error}</View>
                        ) : null}
                        <Text style={styles.InputLable}>Username </Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder=" Enter your Email ID"

                        />
                    </View>
                    <View style={styles.V2}>
                        <Text style={styles.InputLable}>Password</Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                            placeholder=" Enter your password"

                        />

                    </View>




                    <View style={styles.submitBtn}>

                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? '#5a6373'
                                    : 'black'
                            },
                            styles.Btn
                        ]} onPress={handleSubmit} >
                            <Text style={styles.text}>Login</Text>
                        </Pressable>
                        <View>
                            {handleResponse}
                        </View>
                    </View>


                </View>
            )
            }
        </Formik >
    )
};


const styles = StyleSheet.create({
    InputLable: {
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10

    },
    V1: {
        margin: 15
    },
    V2: {
        margin: 20
    },
    submitBtn: {
        margin: 20,
        marginLeft: 50,
        marginRight: 50,
        widht: 50,
        height: 50,
        borderRadius: 5

    },
    InputBox: {
        borderWidth: 2,
        borderRadius: 20,
        height: 60,
        backgroundColor: "#ffffff",
        padding: 20,
        fontWeight: "600"

    },
    row: {
        justifyContent: "flex-start",
        flexDirection: "row",
        minWidth: 100

    },
    row2: {
        justifyContent: "flex-start",
        flexDirection: "row",
        minWidth: 100,
        marginLeft: 20,


    },
    V2Row: {
        margin: 20,
        width: "25%"
    },
    text: {
        color: "blue"
    },
    authText: {
        justifyContent: "flex-start",
        fontSize: 20,

        fontWeight: "bold"

    },
    authView: {

        marginBottom: 20

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
        //backgroundColor: presses ? "#5a6373" : "black"
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },



})

export default Login;