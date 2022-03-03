import React from 'react';
import { ImageBackground } from 'react-native';

import Logo from "../components/Logo"
import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";

export default function SplashScreen(props) {

    return (
        <ImageBackground source={require('../assets/bg.png')} style={StyleGuide.container}>
            <Logo />
            <SquareButtonBorder onPress={() => props.navigation.navigate("AllConnexion")} buttonTitle="From Splash to Connection" />
        </ImageBackground>
    )
}
