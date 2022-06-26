import { Formik } from "formik";
import React from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native"
import { useRoute } from "@react-navigation/native";
import { AsyncStorage } from 'react-native';
import { BASE_URL } from "../constants/utils";
const PasswordUpdate = () => {

    async function update(params) {
        const password = params.password;
        // const id = params.id
        // const ID=JSON.stringify(id);
        const post = {
            password: password
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        };
        const response = await fetch(BASE_URL + `/doctors/` + 2, requestOptions);

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
            initialValues={{ password: "" }}
            onSubmit={update}
        >
            {({ handleChange, handleBlur, handleSubmit, values, error }) => (

                <View style={styles.V1}>


                    <View style={styles.V2}>
                        <Text style={styles.InputLable}>Password </Text>
                        <TextInput
                            style={styles.InputBox}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder=" Enter your new password"

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
                        ]} onPress={update(values)} >
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

export default PasswordUpdate;