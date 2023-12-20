import React from 'react';
import {Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width} = Dimensions.get('window');

const ComButton =({title,style})=>{
<LinearGradient
  style={{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // Add other styles here
    shadowColor: '#606170',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 2, // For Android shadow
    backgroundColor: 'transparent', // Set a transparent background to apply the gradient
  }}
  colors={['#2DC6BE', '#C9E32E']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  >
  <Text
      style={{
        color: '#FFF',
        fontSize: 16,
        fontWeight: 700,
        textAlign:'center'
      }}>
      {title}
    </Text>
    
</LinearGradient>
}

export default ComButton;