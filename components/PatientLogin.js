import React, { useEffect } from 'react';
import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, Pressable, FlatList, TouchableHighlight } from 'react-native';
import { Formik } from 'formik';
//import { Picker } from '@react-native-picker/picker';
//import NumberPlease from 'react-native-number-please';
//import player from './Wave';
//const PatientAge = [{ id: "age", min: 0, max: 120 }];
import Header from './Header';
import PatientDashboard from './PatientDashboard';
import * as Yup from 'yup';
import DashB from './DashB';
import Home from './Home';
//import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
const PatientLogin = ({ navigation }) => {



    const validationSchema = Yup.object().shape({
        uhid: Yup.string()
            .min(16, 'UHID should be of 16 digit!')
            .max(16, 'UHID should be of 16 digit!')
            .required('Required'),
        // lastName: Yup.string()
        //     .min(2, 'Too Short!')
        //     .max(50, 'Too Long!')
        //     .required('Required'),
        // email: Yup.string().email('Invalid email').required('Required'),
    });









    return (
        <ScrollView>
            <SafeAreaView>

                < Formik
                    initialValues={{ pnumber: "", password: "" }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, patients, handleDeleteUser, values, errors, touched }) => (

                        <View style={styles.V1}>

                            <View style={styles.submitBtn}>

                                <Pressable style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed
                                            ? '#5a6373'
                                            : 'black'
                                    },
                                    styles.Btn
                                ]} onPress={() => navigation.navigate("PatientInfo")} >
                                    <Text style={styles.text}>Register New Patient </Text>
                                </Pressable>
                            </View>

                            <View style={styles.row2}>
                                <Text >Before Registration Search a Patient With UHID</Text>
                                {/* <Text style={styles.text} onPress={() => navigation.navigate("PatientInfo")}>  Register Patient</Text> */}
                            </View>

                            {/* <View style={styles.V2}>
                                <Text style={styles.InputLable}>UHID</Text>
                                <TextInput
                                    style={styles.InputBox}
                                    onChangeText={handleChange('uhid')}
                                    onBlur={handleBlur('uhid')}
                                    value={values.uhid}
                                    placeholder=" Enter patient's UHID"

                                />
                                {errors.uhid && touched.uhid ? (
                                    <View>{errors.uhid}</View>
                                ) : null}
                            </View> */}
                            <Home />




                            {/* <View style={styles.submitBtn}>

                                <Pressable style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed
                                            ? '#5a6373'
                                            : 'black'
                                    },
                                    styles.Btn
                                ]} onPress={() => navigation.navigate("DashBoard")} >
                                    <Text style={styles.text}>Search</Text>
                                </Pressable>

                            </View> */}


                        </View>
                    )}
                </Formik >

                {/* <PatientDashboard /> */}
                <DashB />

            </SafeAreaView>
        </ScrollView>

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
        padding: 20

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
        fontFamily: "san-sarif",
        fontWeight: 10

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
        //backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }



})

export default PatientLogin;