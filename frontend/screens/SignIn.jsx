import React, {useState} from "react";
import {View, Image,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import FormInput from "../components/formInput";
import configIp from "../config.js";
import Logo from "../components/Logo";



export default function SignIn(props){

    const [email, setEmail] = useState("");
    const [password,setPassword]= useState("");

    const signIn = async()=>{
        let user = await fetch(`${configIp.myIp}/sign-in`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `email=${email}&password=${password}`
            
        })
        let backResponse = await user.json()

        if (backResponse.result) {
            props.navigation.navigate("Home")
        }
        console.log(backResponse);
    }

    return(
        <View style={StyleGuide.container}>
           <Logo/>
            <Text h3>Connexion</Text> 

            <FormInput placeholder='Email' icon='email' value={email} onChangeText={(val) => setEmail(val)} />
            <FormInput placeholder='Mot de passe' value={password} onChangeText={(val) =>setPassword(val)} />

            <SquareButtonBorder onPress={() => signIn()} buttonTitle="Confirmer" />


        </View>    

    )
}