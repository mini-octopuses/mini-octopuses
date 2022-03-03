import React, { useState } from "react";
import { View, Text, ImageBackground, Image, Switch } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";


export default function PastBattles(props) {


    return (

        <View style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <FontAwesome onPress={() => props.navigation.navigate('Home')} style={{ marginTop: 30, marginLeft: 10 }} name="arrow-left" size={25} color="white" />
            </View>

            <Text style={{ fontSize: 20, marginBottom: 20, }}>Batailles passées</Text>


            <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Bataille_321" />
            <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Bataille_753" />
            <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Bataille_159" />
            <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Bataille_852" />

        </View>
    );
}
