import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, Switch, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";



export default function Profile(props) {


    return (
        <ImageBackground
            source={require("../assets/Profile.png")}
            style={StyleGuide.container}
        >

            <View style={StyleGuide.header}>
                <FontAwesome onPress={() => props.navigation.goBack()} style={{ marginTop: 30, marginLeft: 10 }} name="arrow-left" size={25} color="white" />
                <FontAwesome onPress={() => props.navigation.navigate('Settings')} style={{ marginTop: 30, marginRight: 10 }} name="gear" size={35} color="white" />
            </View>

            <View>
                <Image style={{ width: 130, height: 130, borderRadius: 50 }} source={require('../assets/Laureline.jpeg')} />
                <Text style={{ fontSize: 20, marginBottom: 50 }}>#laureloop</Text>
            </View>

            <Text style={{ fontSize: 20, marginBottom: 20, }}>Voici ta progression</Text>

            <ScrollView style={{ flex: 1 }}>


            </ScrollView>

            <View style={StyleGuide.footer}>
                <SquareButtonBorder onPress={() => props.navigation.navigate("PastBattles")} buttonTitle="Duels terminés" />
            </View>

        </ImageBackground>
    );
}
