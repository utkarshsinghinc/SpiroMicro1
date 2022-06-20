import { Formik } from "formik";
import React from "react";
import { Text, View, StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native";

const UpdateDoctor = () => {

    async function update(user) {
        const requestOptions = {
            method: 'PUT',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        const response = await fetch(BASE_URL + `/doctors/${user.id}`, requestOptions);
        return handleResponse(response);;
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
            initialValues={{ item: "" }}
            onSubmit={update}
        >
            {({ handleChange, handleBlur, handleSubmit, values, error }) => (

                <View style={styles.V1}>


                    <Text style={styles.InputLable}>{route.params.title} </Text>
                    <TextInput
                        style={styles.InputBox}
                        onChangeText={handleChange('item')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder=" Enter your Email ID"

                    />







                    <View style={styles.submitBtn}>

                        <Pressable style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? '#5a6373'
                                    : 'black'
                            },
                            styles.Btn
                        ]} onPress={update} >
                            <Text style={styles.text}>Login</Text>
                        </Pressable>

                    </View>


                </View>
            )
            }
        </Formik >
    )
}

const styles = StyleSheet.create({

})

export default UpdateDoctor;

