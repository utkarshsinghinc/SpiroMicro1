import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PatientInfo from './components/PatientInfo';
import Login from './components/Login';
import Testing from './components/Testing';
import AudioRecoder from './components/AudioRecoder';
import 'react-native-gesture-handler';
//import AudioRecoder from './components/AudioRecorder';
//mport AudioPlay from './components/AudioPlay';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="PatientInfo" component={PatientInfo} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Testing" component={Testing} options={{ headerShown: false }} />
        {/* <Stack.Screen name="AudioRecorder" component={AudioRecoder} options={{ headerShown: false }} />
        <Stack.Screen name="AudioPlay" component={AudioPlay} options={{ headerShown: false }} /> */}
        <Stack.Screen name="AudioRecoder" component={AudioRecoder} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
