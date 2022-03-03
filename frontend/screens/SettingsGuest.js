import React, { useState } from "react";
import { View, Text, ImageBackground, Image, Switch, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";


export default function SettingsGuest(props) {

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
                <Image style={{ width: 110, height: 130 }} source={require('../assets/octo_blue.png')} />
                <Text style={{ fontSize: 20, marginBottom: 50 }}>#guest_321</Text>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="volume-up" size={25} color="white" />
                <Text>Effets sonores</Text>
                {swithc}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="music" size={25} color="white" />
                <Text>Musique</Text>
                {swithc}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="car" size={25} color="white" />
                <Text>Vibration</Text>
                {swithc}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="globe" size={25} color="white" />
                <Text>Langage</Text>
                {swithc}
            </View>


            <TouchableOpacity >
                <View style={StyleGuide.googleButton}>
                    <Image source={require('../assets/google.png')} style={StyleGuide.googlePicto} />
                    <Text style={StyleGuide.titleGoogleButton}> Connexion avec Google</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={StyleGuide.facebookButton} >
                <FontAwesome name="facebook" size={24} color="white" />
                <Text style={StyleGuide.titleFacebookButton}> Connexion avec Facebook</Text>
            </TouchableOpacity>

            <View style={StyleGuide.footer}>
                <SquareButtonBorder onPress={() => props.navigation.navigate("PastBattles")} buttonTitle="PastBattles" />
            </View>
        </ImageBackground>
    );
}