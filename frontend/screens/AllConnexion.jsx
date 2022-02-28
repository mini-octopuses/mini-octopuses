import React from "react";
import {View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import StyleGuide from "../style/styleGuide";



export default function AllConnexion(props){
    return(
        <ImageBackground source={require('../assets/bg.png')} style={StyleGuide.container}>
            <Image source={require('../assets/Logo.png') } style={StyleGuide.logo} />
            <Image source={require('../assets/LogoText.png') } />
            <Text h2 style= {{color:'#fff', textAlign:'center'}} >Dev Quizz Battle
            </Text>

            <View style={StyleGuide.buttonStyle}>
                <TouchableOpacity >
                    <View style={StyleGuide.googleButton}>
                    <Image source={require('../assets/google.png') } style={StyleGuide.googlePicto}  />
                        <Text style={StyleGuide.titleGoogleButton}> Connexion avec Google</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={StyleGuide.buttonStyle}>
                <TouchableOpacity style={StyleGuide.facebookButton} >
                   <FontAwesome name="facebook" size={24} color="white" />
                    <Text style={StyleGuide.titleFacebookButton}> Connexion avec Facebook</Text>
                </TouchableOpacity>
            </View>

            <View style={StyleGuide.buttonStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")} >
                    <LinearGradient
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={["#F81C8F", "#FFA353"]}
                    style={{ borderRadius: 5 }}
                >
                        <View style={StyleGuide.buttonGradient}>
                          <Text style={StyleGuide.buttonTitle}> S'inscrire</Text>
                        </View>    
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={StyleGuide.buttonStyle}>
                <TouchableOpacity >
                    <LinearGradient
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={["#F81C8F", "#FFA353"]}
                    style={{ borderRadius: 5 }}
                >
                        <View style={StyleGuide.buttonGradient}>
                          <Text style={StyleGuide.buttonTitle}> Se connecter</Text>
                        </View>    
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={StyleGuide.buttonStyle}>
                <TouchableOpacity >
                    <LinearGradient
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={["#F81C8F", "#FFA353"]}
                    style={{ borderRadius: 5 }}
                >
                        <View style={StyleGuide.buttonGradientFilled}>
                          <Text style={StyleGuide.buttonTitle}> Jouer en tant qu'invité</Text>
                        </View>    
                    </LinearGradient>
                </TouchableOpacity>
            </View>  

            <View>
                <Text>pouette</Text>
                <Text>Chouette</Text>
            </View>
        </ImageBackground>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent:'center',
//         position: 'relative',
        
//       },

// })