import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";
import SwitchComponent from "../components/SwitchComponent";

export default function Settings(props) {


    const [effetSonore, setEffetSonore] = useState(false);
    const [musique, setMusique] = useState(false);
    const [vibration, setVibration] = useState(false);
    const [notification, setNotification] = useState(false);
    const [langageFr, setLangageFr] = useState(true);


    const isLanguage = () => {
        setLangageFr(!langageFr)
    }

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
                <Text style={{ color: 'white', fontWeight: "bold", width: 130 }}>Effets sonores</Text>
                <SwitchComponent isEnabled={effetSonore} toggleSwitch={setEffetSonore} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }} name="music" size={25} color="white" />
                <Text style={{ color: 'white', fontWeight: "bold", width: 130 }}>Musique</Text>
                <SwitchComponent isEnabled={musique} toggleSwitch={setMusique} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }} name="vibration" size={25} color="white" />
                <Text style={{ color: 'white', fontWeight: "bold", width: 130 }}>Vibration</Text>
                <SwitchComponent isEnabled={vibration} toggleSwitch={setVibration} />
            </View>



            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                <Ionicons style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }} name="notifications" size={25} color="white" />
                <Text style={{ color: 'white', fontWeight: "bold", width: 130 }}>Notifications</Text>
                <SwitchComponent isEnabled={notification} toggleSwitch={setNotification} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <FontAwesome style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }} name="globe" size={25} color="white" />
                <Text style={{ color: 'white', fontWeight: "bold", width: 160 }}>Langage </Text>
                <Text onPress={isLanguage} style={{ margin: 3, color: langageFr ? 'orange' : 'white', fontWeight: 'bold' }}> FR </Text>
                <Text onPress={isLanguage} style={{ color: langageFr ? 'white' : 'orange', fontWeight: 'bold' }}> EN </Text>
            </View>


            <SquareButtonFilled onPress={() => props.navigation.navigate("Home")} buttonTitle="Se déconnecter" />
            <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Supprimer le compte" />

        </ImageBackground>
    );
}