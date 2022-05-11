// Formik x React Native example
import React from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import NumberPlease from 'react-native-number-please';
//import player from './Wave';

const PatientAge = [{ id: "age", min: 0, max: 120 }];

export const PatientInfo = navigation => (



    < Formik
        initialValues={{ fname: '', sname: "", age: '', gender: '', Height: '', Weight: '', Smoking: '', Chest: '' }}
        onSubmit={values => console.log(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.V1}>
                <View style={styles.V2}>
                    <Text style={styles.InputLable}>First Name</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange('fname')}
                        onBlur={handleBlur('fname')}
                        value={values.fname}
                        placeholder="Enter your Name"

                    />
                </View>
                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Surname</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange('sname')}
                        onBlur={handleBlur('sname')}
                        value={values.sname}
                        placeholder="Enter your Surname"

                    />
                </View>

                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Phone Number</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange('pnumber')}
                        onBlur={handleBlur('pnumber')}
                        value={values.pnumber}
                        placeholder="Enter your 10-digit Phone Number"

                    />
                </View>

                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Age</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange('age')}
                        onBlur={handleBlur('age')}
                        value={values.age}
                        placeholder="Enter your age"
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
                        placeholder="Enter your height (cm)"
                    />
                </View>
                <View style={styles.V2}>
                    <Text style={styles.InputLable}>Body Weight</Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange("Weight")}
                        onBlur={handleBlur('Weight')}
                        value={values.Weight}
                        placeholder="Enter your Body Weight (Kg)"
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
                        onValueChange={handleChange("Chest Complications")}

                    >
                        <Picker.Item label="Not Selected" value={values.Chest} />

                        <Picker.Item label="Yes" value="0" />

                        <Picker.Item label="No" value="1" />


                    </Picker>
                </View>








                <View style={styles.submitBtn}>
                    <Button onPress={handleSubmit} title="Register" />
                </View>
            </View>
        )}
    </Formik >
);


const styles = StyleSheet.create({
    InputLable: {
        fontFamily: "Roboto",
        fontSize: "15px",
        fontWeight: "bold",
        marginBottom: "10px"

    },
    V1: {
        margin: "15px"
    },
    V2: {
        margin: "20px"
    },
    submitBtn: {
        margin: "20px",
        marginLeft: "50px",
        marginRight: "50px",
        widht: "50px",
        height: "50px",
        borderRadius: "5px"

    },
    InputBox: {
        borderWidth: "2px",
        borderRadius: "5px"
    }
})

export default PatientInfo;