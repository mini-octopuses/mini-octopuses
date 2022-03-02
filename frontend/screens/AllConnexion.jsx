import React from "react";
import {View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';

import Logo from "../components/Logo";
import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";


export default function AllConnexion(props){
    return(
        <ImageBackground source={require('../assets/bg.png')} style={StyleGuide.container}>
            <Logo/>

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

            <SquareButtonBorder onPress={() => props.navigation.navigate("SignUp")} buttonTitle="S'inscrire" />
            <SquareButtonBorder onPress={() => props.navigation.navigate("SignIn")} buttonTitle="Se connecter" />
            <SquareButtonFilled onPress={() => props.navigation.navigate("Home")} buttonTitle="Jouer en tant qu'invité" />

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