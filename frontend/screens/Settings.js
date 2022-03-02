import React, { useState } from "react";
import { View, Text, ImageBackground, Image, Switch } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";


export default function Settings(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const swithc = <Switch
        trackColor={{ false: "#fff", true: "#fff" }}
        thumbColor={isEnabled ? "#FFA353" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
    />

    return (
        <ImageBackground
            source={require("../assets/Profile.png")}
            style={StyleGuide.container}
        >
            <View style={StyleGuide.header}>
                <FontAwesome onPress={() => props.navigation.navigate('Home')} style={{ marginTop: 30, marginLeft: 10 }} name="arrow-left" size={25} color="white" />
            </View>

            <View>
                <Image style={{ width: 130, height: 130, borderRadius: 50 }} source={require('../assets/Laureline.jpeg')} />
                <Text style={{ fontSize: 20, marginBottom: 50 }}>#laureloop</Text>
            </View>


            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="volume-up" size={25} color="white" />
                <Text>Effets sonores</Text>
                {swithc}
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="music" size={25} color="white" />
                <Text>Musique</Text>
                {swithc}
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="car" size={25} color="white" />
                <Text>Vibration</Text>
                {swithc}
            </View>


            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="heart" size={25} color="white" />
                <Text>Notifications</Text>
                {swithc}
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="globe" size={25} color="white" />
                <Text>Langage</Text>
                {swithc}
            </View>

            <SquareButtonFilled onPress={() => props.navigation.navigate("Home")} buttonTitle="Se déconnecter" />
            <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Supprimer le compte" />

        </ImageBackground>
    );
}
