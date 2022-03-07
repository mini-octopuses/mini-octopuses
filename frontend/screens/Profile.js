import React from "react";
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import SquareButtonBorder from "../components/SquareButtonBorder";
import StyleGuide from "../style/styleGuide";

function Profile(props) {
    return (

        <ImageBackground source={require("../assets/Profile.png")} style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <FontAwesome onPress={() => props.navigation.navigate("Home")} style={{ marginTop: 30, marginLeft: 10 }} name="arrow-left" size={25} color="white" />
                <FontAwesome onPress={() => props.navigation.navigate("Settings")} style={{ marginTop: 30, marginRight: 10 }} name="gear" size={35} color="white" />
            </View>


            <View style={{ alignItems: 'center', color: "white" }}>
                <Image style={{ width: 130, height: 130, borderRadius: 100 }} source={require('../assets/octo_blue.png')} />
                <Text style={{ fontSize: 20, marginBottom: 50, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>#{props.user.username}
                    <FontAwesome5 name="pen" size={24} color="white" onPress={() => props.navigation.navigate("ProfileSetting")} /></Text>

                <Text style={{ fontSize: 20, marginBottom: 20, color: "white" }}>Voici ta progression</Text>

            </View>

            <View style={StyleGuide.footer}>
                <SquareButtonBorder onPress={() => props.navigation.navigate("PastBattles")} buttonTitle="Batailles Passées" />
            </View>
        </ImageBackground>

    );
}

function mapStatesToProps(state) {
    return { user: state.user };
}

export default connect(mapStatesToProps, null)(Profile);
