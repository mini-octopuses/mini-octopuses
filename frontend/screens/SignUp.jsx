import React from "react";
import {View, Image,TouchableOpacity,Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import StyleGuide from "../style/styleGuide";
import FormInput from "../components/formInput";

export default function SignUp(){
    return(
        <View style={StyleGuide.container}>
            <Image source={require('../assets/Logo.png') } style={StyleGuide.logo} />
            <Image source={require('../assets/LogoText.png') } />
            <Text h3 style= {{color:'#fff', textAlign:'center'}} >Dev Quizz Battle
            </Text>
            <Text h3>Inscription</Text>
            <FormInput placeholder='Prénom / Pseudo' icon='pseudo' />
            <FormInput placeholder='Email' icon='email' />
            <FormInput placeholder='Mot de passe' />

        </View>    

    )
}