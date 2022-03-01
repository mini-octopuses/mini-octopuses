import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StyleGuide from "../style/styleGuide";
import { FontAwesome } from '@expo/vector-icons';


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


            <FontAwesome onPress={() => props.navigation.navigate('Home')} style={{ marginTop: 10, marginRight: 10 }} name="arrow-left" size={25} color="white" />

            <View>
                <Image style={StyleGuide.profileImage} source={require('../assets/Laureline.jpeg')} />
                <Text style={{ marginLeft: 10 }}>#Laureloop</Text>
            </View>


            <Text>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="volume-up" size={25} color="white" />
                Effets sonores
                {swithc}
            </Text>

            <Text>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="music" size={25} color="white" />
                Musique
                {swithc}
            </Text>

            <Text>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="car" size={25} color="white" />
                Vibration
                {swithc}
            </Text>

            <Text>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="heart" size={25} color="white" />
                Notifications
                {swithc}
            </Text>

            <Text>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="globe" size={25} color="white" />
                Langage
            </Text>


            <View style={StyleGuide.buttonMargin}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                    <LinearGradient
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={["#F81C8F", "#FFA353"]}
                        style={{ borderRadius: 5 }}
                    >
                        <View style={StyleGuide.buttonGradient}>
                            <Text style={StyleGuide.button}>Button to Home</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={StyleGuide.buttonStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate("SplashScreen")}>
                    <LinearGradient
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={["#F81C8F", "#FFA353"]}
                        style={{ borderRadius: 5 }}
                    >
                        <View style={StyleGuide.buttonGradientFilled}>
                            <Text style={StyleGuide.buttonFilled}>Button to page 2</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
