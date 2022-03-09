import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import SquareButtonBorder from "../components/SquareButtonBorder";
import StyleGuide from "../style/styleGuide";

function Profile(props) {
  return (
    <ImageBackground
      source={require("../assets/Profile.png")}
      style={{
        flex: 1,
        position: "relative",
        backgroundColor: "#2B2B2B",
      }}
    >
      <View style={StyleGuide.header}>
        <FontAwesome
          onPress={() => props.navigation.navigate("Home")}
          style={{ marginTop: 30, marginLeft: 10, float: "left" }}
          name="arrow-left"
          size={25}
          color="white"
        />
        <FontAwesome
          onPress={() => props.navigation.navigate("Settings")}
          style={{ marginTop: 30, marginRight: 10 }}
          name="gear"
          size={35}
          color="white"
        />
      </View>

      <View style={{justifyContent:'center', alignItems:'center'}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image
            style={{ width: 130, height: 130,position:'relative',bottom:30,borderRadius:100}}
            source={require("../assets/Laureline.jpeg")}
          />
        </View>
        <View style={{flexDirection:'row', position:'relative',bottom:15,}}>
        <Text style={{color:'white',fontWeight:'bold',fontSize: 20,textAlign:'center',marginLeft:10}}>
          #Laureloop
        </Text>
        <FontAwesome5
            style={{marginLeft:10,position:'relative',bottom:3}}
            name="pen"
            size={24}
            color="white"
            onPress={() => props.navigation.navigate("ProfileSetting")}
          />
        </View>
       
      
      </View>
      <View style={{marginLeft:20}}>

      <Text style={{ fontSize: 20, marginTop:40 ,fontWeight:"bold",color:'white' }}>
        Voici ta progression 🎉
      </Text>

      <View style={{flexDirection:'row'}}>
       <Text style={{ fontSize: 18, marginTop:40 ,fontWeight:"bold",color:'white',width:Dimensions.get('window').width * 0.8 }}>
         HTML
       </Text>
         <Text style={{fontSize: 18, marginTop:40 ,fontWeight:"bold",color:'white'}}>40%</Text>
       </View>
       <View style={{width:Dimensions.get('window').width * 0.9,backgroundColor:'#FFA353',height:25,borderRadius:100, marginTop:10}}>
          <Text><View style={{width:Dimensions.get('window').width * 0.45,backgroundColor:'#F81C8F',height:25,borderRadius:100, marginTop:10}}>
          <Text> </Text>
         </View> </Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text style={{ fontSize: 18, marginTop:40 ,fontWeight:"bold",color:'white',width:Dimensions.get('window').width * 0.8 }}>
         CSS
       </Text>
         <Text style={{fontSize: 18, marginTop:40 ,fontWeight:"bold",color:'white'}}>90%</Text>
       </View>
       <View style={{width:Dimensions.get('window').width * 0.9,backgroundColor:'#FFA353',height:25,borderRadius:100, marginTop:10}}>
          <Text><View style={{width:Dimensions.get('window').width * 0.8,backgroundColor:'#F81C8F',height:26,borderRadius:100, marginTop:10}}>
          <Text> </Text>
         </View> </Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text style={{ fontSize: 18, marginTop:40 ,fontWeight:"bold",color:'white',width:Dimensions.get('window').width * 0.8 }}>
         React
       </Text>
         <Text style={{fontSize: 18, marginTop:40 ,fontWeight:"bold",color:'white'}}>10%</Text>
       </View>
       <View style={{width:Dimensions.get('window').width * 0.9,backgroundColor:'#FFA353',height:25,borderRadius:100, marginTop:10,marginBottom:50}}>
          <Text><View style={{width:Dimensions.get('window').width * 0.2,backgroundColor:'#F81C8F',height:26,borderRadius:100, marginTop:10}}>
          <Text> </Text>
         </View> </Text>
       </View>
       {/* <SquareButtonBorder
          buttonTitle="Duel"
        /> */}
      </View>
      
    </ImageBackground>
  );
}

function mapStatesToProps(state) {
  return { user: state.user };
}

export default connect(mapStatesToProps, null)(Profile);
