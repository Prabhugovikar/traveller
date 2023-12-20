import React, { useEffect, useState } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';



import HomeScreen from "../dashboard/homeScreen/HomeScreen"
import ExploreScreen from "../dashboard/explorescreen/Explore"
import MainUpload from "../dashboard/mainuploadPost/MainPost"
import ReelsScreen from "../dashboard/Reels/Reels"
import Notification from "../dashboard/Notification/notification"

const Tab = createBottomTabNavigator();
const HOME_ICON_FOCUSED = require('../../assetes/HomeIcon.png');
const HOME_ICON = require('../../assetes/noncolorHome.png');
const Explore_icon = require('../../assetes/noncolorExplore.png');
const Explore_icon_focused = require('../../assetes/Explore.png');
const Plus_icon = require("../../assetes/Plus.png")
const Surface_Icon = require("../../assetes/Surface.png")
const Reels_Icon_focused = require("../../assetes/Reels.png")
const Reels_Icon = require("../../assetes/noncolorReels.png")
const Notification_focused = require("../../assetes/Notification.png")
const Notification_Icon = require("../../assetes/noncolorNotification.png")

const Tabs = ({ navigation, route }) => {


    return (

        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenListeners={({ navigation }) => ({
                    state: e => {
                    // tabChangeEvent(e.data);
                    if (!navigation.canGoBack()) {
                        // console.log("we're on the initial screen");
                    }
                    },
                })}
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: false, 
                    tabBarShowLabel: false,
                    tabBarStyle: {
                    borderTopRightRadius:20,
                    borderTopLeftRadius:20,
                    flexShrink: 0,
                    height: 75,
                    width: '100%',
                    backgroundColor: "#FFFFFF",
                    ...Platform.select({
                      ios: {
                        shadowColor: 'rgba(138, 149, 158, 0.20)',
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 1,
                        shadowRadius: 30,
                      },
                      android: {
                        elevation: 30,
                      },
                    }),
                    },
                    tabBarShowLabel:false

                    
                }}>

                <Tab.Screen
                    name="HomeScreen"
                    options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                       
                      
                        <>
                        <Image
                            source={HOME_ICON_FOCUSED}
                            style={[styles.tabIcon, focused]}
                            resizeMode="contain"
                        />

                        </>
                        ) : (

                        <Image
                            source={HOME_ICON}
                            style={[styles.tabIcon, focused && styles.profileIconSelected]}
                            resizeMode="contain"
                        />
                       
                        )
                    ),
                    tabBarLabel: 'Home',
                    }}
                >
                    {() => <HomeScreen/>}
                </Tab.Screen>

                <Tab.Screen
                    name="ExploreScreen"
                    options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                        <>
                            <Image
                            source={Explore_icon_focused}
                            style={[styles.tabIcon, focused]}
                            resizeMode="contain"
                            />
                        
                        </>
                        ) : (
                        <Image
                            source={Explore_icon}
                            style={[styles.tabIcon, focused && styles.profileIconSelected]}
                            resizeMode="contain"
                        />
                        )
                    ),
                    tabBarLabel: 'Your Profile',
                    // tabBarOnPress: handleTabPress,
                    }}
                >
                    {() => <ExploreScreen/>}
                </Tab.Screen>

                <Tab.Screen
                    name="MainUpload"
                    options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                       
                        <>
                         <ImageBackground source={Surface_Icon} style={{width:60,height:60,justifyContent:'center',alignItems:'center',marginBottom:50}}>
                            <Image
                            source={Plus_icon}
                            style={[styles.tabIcon, focused]}
                            resizeMode="contain"
                            />
                            </ImageBackground>
                
                        </>
                        ) : (
                            <ImageBackground source={Surface_Icon} style={{width:60,height:60,justifyContent:'center',alignItems:'center',marginBottom:50}}>
                        <Image
                            source={Plus_icon}
                            style={[styles.tabIcon, focused && styles.profileIconSelected]}
                            resizeMode="contain"
                        />
                         </ImageBackground>
                        )
                    ),
                    tabBarLabel: 'Your Profile',
                   
                    }}
                >
                    {() => <MainUpload/>}
                </Tab.Screen>

                <Tab.Screen
                    name="ReelsScreen"
                    options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                       
                        <>
                            <Image
                            source={Reels_Icon_focused}
                            style={[styles.tabIcon, focused]}
                            resizeMode="contain"
                            />
                      
                        </>
                        ) : (
                        <Image
                            source={Reels_Icon}
                            style={[styles.tabIcon, focused && styles.profileIconSelected]}
                            resizeMode="contain"
                        />
                        )
                    ),
                    tabBarLabel: 'Your Profile',
                    // tabBarOnPress: handleTabPress,
                    }}
                >
                    {() => <ReelsScreen/>}
                </Tab.Screen>

                <Tab.Screen
                    name="Notification"
                    options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? (
                       
                        <>
                            <Image
                            source={Notification_focused}
                            style={[styles.tabIcon, focused]}
                            resizeMode="contain"
                            />
                           
                        </>
                        ) : (
                        <Image
                            source={Notification_Icon}
                            style={[styles.tabIcon, focused && styles.profileIconSelected]}
                            resizeMode="contain"
                        />
                        )
                    ),
                    tabBarLabel: 'Your Profile',
                   
                    }}
                >
                    {() => <Notification/>}
                </Tab.Screen>

            </Tab.Navigator>
        </View>

    );
};

const styles = StyleSheet.create({
    tabIcon: {
      width: 24,
      height: 24,
      alignItems:'center'
    },
    tabIcon2:{
      width: 24,
      height: 24,
    },
    profileIconSelected: {
      width: 24,
      height: 24,
    },

    buttonText: {
      color:"black",
      fontSize: 14,
      fontWeight: '400',
      fontStyle:'normal',
      textAlign:'center',
      marginLeft:2
    },
  });
  
  export default Tabs;
