
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
// import {  } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../../services';
export default function App() {
    const [name,setName]=useState('')
    const [number,setNumber]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');
  
    const genderOptions = ['Male', 'Female', 'Other'];
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    const handleOptionSelect = (gender) => {
      setSelectedGender(gender);
      toggleDropdown();
    };

    const navigation = useNavigation()


    const Registartion = async()=> {

      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "name":name,
          "email":email,
          // "mobileNumber":"4646546565",
          "password":password,
          "confirmpassword":confirmPassword,
           "gender":isDropdownOpen,
          "token":"Token"
        });

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(API_URL+"travelerRegistration", requestOptions)
          .then(response => response.json())
          .then(result =>{
            console.log(result)
            
          })
          .catch(error => console.log('error', error));
    }

 

    return (
        <SafeAreaView style={{flex:1,backgroundColor:"#FFF"}}>
        <ScrollView  >
           
          <ImageBackground style={{backgroundColor:"black",width:375,height:730,}} source={require("../../assetes/background.jpg")}>
            <View style={{flexDirection:'row',marginTop:30,justifyContent:'center',alignItems:'center'}}>
            <View style={{ flexDirection:'row',marginLeft:-30}} >
                <Image style={{height:24,width:24}} source={require("../../assetes/backicon.png")}/>
                <Text style={styles.back} >Back</Text>
                </View>
                <View style={{width:198,height:44,}}>
                <Text style={{fontWeight:'700',color:"#FFF",fontSize:18,textAlign:'center'}}>Create Account</Text>
                </View>
            </View >

            <View style={styles.form}>
             <View style={styles.headerText}>
                <Text style={{fontSize:32,color:'#212121',fontWeight:'700'}}>Welcome</Text>
                <Text style={{color:"#898A83",fontSize:16, fontWeight:'400'}}>
                    Create Account to keep exploring amazing destinations around the world!
                    </Text>
             </View>

             <View style={styles.input}>
                <View style={{flexDirection:'row',
                marginLeft:10,
                marginRight:10,
                backgroundColor:'rgba(137, 138, 131, 0.05)',
                borderRadius:20,
                height:56}}>
                <Image source={require("../../assetes/personicon.png")}
                    style={{height:25,width:25,marginTop:15,marginRight:10,marginLeft:10}}
                />
                <TextInput
                placeholder='Enter your name'
                style={{color:'rgba(137, 138, 131, 0.40)',fontSize:16,fontWeight:'400'}}
                onChangeText={setName}
                />
                </View>
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
                placeholder='Enter Your Mobile Number'
                style={{color:'rgba(137, 138, 131, 0.40)',fontSize:16,fontWeight:'400'}}
                onChangeText={setNumber}
                />
                </View>

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
                onChangeText={setEmail}
                />
                </View>



       <View style={styles.pickerContainer}>
         <View style={styles.dropdownTrigger}>
            <Image
              source={require('../../assetes/genderIcon.png')}
              style={{ height: 25, width: 25, marginTop: 5, marginRight: 10, marginLeft: 10 }}
            />
            <View style={{flexDirection:'row'}}>
            <Text style={{ color: 'rgba(137, 138, 131, 0.40)', fontSize: 16, fontWeight: '400' }}>
              {selectedGender || 'Select Your Gender'}
            </Text>
            <TouchableOpacity onPress={toggleDropdown} >
            <Image style={{width:24,height:24,marginLeft:80}} source={require("../../assetes/downarrowIcon.png")}/>
            </TouchableOpacity>
            </View>
            </View>
          {isDropdownOpen && (
            <View style={styles.dropdown}>
              {genderOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.dropdownOption}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={{flexDirection:'row'
                ,marginLeft:10,
                marginRight:10,
                backgroundColor:'rgba(137, 138, 131, 0.05)',
                borderRadius:20,
                marginTop:10,
                height:56
                 }}
                >
                <Image source={require("../../assetes/lockIcon.png")}
                    style={{height:25,width:25,marginTop:15,marginRight:10,marginLeft:10}}
                />
                
                <TextInput
                placeholder='Enter Your Password'
                style={{color:'rgba(137, 138, 131, 0.40)',fontSize:16,fontWeight:'400'}}
                onChangeText={setPassword}
                />
                <Image 
                style={{height:25,width:25,marginTop:15,marginRight:10,marginLeft:60}}
                source={require("../../assetes/passwordIcon.png")}/>
                
                </View>

                <View style={{flexDirection:'row'
                ,marginLeft:10,
                marginRight:10,
                backgroundColor:'rgba(137, 138, 131, 0.05)',
                borderRadius:20,
                marginTop:10,
                height:56
                 }}
                >
                <Image source={require("../../assetes/lockIcon.png")}
                    style={{height:25,width:25,marginTop:15,marginRight:10,marginLeft:10}}
                />
                <TextInput
                placeholder='Confirum Your Password'
                style={{color:'rgba(137, 138, 131, 0.40)',fontSize:16,fontWeight:'400'}}
                onChangeText={setConfirmPassword}
                />
                 <Image 
                style={{height:25,width:25,marginTop:15,marginRight:10,marginLeft:30}}
                source={require("../../assetes/passwordIcon.png")}/>
                </View>

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
              <TouchableOpacity onPress={()=>navigation.replace("DashboardTab")} >
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:16,fontWeight:'700',color:'#FFF', width:232,
              height:22}} >
                Create Account
                  </Text>
                  <Image 
                  style={{marginLeft:19,width:24,height:24}}
                  source={require("../../assetes/forwardIcon.png")}/>
                  </View>
              </TouchableOpacity>
            </LinearGradient>

          </View>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
          <Text style={{fontSize:16,fontWeight:'400',color:'#212121'}}>Already have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Registartion")}>
          <Text style={{fontSize:16,fontWeight:'400',color:'#00BEDC'}}>Sign in</Text>
        </TouchableOpacity>
         
          </View>
            </View>
                </ImageBackground>
               
                </ScrollView>
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
        marginLeft:20,marginRight:20,
    },
 
    pickerContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        height: 56,
      },
      dropdownTrigger: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(137, 138, 131, 0.05)',
        borderRadius: 20,
        height: 56,
      },
      dropdown: {
        position: 'absolute',
        top: 56,
        left: 0,
        right: 0,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginTop: 10,
        zIndex: 1, 
      },
      dropdownOption: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
})