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
        UHID: "  UHID",
        name: "         NAME"
    },

    {
        UHID: 392389281,

        name: 'Devin'
    },
    {
        UHID: 392389281,
        name: 'Dan'
    },
    {
        UHID: 392389281,
        name: 'Dominic'
    },
    {
        UHID: 392389281,
        name: 'Jackson'
    },
    {
        UHID: 392389281,
        name: 'James'
    },
    {
        UHID: 392389281,
        name: 'Joel'
    },
    {
        UHID: 392389281,
        name: 'John'
    },
    {
        UHID: 392389281,
        name: 'Jillian'
    },
    {
        UHID: 392389281,
        name: 'Jimmy'
    },
    {
        UHID: 392389281,
        name: 'Julie'
    },

];

const PatientDashBoard = ({ navigation }) => {
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

export default PatientDashBoard;
