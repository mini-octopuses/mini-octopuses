import React, { useState } from "react";
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import FormInput from "../components/FormInput";
import Logo from "../components/Logo";

import config from "../config";



export default function SignUp(props) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = async () => {
        let user = await fetch(`${config.myIp}/sign-up`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `username=${username}&email=${email}&password=${password}&isGuest=false`

        })
        let backResponse = await user.json()

        if (backResponse.result) {
            props.navigation.navigate("Home")
        }
        console.log(backResponse);
    }

    return (

        <View style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <FontAwesome onPress={() => props.navigation.goBack()} style={{ marginTop: 30, marginLeft: 10 }} name="arrow-left" size={25} color="white" />
            </View>

            <Logo />
            <Text h4>Inscription</Text>

            <FormInput placeholder='Prénom / Pseudo' icon='pseudo' value={username} onChangeText={(val) => setUsername(val)} />
            <FormInput placeholder='Email' icon='email' value={email} onChangeText={(val) => setEmail(val)} />
            <FormInput placeholder='Mot de passe' value={password} onChangeText={(val) => setPassword(val)} />

            <SquareButtonBorder onPress={() => signUp()} buttonTitle="Confirmer" />

        </View>

    )
}