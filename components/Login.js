import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { Formik } from 'formik';
//import { Picker } from '@react-native-picker/picker';
//import NumberPlease from 'react-native-number-please';
//import player from './Wave';
//const PatientAge = [{ id: "age", min: 0, max: 120 }];
import Header from './Header';

const Login = ({ navigation }) => (



    < Formik
        initialValues={{ Username: "", password: "" }}
        onSubmit={values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (

            <View style={styles.V1}>

                <View style={styles.V2}>
                    <View style={styles.authView}>
                        <Text style={styles.authText}>Doctor's Login:</Text>
                    </View>
                    <Text style={styles.InputLable}>Username </Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange('user')}
                        onBlur={handleBlur('user')}
                        value={values.pnumber}
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
                        placeholder=" Enter your password"

                    />
                </View>




                <View style={styles.submitBtn}>

                    <Pressable style={styles.Btn} onPress={() => navigation.navigate("PatientLogin")} >
                        <Text style={styles.text}>Login</Text>
                    </Pressable>
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
    },
    authText: {
        justifyContent: "flex-start",
        fontSize: 20,

        fontWeight: "100"

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

export default Login;