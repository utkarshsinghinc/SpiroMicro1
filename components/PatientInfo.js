// Formik x React Native example
import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
//import NumberPlease from 'react-native-number-please';
//import { Login } from './Login';
//import Testing from './Testing';
//import player from './Wave';
import Header from './Header';

//const PatientAge = [{ id: "age", min: 0, max: 120 }];

export const PatientInfo = ({ navigation }) => (

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
        initialValues={{ fname: '', sname: "", pnumber: "", password: "", age: '', gender: '', Height: '', Weight: '', Smoking: '', Chest: "" }}
        onSubmit={values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <ScrollView style={styles.V1}>
                <Header />
                <View style={styles.row}>
                    <View style={styles.V2Row}>
                        <Text style={styles.InputLable}>First Name</Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('fname')}
                            onBlur={handleBlur('fname')}
                            value={values.fname}
                            placeholder=" Enter your Name"

                        />
                    </View>
                    <View style={styles.V2Row}>
                        <Text style={styles.InputLable}>Surname</Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('sname')}
                            onBlur={handleBlur('sname')}
                            value={values.sname}
                            placeholder=" Enter your Surname"

                        />
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.V2Row}>
                        <Text style={styles.InputLable}>Phone Number</Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('pnumber')}
                            onBlur={handleBlur('pnumber')}
                            value={values.pnumber}
                            placeholder=" Enter your 10-digit Phone Number"
                        />
                    </View>
                    <View style={styles.V2Row}>
                        <Text style={styles.InputLable}>Password</Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder=" Enter your password"

                        />
                    </View>
                </View>

                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Age</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                        placeholder=" Enter your age"
                    />
                </View>
                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Gender</Text>
                    <Picker
                        style={styles.InputBox}
                        onValueChange={handleChange("gender")}

                    >
                        <Picker.Item label="Not Selected" Value={values.gender} />
                        <Picker.Item label="Male" value={values.gender} />
                        <Picker.Item label="Female" value={values.gender} />
                        <Picker.Item label="Transgender" value={values.gender} />


                    </Picker>
                </View>
                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Height</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange("Height")}
                        onBlur={handleBlur('Height')}
                        value={values.Height}
                        placeholder=" Enter your height (cm)"
                    />
                </View>

                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Body Weight</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange("Weight")}
                        onBlur={handleBlur('Weight')}
                        value={values.Weight}
                        placeholder=" Enter your Body Weight (Kg)"
                    />
                </View>
                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Smoking Habits</Text>
                    <Picker
                        style={styles.InputBox}
                        onValueChange={handleChange("Smoking")}

                    >
                        <Picker.Item label="Not Selected" value={values.Smoking} />
                        <Picker.Item label="Yes/mild smoker(1 or less daily)" value="0" />
                        <Picker.Item label="Yes/Reguler smoker(2 or more daily)" value="0" />
                        <Picker.Item label="No" value="1" />


                    </Picker>
                </View>

                <View style={styles.V2}>

                    <Text style={styles.InputLable}>Chest Complication</Text>
                    <Picker
                        style={styles.InputBox}
                        onValueChange={handleChange("Chest")}
                    >
                        <Picker.Item label="Not Selected" value={values.Chest} />
                        <Picker.Item label="Yes" value={values.Chest} />
                        <Picker.Item label="No" value={values.Chest} />


                    </Picker>
                </View>




                <View style={styles.submitBtn}>
                    <Button onPress={() => navigation.navigate("Testing")} title="Register" />
                </View>

                <View style={styles.row2}>
                    <Text >Already Register?</Text>
                    <Text style={styles.text} onPress={() => navigation.navigate("Login")}>  Login</Text>
                </View>


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
        width: "40%"
    },
    text: {
        color: "blue"
    }

})

export default PatientInfo;