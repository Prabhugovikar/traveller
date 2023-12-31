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
  TextInput,
  Modal
} from 'react-native';
// import {  } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../../services';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function App() {
    const [name,setName]=useState('')
    const [number,setNumber]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');
    const [errormodal,seterrormodal]=useState(false)
    const [successmodal,setsuccessmodal]=useState(false)
    const [successMsg,setsuccessMsg]=useState('')
    const [errorMsg,seterrorMsg]= useState('')
  
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

      let fcmToken = await AsyncStorage.getItem("fcmToken")

      if(email) {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "name":name,
          "email":email,
          // "mobileNumber":"4646546565",
          "password":password,
          "confirmpassword":confirmPassword,
           "gender":isDropdownOpen,
          "token":fcmToken
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
            if(result.Status===true) {
              AsyncStorage.setItem("userName",result.user.name)
              AsyncStorage.setItem("user_id",result.user._id)
              AsyncStorage.setItem("user_mobilenumber",result.user.mobileNumber)
              AsyncStorage.setItem("userpassword",result.user.password)
              setsuccessMsg(result.message)
              setsuccessmodal(true)
            } else {
              seterrormodal(true)
              seterrorMsg(result.message)
            }
           
          })
          .catch(error => console.log('error', error));

      } else {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "name":name,
          "mobileNumber":number,
          "password":password,
          "confirmpassword":confirmPassword,
           "gender":isDropdownOpen,
          "token":fcmToken
        });
         console.log("raw",raw)
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(API_URL+"travelerRegistration", requestOptions)
          .then(response => response.json())
          .then(result =>{
            if(result.Status===true) {
              console.log(result)
              AsyncStorage.setItem("userName",result.user.name)
              AsyncStorage.setItem("user_id",result.user._id)
              AsyncStorage.setItem("user_mobilenumber",result.user.mobileNumber)
              AsyncStorage.setItem("userpassword",result.user.password)
              setsuccessMsg(result.message)
              setsuccessmodal(true)
            } else {
              seterrorMsg(result.message)
              seterrormodal(true)
            }
           
          })
          .catch(error => console.log('error', error));
      }
       

     
    }


    const closeSuccessModal = () => {
      setsuccessmodal(false)
      navigation.replace('DashboardTab')
     
     };
   
       const closeModal = () => {
         seterrormodal(false)
       };

 

    return (
        <SafeAreaView style={{flex:1,backgroundColor:"#FFF"}}>
        <ScrollView  >
           
          <ImageBackground style={{backgroundColor:"black",width:"100%",height:730,}} source={require("../../assetes/background.jpg")}>
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

                <View 
                style={{
                flexDirection:'row',
                marginLeft:10,
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
              <TouchableOpacity onPress={()=>Registartion()} >
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

            <View>
         <Modal
          animationType="slide"
          transparent={true}
          visible={successmodal}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              
                <View>
                  <Text style={styles.modalText}>{successMsg}</Text>
                  <TouchableOpacity style={styles.modalCloseText} onPress={()=>closeSuccessModal()}>
                    <Text style={{color:'#FFF',fontSize:16,fontWeight:'400'}}>Continue</Text>
                  </TouchableOpacity>
                </View>
              
            </View>
          </View>
        </Modal>
         </View>

         
         <View>
         <Modal
          animationType="slide"
          transparent={true}
          visible={errormodal}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              
                <View>
                  <Text style={styles.modalText}>{errorMsg}</Text>
                  <TouchableOpacity style={styles.modalCloseText} onPress={()=>closeModal()}>
                    <Text style={{color:'#FFF',fontSize:16,fontWeight:'400'}}>Close</Text>
                  </TouchableOpacity>
                </View>
              
            </View>
          </View>
        </Modal>
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
        width :"100%",
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

          
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalText: {
    fontSize: 16,
    fontWeight:'400',
    textAlign: "center",
  },
  modalCloseText: {
    marginTop:10,
    color: ['#2DC6BE', '#C9E32E'],
    backgroundColor: "#2caf7b",
    width: 100,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 50,
    textAlign:'center',
    alignContent:'center',
    alignSelf:'center',
  },
})