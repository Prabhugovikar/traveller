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
} from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function Onboarding11() {
  const swiperRef = useRef(null);
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index


  const welcomeImages = [
    {
      image : require("../../assetes/wlecomescreen1.png"),
      text : "Welcome To the  Fun ",
      subtext :'TravSo'
    },

    {
      image :  require("../../assetes/welcomescreen2.png"),
      text : "Connect With Local",
      subtext : "Travelers"
    },

    {
      image : require("../../assetes/welecomescreen3.png"),
      text : "Share Your Travel",
      subtext : "Stories"
    }
    
   
   
  ];

  const lastIndex = welcomeImages.length - 1;

  const handleStartNowPress = () => {
    const currentIndex = swiperRef.current ? swiperRef.current.state.index : 0;

    if (currentIndex < lastIndex) {
      // Continue to the next slide
      if (swiperRef.current) {
        swiperRef.current.scrollBy(1);
      }
    } else {
      // Last slide, navigate to the next screen
      navigation.replace('Login'); // Replace 'Login' with your target screen
    }
  };



  return (
    <SafeAreaView style={{ backgroundColor: '#FFFF', flex: 1 }}>
      <ScrollView>
        <Swiper
          loop={false}
          ref={swiperRef}
          onIndexChanged={(index) => setCurrentIndex(index)} // Update current index
          activeDotStyle={{ width: 8, height: 8,backgroundColor:'#00BEDC' }}
          dotStyle={{ width: 8, height: 8 }}
          paginationStyle={styles.pagination}
        >
          {welcomeImages.map((image, index) => (
            <View style={{justifyContent:'center',alignItems:'center'}} key={index}>
              <ImageBackground style={styles.rectangle6} source={image.image}>

              <View>
          <TouchableOpacity style={{ marginTop: 0, marginLeft: 5, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.replace('Login')}>
            <Text style={{
              marginTop:40,
              marginRight:16,
              marginLeft:"auto",
              flexShrink: 0,
              color: '#FFF',
              fontFamily: 'Source Sans Pro',
              fontSize: 16,
              fontWeight: '400',
              letterSpacing: 0,
              lineHeight: 16,
             
            }}>
              {`SKIP NOW`}
            </Text>
          </TouchableOpacity>
          </View>
                
        <View >
          <Text style={styles.joinOurYogaClasses}>
            {image.text}
            </Text>
            <Text style={styles.subtext}>
              {image.subtext}
              </Text>
              </View>

              </ImageBackground>
            </View>
          ))}
        </Swiper>

         <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>
            <LinearGradient
             start={{ x: 0, y: 0.8 }}
             end={{ x: 2, y: 0.8 }}
             colors={['#2DC6BE', '#C9E32E']}
             style={{

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
              <TouchableOpacity  onPress={handleStartNowPress}>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:16,fontWeight:'700',color:'#FFF', width:232,
              height:22}} >
                {currentIndex === lastIndex ? 'Continue' : 'Next'}
                  </Text>
                  <Image 
                  style={{marginLeft:19,width:24,height:24}}
                  source={require("../../assetes/forwardIcon.png")}/>
                  </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          
      
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  onboarding11: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    flexShrink: 0,
    height: 586,
    width: 375,
  },
  _background: {
    flexShrink: 0,
  },
  rectangle6: {
    flexShrink: 0,
     width: 375,
     height:692,
  },
  joinOurYogaClasses: {
    flexShrink: 0,
    marginTop:510,
    marginLeft:30,
    marginRight:30,
    textAlign: "left",
    color: '#FFF',
    fontFamily: 'Source Sans Pro',
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -0.704,
    lineHeight: 44,
  },
  subtext :{
    flexShrink: 0,
    marginTop:2,
    marginBottom:48,
    marginLeft:30,
    marginRight:30,
    textAlign: "left",
    color: '#FFF',
    fontFamily: 'Source Sans Pro',
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -0.704,
    lineHeight: 44,

  },
  frame24: {
    position: 'absolute',
    flexShrink: 0,
    top: 600,
    left: 95,
    alignItems: 'center',
    rowGap: 31,
  },
  smallButton: {
    flexShrink: 0,
    width: 500,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    borderRadius: 48,
   
  },

  sKIPNOW: {
    flexShrink: 0,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 16,
  },
  pagination: {
    marginTop:634,
    left:-230,
    top:10
    
  },
});
