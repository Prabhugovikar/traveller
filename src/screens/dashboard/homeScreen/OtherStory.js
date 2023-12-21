import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export default function App() {
  const navigation=useNavigation()
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (1 / 300); // Increase the progress by 1/30 every 100 milliseconds

        if (newProgress >= 1) {
          clearInterval(interval);
          navigation.goBack()
        }

        return Math.min(newProgress, 1); // Cap the progress at 1
      });
    }, 100);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground
      style={styles.imageBackground}
      source={require("../../../assetes/Image.png")}
      resizeMode="contain" // Adjusted resizeMode to "contain"
    >
      <ProgressBar progress={progress} width={375} height={0.5} color={"#FFFF"} />
      <View style={{flexDirection:'row'}}>
      <View style={styles.img_container}>
        <Image style={styles.img} source={require("../../../assetes/Image.png")}/>
      </View>
      </View>
      
      
    </ImageBackground>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
},
imageBackground: {
  flex: 1,
  width: '100%',
  height: '100%',
},
img_container : {
 marginLeft:20,
 marginTop:30
},
img : {
  width:40,
  height:40,
  borderRadius:40,
  borderWidth:1,
  borderColor:"#FFF"

},
text_container : {
  marginLeft:59,
}
});
