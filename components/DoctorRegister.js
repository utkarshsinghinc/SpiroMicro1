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
// import useDispatch from "react-redux"
// import { userActions } from "../src/_actions"
//const PatientAge = [{ id: "age", min: 0, max: 120 }];
import axios from 'axios';


import * as Yup from "yup"
// const validationSchema = Yup.object({
//     fname: Yup.string().trim().min(3, "Invalid name!").required('FIRST NAME IS REQUIRED!'),
//     sname: Yup.string().trim().required('SURNAME NAME IS REQUIRED!'),
//     email: Yup.string().email("Invalid email").required('EMAIL IS REQUIRED!'),
//     password: Yup.string().trim().min(8, "Password is too short!").required("PASSWORD IS REQUIRED!"),

// })
const baseURL = "http://localhost:4000/users/register";
export const DoctorRegister = ({ navigation }) => {

    const validationSchema = Yup.object().shape({
        fname: Yup.string()
            .required('Required'),
        sname: Yup.string()
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(6, 'Password should be of min 6 character!')
            .required('Required'),
        hospital: Yup.string()
            .required('Required'),

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

        // const [post, setPost] = React.useState(null);

        //  React.useEffect(() => {
        //   axios.get(`${baseURL}/1`).then((response) => {
        //     setPost(response.data);
        //   });
        // }, []);


        // axios
        //     .post(baseURL,
        //         JSON.stringify(values)
        //     )
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        return await fetch(`http://localhost:4000/users/register`, requestOptions)
            // return await fetch(`https://olive-worms-hunt-117-99-229-47.loca.lt/users/register`, requestOptions)
            .then(handleResponse)
            .then(() => navigation.navigate("SuccessDoctorReg"));

        // if (!post) return "No post!"
    }

    return (
        < Formik
            initialValues={{ fname: '', sname: "", email: "", password: "", hospital: '' }}
            //onSubmit={values => console.log(values)}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}

        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <ScrollView>
                    {/* <ImageBackground style={{ flex: 1, resizeMode: 'cover' }} source={require("../assets/back.png")}> */}
                    <SafeAreaView style={styles.V1}>


                        <View style={styles.V2}>

                            <View style={styles.authView}>
                                <Text style={styles.authText}>Doctor's Registration:</Text>
                            </View>
                            <View style={styles.Verr}>
                                <Text style={styles.InputLable}>Doctor's First Name</Text>
                                {/* {errors ? (
                                    <Text style={styles.terr}>{errors}</Text>
                                ) : null

                                } */}
                            </View>
                            <TextInput
                                style={styles.InputBox}
                                // errors={touched.fname && errors.fname}
                                onChangeText={handleChange('fname')}
                                onBlur={handleBlur('fname')}
                                value={values.fname}
                                placeholder=" Enter Doctor's Name"
                            //  placeholderTextColor={"#000000"}


                            />
                            {errors.fname && touched.fname ? (
                                <Text style={styles.errText}>{errors.fname}</Text>
                            ) : null}
                        </View>
                        <View style={styles.V2}>

                            <View style={styles.Verr}>
                                <Text style={styles.InputLable}>Doctor's Surname</Text>
                                {/* {errors ? (
                                    <Text style={styles.terr}>{errors}</Text>
                                ) : null

                                } */}
                            </View>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('sname')}
                                // errors={touched.sname && errors.sname}
                                onBlur={handleBlur('sname')}
                                value={values.sname}
                                placeholder=" Enter Doctor's Surname"
                            // placeholderTextColor={"#000000"}

                            />
                            {errors.sname && touched.sname ? (
                                <Text style={styles.errText}>{errors.sname}</Text>
                            ) : null}
                        </View>


                        <View style={styles.V2}>

                            <View style={styles.Verr}>
                                <Text style={styles.InputLable}>Doctor's email/Username</Text>
                                {/* {errors ? (
                                    <Text style={styles.terr}>{errors}</Text>
                                ) : null

                                } */}
                            </View>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('email')}
                                // errors={touched.email && errors.email}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder=" Enter Doctor's email"
                            // placeholderTextColor={"#000000"}
                            />
                            {errors.email && touched.email ? (
                                <Text style={styles.errText}>{errors.email}</Text>
                            ) : null}
                        </View>

                        <View style={styles.V2}>

                            <View style={styles.Verr}>
                                <Text style={styles.InputLable}>Password</Text>
                                {/* {errors ? (
                                    <Text style={{ color: 'red, fontSize:16' }}>{errors}</Text>
                                ) : null

                                } */}
                            </View>
                            <TextInput
                                style={styles.InputBox}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                // errors={touched.password && errors.password}
                                value={values.password}
                                secureTextEntry
                                placeholder=" Enter Doctor's password"
                            // placeholderTextColor={"#000000"}

                            />
                            {errors.password && touched.password ? (
                                <Text style={styles.errText}>{errors.password}</Text>
                            ) : null}
                        </View>



                        <View style={styles.V2}>
                            <Text style={styles.InputLable}>Hospital</Text>
                            <Picker
                                style={styles.PickerBox}
                                onValueChange={handleChange("hospital")}
                                selectedValue={values.hospital}
                                value={values.hospital}
                                mode="dropdown"
                            >
                                <Picker.Item label="NOT SELECTED" value="NO" />
                                <Picker.Item label="AIIMS BHUBNESWAR" value="AIIMS BHUBNESWAR" />
                                <Picker.Item label="AIIMS PATNA" value="AIIMS PATNA" />
                                <Picker.Item label="AIIMS NEW DELHI" value="AIIMS NEW DELHI" />



                            </Picker>
                            {errors.hospital && touched.hospital ? (
                                <Text style={styles.errText}>{errors.hospital}</Text>
                            ) : null}
                            {/* <TextInput
                                    style={styles.InputBox}
                                    onChangeText={handleChange('hospital')}
                                    onBlur={handleBlur('hospital')}
                                    // errors={touched.password && errors.password}
                                    value={values.hospital}

                                    placeholder=" Enter Doctor's password"

                                /> */}

                        </View>











                        <View style={styles.submitBtn}>


                            {/* <Pressable style={styles.Btn} onPress={() => navigation.navigate("SuccessDoctorReg")} >
                                <Text style={styles.text}>Register Doctor</Text>
                            </Pressable> */}
                            <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? '#5a6373'
                                        : 'black'
                                },
                                styles.Btn
                            ]} onPress={handleSubmit} >
                                <Text style={styles.text}>Register Doctor</Text>
                            </Pressable>

                        </View>




                    </SafeAreaView>
                    {/* </ImageBackground> */}
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
        //backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    Verr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5

    },
    terr: {
        color: 'red',
        fontSize: 16
    },
    errText: {
        color: "#f50505",

    }

})

export default DoctorRegister;