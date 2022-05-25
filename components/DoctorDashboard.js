import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Dashboard from '../nodepkg/react-native-dashboard/Dashboard';
import { FontAwesome } from 'react-native-vector-icons';

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
    const card = ({ name }) => console.log('Card: ' + name);
    return (
        <View>

            <Dashboard
                data={data}
                card={card}
                column={1}
                rippleColor={'#3498db'}
            />
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
