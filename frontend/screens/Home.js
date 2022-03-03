import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonFilled from "../components/SquareButtonFilled";
import Logo from '../components/Logo';


export default function Home(props) {
    return (

        <SafeAreaView style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                    <Image style={StyleGuide.profileImageButton} source={require('../assets/Laureline.jpeg')} />
                    <Text style={{ marginLeft: 10 }}>#laureloop</Text>
                </TouchableOpacity>
                <FontAwesome onPress={() => props.navigation.navigate('Settings')} style={{ marginTop: 15, marginRight: 10 }} name="gear" size={35} color="white" />
            </View>

            <Logo />

            <Text style={{ fontSize: 20, marginBottom: 20, }}>Choisis le mode de jeu</Text>

            <SquareButtonFilled onPress={() => props.navigation.navigate("Categories")} buttonTitle="Entrainement" />
            <SquareButtonFilled onPress={() => props.navigation.navigate("SettingsGuest")} buttonTitle="Duel --now to Settings Guest" />

        </SafeAreaView>
    )
}