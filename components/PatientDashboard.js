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
        name: "         NAME",

    },

    {
        UHID: 392389281,

        name: 'Devin',
        surname: "Dan"
    },
    {
        UHID: 392389281,
        name: 'Dan',
        surname: "Dan"
    },
    {
        UHID: 392389281,
        name: 'Dominic',
        surname: "Dan"
    },
    {
        UHID: 392389281,
        name: 'Jackson',
        surname: "Dan"
    },
    {
        UHID: 392389281,
        name: 'James',
        surname: "Dan"
    },
    {
        UHID: 392389281,
        name: 'Joel',
        surname: "Dan"
    },
    {
        UHID: 392389281,
        name: 'John',
        surname: "Dan"
    },
    {
        UHID: 392389281,
        name: 'Jillian',
        surname: "Dan"
    },
    {
        UHID: 392389281,
        name: 'Jimmy',
        surname: "Dan"
    },
    {
        UHID: 392389281,
        name: 'Julie',
        surname: "Dan"
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
