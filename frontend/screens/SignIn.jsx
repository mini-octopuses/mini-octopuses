import React, { useState } from "react";
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import FormInput from "../components/FormInput";
import configIp from "../config.js";
import Logo from "../components/Logo";



export default function SignIn(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        let user = await fetch(`${configIp.myIp}/sign-in`, {
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

    return (
        <View style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <FontAwesome onPress={() => props.navigation.goBack()} style={{ marginTop: 30, marginLeft: 10 }} name="arrow-left" size={25} color="white" />
            </View>
            <Logo />
            <Text h4>Connexion</Text>

            <FormInput placeholder='Email' icon='email' value={email} onChangeText={(val) => setEmail(val)} />
            <FormInput placeholder='Mot de passe' value={password} onChangeText={(val) => setPassword(val)} />

            <SquareButtonBorder onPress={() => signIn()} buttonTitle="Confirmer" />


        </View>

    )
}