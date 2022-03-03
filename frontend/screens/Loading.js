<<<<<<< HEAD:frontend/screens/Loading.js
import React,{useState} from 'react';
import {View,ImageBackground,TouchableOpacity, StyleSheet,ProgressBarAndroid} from 'react-native';
import { Text } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";
=======
import React from 'react';
import { ImageBackground } from 'react-native';
>>>>>>> 70f2efb13302dd25566992937b486ea2e39ae304:frontend/screens/SplashScreen.jsx

import Logo from "../components/Logo";
import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";

export default function SplashScreen(props) {

<<<<<<< HEAD:frontend/screens/Loading.js

export default function Loading(props){
    const [load, setLoad]=useState(false);

    
   
    return(
        <ImageBackground source={require('../assets/bg.png')} style={StyleGuide.container}>
            <Logo/>
            <View style={styles.example}>
                <Text>Récupération de vos duels</Text>
                <ProgressBarAndroid />
            </View>
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
=======
    return (
        <ImageBackground source={require('../assets/bg.png')} style={StyleGuide.container}>
            <Logo />
            <SquareButtonBorder onPress={() => props.navigation.navigate("AllConnexion")} buttonTitle="From Splash to Connection" />
>>>>>>> 70f2efb13302dd25566992937b486ea2e39ae304:frontend/screens/SplashScreen.jsx
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
   
    example: {
      marginVertical: 24,
    },
  });
  
