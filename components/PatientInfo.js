// Formik x React Native example
import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';

//import Header from './Header';
import * as Yup from "yup"
import { BASE_URL } from '../constants/utils'
export const PatientInfo = ({ navigation }) => {

    const validationSchema = Yup.object().shape({
        fname: Yup.string()
            // .min(16, 'UHID should be of 16 digit!')
            // .max(16, 'UHID should be of 16 digit!')
            .required('Required'),

        sname: Yup.string()
            //     .min(2, 'Too Short!')
            //     .max(50, 'Too Long!')
            .required('Required'),
        uhid: Yup.string()
            .min(16, 'UHID should be of 16 digit!')
            .max(16, 'UHID should be of 16 digit!')
            .required('Required'),
        pnumber: Yup.string()
            .min(10, 'Enter 10 digit phone number')
            .max(15, 'invalid Phone number'),
        email: Yup.string().email('Invalid email').required('Required'),
        age: Yup.number("Enter Number").required('Required'),
        gender: Yup.string()
            .required('Required'),
        Height: Yup.number("Height should be a number").required('Required'),
        Weight: Yup.number("Height should be a number").required('Required'),
        Smoking: Yup.string().required('Required'),
        Chest: Yup.string().required('Required'),
        docId: Yup.string().required('Required'),
        hospital: Yup.string().required('Required')

    });

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

    const handleSubmit = async (values) => {


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        return await fetch(BASE_URL + "/patients/register", requestOptions)
            // return await fetch(`https://olive-worms-hunt-117-99-229-47.loca.lt/users/register`, requestOptions)
            .then(handleResponse)
            .then(() => navigation.navigate("PostRegistration"));

        // if (!post) return "No post!"
    }
    return (
        < Formik
            initialValues={{ fname: "", sname: "", uhid: "", pnumber: "", email: "", age: "", gender: "", Height: "", Weight: "", Smoking: "", Chest: "", docId: "", hospital: "", filelocation: "" }}
            onSubmit={handleSubmit}
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
                                selectedValue={values.gender}
                                value={values.gender}
                            >
                                <Picker.Item label="Not Selected" />
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                                <Picker.Item label="Transgender" value="Transgender" />


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
                                selectedValue={values.Smoking}
                                value={values.Smoking}

                            >
                                <Picker.Item label="Not Selected" />
                                <Picker.Item label="Yes/mild smoker(1 or less daily)" value="Yes/mild smoker(1 or less daily)" />
                                <Picker.Item label="Yes/Reguler smoker(2 or more daily)" value="Yes/Reguler smoker(2 or more daily)" />
                                <Picker.Item label="No" value="No" />


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
                                selectedValue={values.Chest}
                                value={values.Chest}
                            >
                                <Picker.Item label="Not Selected" />
                                <Picker.Item label="Yes" value="Yes" />
                                <Picker.Item label="No" value="No" />


                            </Picker>
                            {errors.Chest && touched.Chest ? (
                                <Text style={styles.errText}>{errors.Chest}</Text>
                            ) : null}
                        </View>

                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Doctor ID</Text>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange("docId")}
                                onBlur={handleBlur('docId')}
                                value={values.docId}
                                placeholder=" Enter doctorId"

                            />
                            {errors.docId && touched.docId ? (
                                <Text style={styles.errText}>{errors.docId}</Text>
                            ) : null}
                        </View>
                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Hospital</Text>
                            <Picker
                                style={styles.PickerBox}
                                onValueChange={handleChange("hospital")}
                                selectedValue={values.hospital}
                                value={values.hospital}
                            // mode="dropdown"
                            >
                                <Picker.Item label="NOT SELECTED" />
                                <Picker.Item label="AIIMS BHUBNESWAR" value="AIIMS BHUBNESWAR" />
                                <Picker.Item label="AIIMS PATNA" value="AIIMS PATNA" />
                                <Picker.Item label="AIIMS NEW DELHI" value="AIIMS NEW DELHI" />



                            </Picker>
                            {errors.hospital && touched.hospital ? (
                                <Text style={styles.errText}>{errors.hospital}</Text>
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
                            ]} onPress={handleSubmit} >
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
        height: 60,
        backgroundColor: "#ffffff",
        padding: 20,
        fontWeight: "500"

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