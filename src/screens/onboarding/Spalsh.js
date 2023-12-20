import React,{useEffect} from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    SafeAreaView,
    Image,
    Modal,
    TextInput,
    ActivityIndicator,
    Dimensions
, } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import messaging from "@react-native-firebase/messaging";
import PushNotification, { Importance } from 'react-native-push-notification';
export default function App () {

    const navigation = useNavigation()

    useEffect(()=>{

        setTimeout(() => {
            navigation.replace('AccountType')
        }, 3000);
    })

    const getFCMToken = async () => {
        try {
          const token = await messaging().getToken();
          console.log("token",token);
        } catch (e) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getFCMToken();

        messaging().onMessage(async (remoteMessage) => {
            console.log("A new FCM message arrived!", JSON.stringify(remoteMessage));
          });
          
          messaging().onNotificationOpenedApp((remoteMessage) => {
            console.log("onNotificationOpenedApp: ", JSON.stringify(remoteMessage));
          });
          
          messaging()
            .getInitialNotification()
            .then((remoteMessage) => {
              if (remoteMessage) {
                console.log(
                  "Notification caused app to open from quit state:",
                  JSON.stringify(remoteMessage)
                );
              }
            });
          messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            console.log("Message handled in the background!", remoteMessage);
          });
      }, []);


  

    return(
        <SafeAreaView style={styles.main}>
            <View>
          <Image
          style={styles.logo}
          source={require('../../assetes/spalash.png')}
          />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor: '#FFF',
        alignItems:'center',
        justifyContent:'center'
    },
    logo :{
     width :200,
     height:50
    },

})

