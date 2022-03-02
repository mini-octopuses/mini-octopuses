import React from 'react';
import {View,ImageBackground,TouchableOpacity, StyleSheet,ProgressBarAndroid} from 'react-native';
import { Text } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";

import Logo from "../components/Logo";
import StyleGuide from "../style/styleGuide";



export default function Loading(props){
   
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
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
   
    example: {
      marginVertical: 24,
    },
  });
  
