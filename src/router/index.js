// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens are Imported  STARTS
import Spalsh from "../screens/onboarding/Spalsh"
import AccountType from "../screens/onboarding/AccountType"
import WelecomeScreen from "../screens/onboarding/WelecomScreen"
import Login from "../screens/onboarding/Login"
import Registration from "../screens/onboarding/Registration"
import OtpVerification from "../screens/onboarding/OTPVerfication"
import PasswordScreen from "../screens/onboarding/passwordscreen"
import ForgotPassword from "../screens/onboarding/ForgotPassword"
import OTPForgotPassword from "../screens/onboarding/OTPForgotpassword"
import NewPassword from "../screens/onboarding/NewPassword"

import DashboardTab from "../screens/dashboard/DashboardTab"
import HomeScreen from "../screens/dashboard/homeScreen/HomeScreen"
import ExploreScreen from "../screens/dashboard/explorescreen/Explore"
import MainUpload from "../screens/dashboard/mainuploadPost/MainPost"
import ReelsScreen from "../screens/dashboard/Reels/Reels"
import Notification from "../screens/dashboard/Notification/notification"
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
         <Stack.Screen name='Splash' component={Spalsh}/>
         <Stack.Screen name="AccountType" component={AccountType}/>
         <Stack.Screen name="WelecomeScreen" component={WelecomeScreen}/>
         <Stack.Screen name= "Login" component={Login}/>
         <Stack.Screen name="Registartion" component={Registration}/>
         <Stack.Screen name="OtpVerfication" component={OtpVerification}/>
         <Stack.Screen name="PasswordScreen" component={PasswordScreen}/>
         <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
         <Stack.Screen name="OTPForgotPassword" component={OTPForgotPassword}/>
         <Stack.Screen name="NewPassword" component={NewPassword}/>
         <Stack.Screen name='DashboardTab' component={DashboardTab}/>
         <Stack.Screen name="HomeScreen" component={HomeScreen}/>
         <Stack.Screen name="ExploreScreen" component={ExploreScreen}/>
         <Stack.Screen name='MainUpload' component={MainUpload}/>
         <Stack.Screen name="ReelsScreen" component={ReelsScreen}/>
         <Stack.Screen name="Notification" component={Notification}/>
  </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;