import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Formik } from 'formik';
//import { Picker } from '@react-native-picker/picker';
//import NumberPlease from 'react-native-number-please';
//import player from './Wave';
//const PatientAge = [{ id: "age", min: 0, max: 120 }];
import Header from './Header';

const Login = ({ navigation }) => (



    < Formik
        initialValues={{ pnumber: "", password: "" }}
        onSubmit={values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (

            <View style={styles.V1}>
                <Header />
                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Phone Number</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange('pnumber')}
                        onBlur={handleBlur('pnumber')}
                        value={values.pnumber}
                        placeholder=" Enter your 10-digit Phone Number"

                    />
                </View>
                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Password</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder=" Enter your password"

                    />
                </View>




                <View style={styles.submitBtn}>
                    <Button onPress={handleSubmit} title="Login" />
                </View>

                <View style={styles.row2}>
                    <Text >Not have account?</Text>
                    <Text style={styles.text} onPress={() => navigation.navigate("PatientInfo")}>  Register</Text>
                </View>
            </View>
        )}
    </Formik >
);


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
        borderRadius: 5,
        height: 30
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
    }



})

export default Login;