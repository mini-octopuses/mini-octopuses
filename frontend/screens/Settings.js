import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";
import SwitchComponent from "../components/SwitchComponent";

export default function Settings(props) {


    const [effetSonore, setEffetSonore] = useState(false);
    const [musique, setMusique] = useState(false);
    const [vibration, setVibration] = useState(false);
    const [notification, setNotification] = useState(false);
    const [langage, setLangage] = useState(false);

    return (
        <ImageBackground
            source={require("../assets/Profile.png")}
            style={StyleGuide.container}
        >
            <View style={StyleGuide.header}>
                <FontAwesome onPress={() => props.navigation.navigate('Home')} style={{ marginTop: 30, marginLeft: 10 }} name="arrow-left" size={25} color="white" />
            </View>

            <View>
                <Image style={{ width: 130, height: 130, borderRadius: 100 }} source={require('../assets/Laureline.jpeg')} />
                <Text style={{ fontSize: 20, marginBottom: 50, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>#laureloop</Text>
            </View>


            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }} name="volume-up" size={25} color="white" />
                <Text style={{ color: 'white', fontWeight: "bold" }}>Effets sonores</Text>
                <SwitchComponent isEnabled={effetSonore} toggleSwitch={setEffetSonore} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }} name="music" size={25} color="white" />
                <Text style={{ color: 'white', fontWeight: "bold" }}>Musique</Text>
                <SwitchComponent isEnabled={musique} toggleSwitch={setMusique} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }} name="car" size={25} color="white" />
                <Text style={{ color: 'white', fontWeight: "bold" }}>Vibration</Text>
                <SwitchComponent isEnabled={vibration} toggleSwitch={setVibration} />
            </View>


            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }} name="heart" size={25} color="white" />
                <Text style={{ color: 'white', fontWeight: "bold" }}>Notifications</Text>
                <SwitchComponent isEnabled={notification} toggleSwitch={setNotification} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }} name="globe" size={25} color="white" />
                <Text style={{ color: 'white', fontWeight: "bold" }}>Langage</Text>
                <SwitchComponent isEnabled={langage} toggleSwitch={setLangage} />
            </View>

            <SquareButtonFilled onPress={() => props.navigation.navigate("Home")} buttonTitle="Se déconnecter" />
            <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Supprimer le compte" />

        </ImageBackground>
    );
}