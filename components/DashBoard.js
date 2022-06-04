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
        name: 'Test 1 - Date:17/03/2021',

        background: '#3498db',

        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
    {
        name: 'Test 2 - Date:25/04/2021',
        background: '#3498db',

        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
    {
        name: 'Test 3 - Date:29/12/2021',
        background: '#3498db',

        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
    {
        name: 'Test 4 - Date:12/03/2022',
        background: '#3498db',

        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
    {
        name: 'Test 5 - Date:16/04/2022',
        background: '#3498db',

        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
    {
        name: 'Test 6 - Date:28/05/2022',
        background: '#3498db',

        iconColor: '#0d47a1',
        rippleColor: '#000',
    },
];

const DashBoard = ({ navigation }) => {
    const card = ({ name }) => console.log('Card: ' + name);
    return (
        <View>
            <View style={styles.welcomemsgview}>
                <Text style={styles.welcomemsg}>
                    User
                </Text>
            </View>

            {/* <Button onPress={() => navigation.navigate("Testing")} title="NEW TEST" /> */}
            <Pressable style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? '#5a6373'
                        : 'black'
                },
                styles.Btn
            ]} onPress={() => navigation.navigate("Testing")} >
                <Text style={styles.text}>NEW TEST</Text>
            </Pressable>
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

export default DashBoard;