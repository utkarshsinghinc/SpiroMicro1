import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
//import { Picker } from '@react-native-picker/picker';
//import NumberPlease from 'react-native-number-please';
//import player from './Wave';
//const PatientAge = [{ id: "age", min: 0, max: 120 }];
import Header from './Header';
import PatientDashboard from './PatientDashboard';

const PatientLogin = ({ navigation }) => (

    <SafeAreaView>

        < Formik
            initialValues={{ pnumber: "", password: "" }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (

                <View style={styles.V1}>
                    <Header />
                    <View style={styles.row2}>
                        <Text >Before Registration Search a Patient With UHID</Text>
                        {/* <Text style={styles.text} onPress={() => navigation.navigate("PatientInfo")}>  Register Patient</Text> */}
                    </View>

                    <View style={styles.V2}>
                        <Text style={styles.InputLable}>UHID</Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('uhid')}
                            onBlur={handleBlur('uhid')}
                            value={values.uhid}
                            placeholder=" Enter patient's UHID"

                        />
                    </View>




                    <View style={styles.submitBtn}>
                        <Button onPress={() => navigation.navigate("DashBoard")} title="Search" />
                    </View>
                    <View style={styles.submitBtn}>
                        <Button style={styles.text} onPress={() => navigation.navigate("PatientInfo")} title="Register New Patient" />
                    </View>

                </View>
            )}
        </Formik >

        <PatientDashboard />
    </SafeAreaView>

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
        fontFamily: "san-sarif",
        fontWeight: 10

    },
    authView: {

        marginBottom: 20

    }



})

export default PatientLogin;