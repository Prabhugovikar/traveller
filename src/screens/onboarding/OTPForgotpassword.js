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
import OTPTextView from 'react-native-otp-textinput';

export default function App () {
    const navigation = useNavigation()

    const path =()=> {
        navigation.replace("NewPassword")
    }


    return (

    <SafeAreaView style={{flex:1,backgroundColor:"#FFF"}}>

      <ImageBackground style={{backgroundColor:"black",width:'100%',height:730,}} source={require("../../assetes/background.jpg")}>

        <View style={{flexDirection:'row',marginTop:30,justifyContent:'center',alignItems:'center'}}>
        {/* <View style={{ flexDirection:'row',marginLeft:-30}} >
            <Image style={{height:24,width:24}} source={require("../../assetes/backicon.png")}/>
            <Text style={styles.back} >Back</Text>
            </View> */}
            <View style={{width:198,height:44,}}>
            <Text style={{fontWeight:'700',color:"#FFF",fontSize:18,textAlign:'center'}}>OTP Verification</Text>
            </View>
        </View >

        <View style={styles.form}>
         <View style={styles.headerText}>
            <Text style={{fontSize:32,color:'#212121',fontWeight:'700'}}>OTP Verification</Text>
            <Text style={{color:"#898A83",fontSize:16, fontWeight:'400'}}>
            A message with verification code sent to your mobile number
                </Text>
         </View>

         <View style={styles.input}>

      <OTPTextView
            inputCount={6}
            textInputStyle={ {
                height:57,
                width:50,
              borderRadius: 16,
              borderWidth: 1,
              backgroundColor: "rgba(137, 138, 131, 0.05)",
            }}
            containerStyle={{
                height:57,
                // columnGap: 1,
                flex: 1,
                padding: "17px 0px",
                borderRadius: 16,
                background: "rgba(137, 138, 131, 0.05)",
            }}           
          />
         </View>

         <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>
        <LinearGradient
         start={{ x: 0, y: 0.8 }}
         end={{ x: 2, y: 0.8 }}
         colors={['#2DC6BE', '#C9E32E']}
         style={{
           marginTop:80,
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
          <TouchableOpacity onPress={()=>path()}>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'700',color:'#FFF', width:232,
          height:22}} >
           Verify
              </Text>
              <Image 
              style={{marginLeft:19,width:24,height:24}}
              source={require("../../assetes/forwardIcon.png")}/>
              </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
  
      <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{fontSize:16,fontWeight:'400',color:"#212121"}}>Don’t receive the code?</Text>
            <TouchableOpacity>
                <Text style={{fontSize:16,fontWeight:'400',color:'#00BEDC'}}>Resend</Text>
            </TouchableOpacity>
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
    width : '100%',
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
    // marginLeft:10,
    marginRight:20,
},

})