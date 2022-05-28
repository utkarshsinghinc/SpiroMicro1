// Formik x React Native example
import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, ScrollView, SafeAreaView, ImageBackground, Pressable } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
//import NumberPlease from 'react-native-number-please';
//import { Login } from './Login';
//import Testing from './Testing';
//import player from './Wave';
import Header from './Header';

//const PatientAge = [{ id: "age", min: 0, max: 120 }];

export const DoctorRegister = ({ navigation }) => (

    // const handleSubmit = async () => {
    //     const user = {
    //       phone: phoneNumber,
    //       name: name,
    //       city: city,
    //       gender: gender,
    //       dob: date,
    //       referalCode: referalCode,
    //       isExistingCustomer: referalCode ? true : false,
    //     };

    //     if (referalCode) {
    //       axios
    //         .post(`${BASE_URL}/api/vendor/updateReferal`, {
    //           referalCode: referalCode,
    //         })
    //         .then(() => {})
    //         .catch((err) => {
    //           return alert(err.response.data.error);
    //         });
    //     }

    //     const result = await listingsApi.addUser(user);
    //     console.log(result);
    //     if (result.status == 401) {
    //       return alert("Phone number already registered!");
    //     } else if (!result.ok) {
    //       return alert("Some Error Occured!");
    //     } else {
    //       //async storage token and id
    //       const key = "user";
    //       const user = {
    //         id: result.data.id,
    //         token: result.data.token,
    //       };
    //       navigation.navigate("Login");
    //       return alert(phoneNumber + " Successfully Signed up!");
    //     }

    < Formik
        initialValues={{ fname: '', sname: "", email: "", password: "", age: '', hospital: '' }}
        onSubmit={values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <ScrollView>
                <ImageBackground source={require("../assets/back.png")}>
                    <SafeAreaView style={styles.V1}>


                        <View style={styles.V2}>

                            <View style={styles.authView}>
                                <Text style={styles.authText}>Doctor's Registration:</Text>
                            </View>
                            <Text style={styles.InputLable}>Doctor's First Name</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('fname')}
                                onBlur={handleBlur('fname')}
                                value={values.fname}
                                placeholder=" Enter Doctor's Name"

                            />
                        </View>
                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Doctor's Surname</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('sname')}
                                onBlur={handleBlur('sname')}
                                value={values.sname}
                                placeholder=" Enter Doctor's Surname"

                            />
                        </View>


                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Doctor's email/Username</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder=" Enter Doctor's email"
                            />
                        </View>

                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Password</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                placeholder=" Enter Doctor's password"

                            />
                        </View>



                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Hospital</Text>
                            <Picker
                                style={styles.InputBox}
                                onValueChange={handleChange("Hospital")}

                            >
                                <Picker.Item label="AIIMS BHUBNESWAR" Value={values.hospital} />
                                <Picker.Item label="AIIMS PATNA" value={values.hospital} />
                                <Picker.Item label="AIIMS NEW DELHI" value={values.hospital} />



                            </Picker>
                        </View>











                        <View style={styles.submitBtn}>


                            <Pressable style={styles.Btn} onPress={() => navigation.navigate("SuccessDoctorReg")} >
                                <Text style={styles.text}>Register Doctor</Text>
                            </Pressable>

                        </View>




                    </SafeAreaView>
                </ImageBackground>
            </ScrollView>
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
        marginLeft: 20

    },
    V2Row: {
        margin: 20,
        maxWidth: 200
    },
    text: {
        color: "blue"
    },
    authText: {
        justifyContent: "flex-start",
        fontSize: 20,

    },
    authView: {

        margin: 20

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

export default DoctorRegister;