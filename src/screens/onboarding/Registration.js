import { useNavigation } from '@react-navigation/native';
import React, { useRef,useState,useEffect } from 'react';
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
import { firebase } from '@react-native-firebase/auth';

export default function App () {
     
    const [mobileNumber,setMobilenumber]=useState('')
    const [inputType, setInputType] = useState('phone');
    const navigation = useNavigation()

  const toggleInputType = () => {
    setInputType((prevType) => (prevType === 'phone' ? 'email' : 'phone'));
  };

  const path =()=>{
    navigation.replace("OtpVerfication")
  }

  useEffect(() => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log('logged out successfuly')
    }).catch((error) => {
      // An error happened.
      console.log('error', error)
    });
  
  })


  const handleContinueButtonPress = async () => {
 
    const formattedNumber ='+91'+ mobileNumber;
    console.log('number', formattedNumber)
    if (validatePhoneNumber()) {
    firebase.auth().signInWithPhoneNumber(formattedNumber)
    .then(confirmResult => {
      navigation.navigate('OtpVerfication',{result:confirmResult, number:formattedNumber})
      console.log('result', confirmResult)
    })
    .catch(error => {
      alert(error.message)
      console.log('error',error)
    })
  } else {
   
    console.log('Invalid Phone Number')
  }
}

const validatePhoneNumber = () => {
  // Allow optional '+' sign, followed by 10 digits
  const regexp = /^\+?[0-9]{10}$/;
  return regexp.test(mobileNumber);
};

    return (

    <SafeAreaView style={{flex:1,backgroundColor:"#FFF"}}>

      <ImageBackground style={{backgroundColor:"black",width:"100%",height:730,}} source={require("../../assetes/background.jpg")}>

        <View style={{flexDirection:'row',marginTop:30,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{ flexDirection:'row',marginLeft:-30}} onPress={()=>navigation.navigate("Login")} >
            <Image style={{height:24,width:24}} source={require("../../assetes/backicon.png")}/>
            <Text style={styles.back} >Back</Text>
            </TouchableOpacity>
            <View style={{width:198,height:44,}}>
            <Text style={{fontWeight:'700',color:"#FFF",fontSize:18,textAlign:'center'}}>Sign In</Text>
            </View>
        </View >

        <View style={styles.form}>
         <View style={styles.headerText}>
            <Text style={{fontSize:32,color:'#212121',fontWeight:'700'}}>Welcome</Text>
            <Text style={{color:"#898A83",fontSize:16, fontWeight:'400'}}>
            Sign in to keep exploring amazing destinations around the world!
                </Text>
         </View>

         <View style={styles.input}>

            {inputType === 'phone'?(
            <View style={{flexDirection:'row'
                ,marginLeft:10,
                marginRight:10,
                backgroundColor:'rgba(137, 138, 131, 0.05)',
                borderRadius:20,
                marginTop:10,
                height:56
                 }}
                >
                <Image source={require("../../assetes/mobileIcon.png")}
                    style={{height:25,width:25,marginTop:15,marginRight:10,marginLeft:10}}
                />
                <TextInput
                keyboardType='numeric'
                placeholder='Enter Your Mobile Number'
                style={{color:'rgba(137, 138, 131, 0.40)',fontSize:16,fontWeight:'400'}}
                maxLength={10}
                onChangeText={setMobilenumber}
                />
                </View>
            ):(
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
            
            )} 
          

         </View>

         <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>
        <LinearGradient
         start={{ x: 0, y: 0.8 }}
         end={{ x: 2, y: 0.8 }}
         colors={['#2DC6BE', '#C9E32E']}
         style={{
           marginTop:30,
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
          <TouchableOpacity onPress={()=>handleContinueButtonPress()} >
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:16,fontWeight:'700',color:'#FFF', width:232,
          height:22}} >
           Continue
              </Text>
              <Image 
              style={{marginLeft:19,width:24,height:24}}
              source={require("../../assetes/forwardIcon.png")}/>
              </View>
          </TouchableOpacity>
        </LinearGradient>

      </View>

      <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
      <Text style={{fontSize:16,fontWeight:'400',color:'#212121'}}>OR LOGIN WITH</Text>
      </View>
       
       {inputType === 'phone' ? (
         <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:14}}  onPress={toggleInputType}>
         <Image style={{width:38,height:38}} source={require("../../assetes/googleIcon.png")}/>
       </TouchableOpacity>
       ) : (
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',marginTop:14,marginLeft:20,marginRight:20}} onPress={toggleInputType} >
        <Image style={{width:38,height:38}} source={require("../../assetes/phoneIcon.png")}/>
      </TouchableOpacity>
       )}

       <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
         <Text style={{color:'#212121',fontSize:16,fontWeight:'400'}}>Don’t have account?</Text>
         <Text style={{color:'#00BEDC',fontSize:16,fontWeight:'400'}}> Sign up</Text>
       </View>
       <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('ForgotPassword')}>
        <Text style={{color:'#00BEDC',fontSize:16,fontWeight:'400'}}>Forgo’t Password</Text>
       </TouchableOpacity>

        <View style={{flexDirection:'column',marginTop:120,justifyContent:'center',alignItems:'center'}}>
            <Text style={{textAlign:'center',color:'#212121',fontSize:16,fontWeight:'400'}}>By creating an account, you agree to our </Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#00BEDC',fontSize:16,fontWeight:'400'}}>Terms & Condistions</Text>
                <Text style={{textAlign:'center',color:'#212121',fontSize:16,fontWeight:'400'}}> and agree to</Text>
                <Text style={{color:'#00BEDC',fontSize:16,fontWeight:'400'}}> Privacy Policy</Text>

            </View>
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
    width : "100%",
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