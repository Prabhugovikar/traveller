import { useNavigation } from '@react-navigation/native';
import React, { useRef,useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function App () {

  
    const navigation = useNavigation()

 

  const path =()=>{
    navigation.replace("OTPForgotPassword")
  }

    return (

    <SafeAreaView style={{flex:1,backgroundColor:"#FFF"}}>

      <ImageBackground style={{backgroundColor:"black",width:375,height:730,}} source={require("../../assetes/background.jpg")}>

        <View style={{flexDirection:'row',marginTop:30,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{ flexDirection:'row',marginLeft:-30}}onPress={()=>navigation.navigate("Registartion")} >
            <Image style={{height:24,width:24}} source={require("../../assetes/backicon.png")}/>
            <Text style={styles.back} >Back</Text>
            </TouchableOpacity>
            <View style={{width:198,height:44,}}>
            <Text style={{fontWeight:'700',color:"#FFF",fontSize:18,textAlign:'center'}}>Forgot Password</Text>
            </View>
        </View >

        <View style={styles.form}>
         <View style={styles.headerText}>
            <Text style={{fontSize:32,color:'#212121',fontWeight:'700'}}>Don’t Worry I’ll Help You</Text>
            <Text style={{color:"#898A83",fontSize:16, fontWeight:'400'}}>
            A message with verification code sent to your mobile number  
            </Text>
         </View>

         <View style={styles.input}>
         <View style={{flexDirection:'row',
                marginLeft:10,
                marginRight:10,
                backgroundColor:'rgba(137, 138, 131, 0.05)',
                borderRadius:20,
                marginTop:10,
                height:56
            }}
                >
                <Image source={require("../../assetes/emailIcon.png")}
                    style={{height:25,width:25,marginTop:15,marginRight:10,marginLeft:10}}
                />
                <TextInput
                placeholder='Enter your Email'
                style={{color:'rgba(137, 138, 131, 0.40)',fontSize:16,fontWeight:'400'}}
                />
                </View>
         </View>

         <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>
        <LinearGradient
         start={{ x: 0, y: 0.8 }}
         end={{ x: 2, y: 0.8 }}
         colors={['#2DC6BE', '#C9E32E']}
         style={{
           marginTop:20,
           height: 56,
           width: 310,
           borderRadius: 20,
           padding: 16,
           shadowColor: 'rgba(96, 97, 112, 0.16)',
           shadowOffset: { width: 0, height: 4 },
           shadowOpacity: 1,
           shadowRadius: 8,
           elevation: 4, // This is for Android elevation
           backgroundColor: 'white',
          }}
        >
          <TouchableOpacity onPress={()=>path()} >
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'700',color:'#FFF', width:232,
          height:22}} >
           Send OTP
              </Text>
              <Image 
              style={{marginLeft:19,width:24,height:24}}
              source={require("../../assetes/forwardIcon.png")}/>
              </View>
          </TouchableOpacity>
        </LinearGradient>

      </View>

       

        </View>
            </ImageBackground>
           
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
back : {
    color :"#FFF",
    fontSize:16,
    fontWeight:'700'
},

form :{
    width : 360,
    height:776,
    backgroundColor:"#FFF",
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    alignSelf:'stretch'
},
headerText : {
    marginTop :20,
    marginLeft : 20
},
input : {
    marginTop : 30,
    marginLeft:20,
    marginRight:20,
},



})