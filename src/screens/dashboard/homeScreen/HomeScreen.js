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

export default function App () {
    return (
        <SafeAreaView style={{flex:1,}}>
            <View style={{flex:1}}>
                <View style={style.header}>
                    <TouchableOpacity style={style.imgView} >
                    <Image style={style.hedarimg} source={require("../../../assetes/Profile.png")} />
                    </TouchableOpacity>
                     
                     <View style={{marginLeft:66,marginTop:12,marginBottom:11,}}>
                        <Image style={{width:83,height:20}} source={require("../../../assetes/spalash.png")}/>
                     </View>

                     <View style={{flexDirection:'row'}}>
                        <TouchableOpacity  style={{marginLeft:54,marginTop:10,marginBottom:10}}>
                        <Image style={{height:24,width:24}} source={require("../../../assetes/Community.png")}/>
                        </TouchableOpacity> 

                        <TouchableOpacity style={{marginLeft:10,marginTop:10,marginBottom:10}}>
                            <Image source={require("../../../assetes/Place.png")}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft:10,marginTop:10,marginBottom:10}}>
                            <Image source={require("../../../assetes/Chat.png")}/>
                        </TouchableOpacity>
                     </View>
                </View>
                <ScrollView>
            <View style={style.body}>
                
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.story}>
                <View style={style.mystory} >
                    <TouchableOpacity style={{marginLeft:5,marginTop:5}}>
                 <Image style={{width:20,height:20,}} source={require("../../../assetes/story-plus-Icon.png")}/>
                 </TouchableOpacity>
                 <Image style={{width:55,height:55,marginLeft:10}} source={require("../../../assetes/Group.png")}/>
                 <Text style={{fontSize:10,fontWeight:'600',color:'#898A83',marginLeft:10}}>Your Moment</Text>
                </View>
                 
                
                <ImageBackground style={style.otherstoty}
                source={require("../../../assetes/Image.png")}
                >
                  <Image style={{width:24,height:24,borderRadius:24,borderColor:'#2DC6BE',borderWidth:1,marginTop:5,marginLeft:5}} source={require("../../../assetes/Image.png")}/>
                </ImageBackground>

                <ImageBackground style={style.otherstoty}
                source={require("../../../assetes/Image.png")}
                >
                  <Image style={{width:24,height:24,borderRadius:24,borderColor:'#2DC6BE',borderWidth:1,marginTop:5,marginLeft:5}} source={require("../../../assetes/Image.png")}/>
                </ImageBackground>

                <ImageBackground style={style.otherstoty}
                source={require("../../../assetes/Image.png")}
                >
                  <Image style={{width:24,height:24,borderRadius:24,borderColor:'#2DC6BE',borderWidth:1,marginTop:5,marginLeft:5}} source={require("../../../assetes/Image.png")}/>
                </ImageBackground>

                <ImageBackground style={style.otherstoty}
                source={require("../../../assetes/Image.png")}
                >
                  <Image style={{width:24,height:24,borderRadius:24,borderColor:'#2DC6BE',borderWidth:1,marginTop:5,marginLeft:5}} source={require("../../../assetes/Image.png")}/>
                </ImageBackground>
                </ScrollView>

<View>
    <ScrollView>
                <View style={style.post}>
                    <View style={style.singlepost}>
                     <View>
                        <ImageBackground style={{width:345,height:180,borderRadius:2}} source={require("../../../assetes/Image.png")}>
                        <View style={{marginLeft:12,marginTop:160}}>
                        <Image style={{width:40,height:40,borderRadius:40,borderColor:"#FFF",borderWidth:1}} source={require("../../../assetes/Image.png")}/>
                     </View>
                     </ImageBackground>
                     <View style={{marginLeft:57,marginTop:5,}}>
                        <Text style={{fontSize:10,color:'#616161',fontWeight:'400'}}>5 min ago</Text>
                     </View>

                     <View style={style.profilename}>
                         <Text style={{color:'#000',fontSize:12,fontWeight:'500'}}>Jessica12</Text>
                     </View>

                     <View style={style.description}>
                        <Text style={{color:'#616161',fontSize:12,fontWeight:'400'}}>Loreum ipsum is a dummy text...
                         </Text>
                         <Text style={{color:'#616161',fontSize:12,fontWeight:'400'}}>#hastag</Text>
                     </View>

                     <View style={style.icons}>
                        <View>
                        <Image style={{width:24,height:24}} source={require("../../../assetes/noto_fire.png")}/>
                        </View>
                        <Text style={{color:"#CCCCCB",textAlign:'center',fontSize:12,fontWeight:'400',marginTop:5,marginLeft:5}}>Love it</Text>
                         
                         <View style={{marginLeft:15}}>
                        <Image style={{width:24,height:24}} source={require("../../../assetes/Dialog.png")}/>
                        </View>
                        <Text style={{color:"#CCCCCB",textAlign:'center',fontSize:12,fontWeight:'400',marginTop:5,marginLeft:5}}>Say</Text>

                        <View style={{marginLeft:15}}>
                        <Image style={{width:24,height:24}} source={require("../../../assetes/Forward.png")}/>
                        </View>
                        <Text style={{color:"#CCCCCB",textAlign:'center',fontSize:12,fontWeight:'400',marginTop:5,marginLeft:5}}>Spread</Text>

                        <View style={{marginLeft:15}}>
                        <Image style={{width:24,height:24}} source={require("../../../assetes/entypo_bucket.png")}/>
                        </View>
                        <Text style={{color:"#CCCCCB",textAlign:'center',fontSize:12,fontWeight:'400',marginTop:5,marginLeft:5}}>Bucket list</Text>
                     </View>
                     </View>
                     
                    </View>

                </View>

                <View style={style.post}>
                    <View style={style.singlepost}>
                     <View>
                        <ImageBackground style={{width:345,height:180,borderRadius:2}} source={require("../../../assetes/Image.png")}>
                        <View style={{marginLeft:12,marginTop:160}}>
                        <Image style={{width:40,height:40,borderRadius:40,borderColor:"#FFF",borderWidth:1}} source={require("../../../assetes/Image.png")}/>
                     </View>
                     </ImageBackground>
                     <View style={{marginLeft:57,marginTop:5,}}>
                        <Text style={{fontSize:10,color:'#616161',fontWeight:'400'}}>5 min ago</Text>
                     </View>

                     <View style={style.profilename}>
                         <Text style={{color:'#000',fontSize:12,fontWeight:'500'}}>Jessica12</Text>
                     </View>

                     <View style={style.description}>
                        <Text style={{color:'#616161',fontSize:12,fontWeight:'400'}}>Loreum ipsum is a dummy text...
                         </Text>
                         <Text style={{color:'#616161',fontSize:12,fontWeight:'400'}}>#hastag</Text>
                     </View>

                     <View style={style.icons}>
                        <View>
                        <Image style={{width:24,height:24}} source={require("../../../assetes/noto_fire.png")}/>
                        </View>
                        <Text style={{color:"#CCCCCB",textAlign:'center',fontSize:12,fontWeight:'400',marginTop:5,marginLeft:5}}>Love it</Text>
                         
                         <View style={{marginLeft:15}}>
                        <Image style={{width:24,height:24}} source={require("../../../assetes/Dialog.png")}/>
                        </View>
                        <Text style={{color:"#CCCCCB",textAlign:'center',fontSize:12,fontWeight:'400',marginTop:5,marginLeft:5}}>Say</Text>

                        <View style={{marginLeft:15}}>
                        <Image style={{width:24,height:24}} source={require("../../../assetes/Forward.png")}/>
                        </View>
                        <Text style={{color:"#CCCCCB",textAlign:'center',fontSize:12,fontWeight:'400',marginTop:5,marginLeft:5}}>Spread</Text>

                        <View style={{marginLeft:15}}>
                        <Image style={{width:24,height:24}} source={require("../../../assetes/entypo_bucket.png")}/>
                        </View>
                        <Text style={{color:"#CCCCCB",textAlign:'center',fontSize:12,fontWeight:'400',marginTop:5,marginLeft:5}}>Bucket list</Text>
                     </View>
                     </View>
                     
                    </View>

                </View>
                </ScrollView>
                </View>

            </View>
            </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

const style =StyleSheet.create({
    header : {
        width :"100%",
        height:44,
        flexDirection:'row',
        backgroundColor:"#FFFF"
       
       
    },
    imgView : {
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
    marginBottom:5,
    marginLeft:15,

    },
    hedarimg : {
        width:44,
        height:44,
        borderRadius:34,
        borderColor: '#F4F4F4',
        borderWidth:1
    },
    body :{
        backgroundColor:"#F5F5F5",
        marginTop:20,
        marginLeft:8,
        marginRight:8,
        marginBottom:20,
        width:345
        
    },
    story : {
       flexDirection:'row',
       backgroundColor:"#F5F5F5",
       gap:10
      
    },
    mystory : {
        width:83,
        height:109,
        backgroundColor:'#ECECEC',
        borderRadius:4
    },
    otherstoty :{
        width:83,
        height:109,
        borderRadius:4,
        marginLeft:10
    },
    post :{
        marginTop:20,
    },
    singlepost :{
        width: 345,
        height: 300,
        backgroundColor: '#FFF',
        borderRadius: 4,
        elevation: 4, // For Android
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    profilename : {
        marginTop:5,
        marginLeft:12
    },
    description : {
        marginTop:4,
        marginLeft:12
    },
    icons : {
        flexDirection :'row',
        marginLeft:10,
        marginTop:10,
        marginRight:10,
        marginBottom:10,
        justifyContent:'flex-start',
        rowGap:5
    }
})