import { Formik } from "formik";
import React from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native"
import { useRoute } from "@react-navigation/native";
import { AsyncStorage } from 'react-native';
import { stringify, toJSON, fromJSON } from 'flatted';
import { BASE_URL } from "../constants/utils";


const EmailUpdate = () => {

    const update = async (values) => {


        const requestOptions = {
            method: 'PUT',
            // headers: { 'Content-Type': 'application/json' },
            body: stringify(values)
        };
        const response = await fetch(BASE_URL + `/doctors/7`, requestOptions);

        return handleResponse(response);
    }

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
    const route = useRoute();
    return (
        < Formik
            initialValues={{ email: "", id: "" }}
            onSubmit={update}

        >
            {({ handleChange, handleBlur, handleSubmit, values, error }) => (

                <View style={styles.V1}>


                    <View style={styles.V2}>
                        <Text style={styles.InputLable}>Email </Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder=" Enter your Email ID"

                        />
                    </View>
                    {/* <View style={styles.V2}>
                        <Text style={styles.InputLable}>Doctor E.C </Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('id')}
                            onBlur={handleBlur('id')}
                            value={values.id}
                            placeholder=" Enter your ID"

                        />
                    </View> */}







                    <View style={styles.submitBtn}>

                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? '#5a6373'
                                    : 'black'
                            },
                            styles.Btn
                        ]} onPress={update} >
                            <Text style={styles.text}>Update</Text>
                        </Pressable>

                    </View>


                </View>
            )
            }
        </Formik >
    )
}

const styles = StyleSheet.create({
    InputBox: {

        borderWidth: 2,
        borderRadius: 20,
        height: 60,
        backgroundColor: "#ffffff",
        padding: 20,
        fontWeight: "500"

    },
    InputLable: {
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 10

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
    submitBtn: {
        margin: 20,
        marginLeft: 50,
        marginRight: 50,
        widht: 50,
        height: 50,
        borderRadius: 5

    },
    V2: {
        margin: 20
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

})

export default EmailUpdate;