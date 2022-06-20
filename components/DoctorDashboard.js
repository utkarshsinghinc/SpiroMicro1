import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Dashboard from '../nodepkg/react-native-dashboard/Dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import { BASE_URL } from "../constants/utils"
const Icon = ({ icon, item, background }) => (
    <FontAwesome
        name={icon}
        size={40}
        color={
            item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
        }
        style={item.styleIcon}
    />
);

//const [clicked, setClicked] = useState(false);


const data = [
    {
        UHID: "  ID",
        name: "        DOCTOR'S NAME"
    },

    {
        UHID: 392389281,

        name: 'Dr.Devin'
    },
    {
        UHID: 392389281,
        name: 'Dr.Dan'
    },
    {
        UHID: 392389281,
        name: 'Dr.Dominic'
    },
    {
        UHID: 392389281,
        name: 'Dr.Jackson'
    },
    {
        UHID: 392389281,
        name: 'Dr.James'
    },
    {
        UHID: 392389281,
        name: 'Dr.Joel'
    },
    {
        UHID: 392389281,
        name: 'Dr.John'
    },
    {
        UHID: 392389281,
        name: 'Dr.Jillian'
    },
    {
        UHID: 392389281,
        name: 'Dr.Jimmy'
    },
    {
        UHID: 392389281,
        name: 'Dr.Julie'
    },

];

const DoctorDashboard = ({ navigation }) => {
    const [fakeData, setFakeData] = useState();

    // get data from the fake api endpoint
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                BASE_URL + "/doctors/"
            );
            const data = await apiResponse.json();
            setFakeData(data);
        };
        getData();
    }, []);
    const card = ({ fname }) => console.log('Card: ' + fname);

    return (
        <View>

            <Dashboard
                data={fakeData}
                card={card}
                column={1}
                rippleColor={'#3498db'}
            />

            <Text>{f.fname}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#ecf0f1',
    },
    welcomemsg: {
        fontSize: 20,

    },
    welcomemsgview: {
        margin: 20
    }
});

export default DoctorDashboard;
