import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PatientInfo from './components/PatientInfo';
import Login from './components/Login';
import Testing from './components/Testing';
import AudioRecoder from './components/AudioRecoder';
import 'react-native-gesture-handler';
import DashBoard from "./components/DashBoard";
import StopWatch from './components/StopWatch';
import { DoctorRegister } from './components/DoctorRegister';
import HomePage from './components/HomePage';
import AdminLogin from './components/SysAdmin';
import PatientLogin from './components/PatientLogin';
import AddDoctor from './components/AddDoctor';
import PatientDashboard from './components/PatientDashboard';
import PostRegistration from './components/PostRegistration';
import DoctorDashboard from './components/DoctorDashboard';
import SuccessDoctorReg from './components/SuccessDoctorReg';
import Header from './components/Header';
//import AudioRecoder from './components/AudioRecorder';
//mport AudioPlay from './components/AudioPlay';
const Stack = createStackNavigator();
export default function App({ navigation }) {
  return (

    <NavigationContainer>

      <Header />

      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="PatientInfo" component={PatientInfo} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Testing" component={Testing} options={{ headerShown: false }} />
        {/* <Stack.Screen name="AudioRecorder" component={AudioRecoder} options={{ headerShown: false }} />
        <Stack.Screen name="AudioPlay" component={AudioPlay} options={{ headerShown: false }} /> */}
        <Stack.Screen name="AudioRecoder" component={AudioRecoder} options={{ headerShown: false }} />
        <Stack.Screen name="DashBoard" component={DashBoard} options={{ headerShown: false }} />
        <Stack.Screen name="StopWatch" component={StopWatch} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorRegister" component={DoctorRegister} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ headerShown: false }} />
        <Stack.Screen name="PatientLogin" component={PatientLogin} options={{ headerShown: false }} />
        <Stack.Screen name="AddDoctor" component={AddDoctor} options={{ headerShown: false }} />
        <Stack.Screen name="PatientDashboard" component={PatientDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="PostRegistration" component={PostRegistration} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorDashboard" component={DoctorDashboard} options={{ headerShown: false }} />
        <Stack.Screen name="SuccessDoctorReg" component={SuccessDoctorReg} options={{ headerShown: false }} />
        <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
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
