import React, { useState } from 'react';
import { Dimensions, View,Image, ImageBackground,TouchableOpacity} from 'react-native';
import { Text } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";
import StyleGuide from "../style/styleGuide";



export default function SplashScreen(props){
    const [pseudo, setPseudo]=useState('');
    return(
        <ImageBackground source={require('../assets/bg.png')} style={StyleGuide.container}>
            <Image source={require('../assets/Logo.png') } style={StyleGuide.logo} />
            <Image source={require('../assets/LogoText.png') } />
            <Text h2 style= {{color:'#fff', textAlign:'center'}} >Dev Quizz Battle
            </Text>
            <View style={StyleGuide.buttonStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate("AllConnexion")}>
                    <LinearGradient
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={["#F81C8F", "#FFA353"]}
                        style={{ borderRadius: 5 }}
                    >
                        <View style={StyleGuide.buttonGradient}>
                        <Text style={StyleGuide.buttonTitle}>Autre page</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
      </View>
        </ImageBackground>
    )
}
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent:'center',
//       position: 'relative',
      
//     },
//     logo:{
//         width:  Dimensions.get('window').width/1.2,
//         resizeMode: 'contain',
//         position:'absolute',
//         top: 10,
        
//     },
//     button:{
//         backgroundColor : 'pink',
//         borderRadius:100,
//         width:  Dimensions.get('window').width/1.2,
//         height:  Dimensions.get('window').height/15,


//     }
   
    
// });    