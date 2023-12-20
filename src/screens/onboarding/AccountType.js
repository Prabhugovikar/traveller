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
    Dimensions,
    ImageBackground
, } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function App () {

    const navigation = useNavigation()

    const traveler =()=> {
        navigation.replace("WelecomeScreen")
    }

    const influencer =()=> {
        navigation.replace("WelecomeScreen")
    }

    return (
        <SafeAreaView style={{flex :1,backgroundColor:"#FFF" }}>
            <View style={styles.container}>
                <Image 
                style={styles.img}
                source={require('../../assetes/spalash.png')}
                />
                <Text style={{marginTop:15,fontWeight:'600',fontSize:14}}>Go, Find, Explore & Share</Text>
            </View>

            <View style={styles.mainView}> 

                <View style={{ borderBottomLeftRadius:22,
                      borderBottomRightRadius:22}}>
                        <TouchableOpacity onPress={()=>traveler()}>
                    <ImageBackground
                    style={styles.travelerImg}
                    source={require('../../assetes/travelerLogo.png')}
                    >
                      <View style={{marginTop:125,backgroundColor:'#87DF6C',height:42,
                      alignItems:'center',
                      justifyContent:'center',
                      borderBottomLeftRadius:22,
                      borderBottomRightRadius:22
                    }}>
                        <Text style={{textAlign : 'center',fontSize:18, fontWeight:'600'}} >Traveler</Text>
                      </View>
                    </ImageBackground>
                    </TouchableOpacity>

                </View>

                <View 
                style={{
                     borderBottomLeftRadius:22,
                      borderBottomRightRadius:22
                      }}>

                 <TouchableOpacity onPress={()=>influencer()}>
                    <ImageBackground
                    style={styles.travelerImg}
                    source={require('../../assetes/influencerLogo.png')}
                    >
                      <View style={{marginTop:125,backgroundColor:'#87DF6C',height:42,
                      alignItems:'center',
                      justifyContent:'center',
                      borderBottomLeftRadius:22,
                      borderBottomRightRadius:22
                    }}>
                        <Text style={{textAlign : 'center',fontSize:18, fontWeight:'600'}}>Influencer</Text>
                      </View>
                    </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img : {
        width : 200,
        height: 50,
    },
     
    container : {
        marginTop : 142,
        marginLeft:62,
        marginRight:61,
        alignItems : 'center',
        justifyContent : 'center'
    },
    mainView : {
        flexDirection : "row",
        justifyContent:'center',
        alignItems :'center',
        marginTop: 60,
        columnGap :20

    },

    travelerImg : {
        width: 147,
        height:147
    }
})