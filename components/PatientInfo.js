// Formik x React Native example
import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';

import Header from './Header';
import * as Yup from "yup"

export const PatientInfo = ({ navigation }) => {

    const validationSchema = Yup.object().shape({
        fname: Yup.string()
            // .min(16, 'UHID should be of 16 digit!')
            // .max(16, 'UHID should be of 16 digit!')
            .required('Required'),

        lastName: Yup.string()
            //     .min(2, 'Too Short!')
            //     .max(50, 'Too Long!')
            .required('Required'),
        uhid: Yup.string()
            .min(16, 'UHID should be of 16 digit!')
            .max(16, 'UHID should be of 16 digit!')
            .required('Required'),
        pnumber: Yup.number(10, "Enter Number").positive("Enter Positive Number").integer()
            .min(10, 'Enter 10 digit phone number')
            .max(10, 'Enter 10 digit phone number'),
        email: Yup.string().email('Invalid email').required('Required'),
        age: Yup.number("Enter Number").positive().integer().required('Required'),
        gender: Yup.string()
            .required('Required'),
        Height: Yup.number("Height should be a number").positive().integer().required('Required'),
        Weight: Yup.number("Height should be a number").positive().integer().required('Required'),
        Smoking: Yup.string().required('Required'),
        Chest: Yup.string().required('Required')

    });
    return (
        < Formik
            initialValues={{ fname: '', sname: "", uhid: "", pnumber: "", email: "", age: '', gender: '', Height: '', Weight: '', Smoking: '', Chest: "" }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <ScrollView>
                    <SafeAreaView style={styles.V1}>




                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>First Name</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('fname')}
                                onBlur={handleBlur('fname')}
                                value={values.fname}
                                placeholder=" Enter patient's Name"

                            />
                            {errors.fname && touched.fname ? (
                                <Text style={styles.errText}>{errors.fname}</Text>
                            ) : null}
                        </View>
                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Surname</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('sname')}
                                onBlur={handleBlur('sname')}
                                value={values.sname}
                                placeholder=" Enter patient's Surname"

                            />
                            {errors.sname && touched.sname ? (
                                <Text style={styles.errText}>{errors.sname}</Text>
                            ) : null}
                        </View>
                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>UHID</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('uhid')}
                                onBlur={handleBlur('uhid')}
                                value={values.uhid}
                                placeholder=" Enter patient's UHID"
                                maxLength={16}

                            />
                            {errors.uhid && touched.uhid ? (
                                <Text style={styles.errText}>{errors.uhid}</Text>
                            ) : null}
                        </View>


                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Phone Number</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('pnumber')}
                                onBlur={handleBlur('pnumber')}
                                value={values.pnumber}
                                placeholder=" Enter patient's 10-digit Phone Number"
                                keyboardType="numeric"
                                textContentType="telephoneNumber"
                            />
                            {errors.pnumber && touched.pnumber ? (
                                <Text style={styles.errText}>{errors.pnumber}</Text >
                            ) : null}
                        </View>
                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Email</Text>
                            <TextInput

                                style={styles.InputBox}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder=" Enter patient's email"
                                textContentType="emailAddress"
                            />
                            {errors.email && touched.email ? (
                                <Text style={styles.errText}>{errors.email}</Text>
                            ) : null}
                        </View>

                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Age (Year)</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('age')}
                                onBlur={handleBlur('age')}
                                value={values.age}
                                placeholder=" Enter patient's age"
                                keyboardType="numeric"

                                autoFocus={true}
                            />
                            {errors.age && touched.age ? (
                                <Text style={styles.errText}>{errors.age}</Text>
                            ) : null}
                        </View>

                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Gender</Text>
                            <Picker
                                style={styles.PickerBox}
                                onValueChange={handleChange("gender")}

                            >
                                <Picker.Item label="Not Selected" Value={values.gender} />
                                <Picker.Item label="Male" value={values.gender} />
                                <Picker.Item label="Female" value={values.gender} />
                                <Picker.Item label="Transgender" value={values.gender} />


                            </Picker>
                            {errors.gender && touched.gender ? (
                                <Text style={styles.errText}>{errors.gender}</Text>
                            ) : null}
                        </View>
                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Height</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange("Height")}
                                onBlur={handleBlur('Height')}
                                value={values.Height}
                                placeholder=" Enter patient's height (cm)"
                                keyboardType="numeric"
                            />
                            {errors.Height && touched.Height ? (
                                <Text style={styles.errText}>{errors.Height}</Text>
                            ) : null}
                        </View>

                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Body Weight</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange("Weight")}
                                onBlur={handleBlur('Weight')}
                                value={values.Weight}
                                placeholder=" Enter patient's Body Weight (Kg)"
                                keyboardType="numeric"
                            />
                            {errors.Weight && touched.Weight ? (
                                <Text style={styles.errText}>{errors.Weight}</Text>
                            ) : null}
                        </View>
                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Smoking Habits</Text>
                            <Picker
                                style={styles.PickerBox}
                                onValueChange={handleChange("Smoking")}

                            >
                                <Picker.Item label="Not Selected" value={values.Smoking} />
                                <Picker.Item label="Yes/mild smoker(1 or less daily)" value="0" />
                                <Picker.Item label="Yes/Reguler smoker(2 or more daily)" value="0" />
                                <Picker.Item label="No" value="1" />


                            </Picker>
                            {errors.Smoking && touched.Smoking ? (
                                <Text style={styles.errText}>{errors.Smoking}</Text>
                            ) : null}
                        </View>

                        <View style={styles.V2}>

                            <Text style={styles.InputLable}>Chest Complication</Text>
                            <Picker
                                style={styles.PickerBox}
                                onValueChange={handleChange("Chest")}
                            >
                                <Picker.Item label="Not Selected" value={values.Chest} />
                                <Picker.Item label="Yes" value={values.Chest} />
                                <Picker.Item label="No" value={values.Chest} />


                            </Picker>
                            {errors.Chest && touched.Chest ? (
                                <Text style={styles.errText}>{errors.Chest}</Text>
                            ) : null}
                        </View>




                        <View style={styles.submitBtn}>

                            <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? '#5a6373'
                                        : 'black'
                                },
                                styles.Btn
                            ]} onPress={() => navigation.navigate("PostRegistration")} >
                                <Text style={styles.text}>Register Patient</Text>
                            </Pressable>
                        </View>




                    </SafeAreaView>
                </ScrollView>
            )}
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
        height: 40,
        backgroundColor: "#ffffff",
        padding: 20

    },
    PickerBox: {
        borderWidth: 2,
        borderRadius: 20,
        height: 60,
        borderColor: "#000000",
        paddingLeft: 20



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
    errText: {
        color: "#f50505",

    }

})

export default PatientInfo;