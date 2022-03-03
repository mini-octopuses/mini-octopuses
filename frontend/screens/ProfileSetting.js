import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";

function ProfileSettings(props) {
  return (
    <ImageBackground
      source={require("../assets/Profile.png")}
      style={StyleGuide.container}
    >
      <View style={StyleGuide.header}>
        <FontAwesome
          onPress={() => props.navigation.navigate("Profile")}
          style={{ marginTop: 30, marginLeft: 10 }}
          name="arrow-left"
          size={25}
          color="white"
        />
      </View>

      <View>
        <Image
          style={{ width: 130, height: 130, borderRadius: 50 }}
          source={require("../assets/Laureline.jpeg")}
        />
        <Text style={{ fontSize: 20, marginBottom: 50 }}>
          test #{props.user.username}
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <FontAwesome
          style={{ marginTop: 10, marginRight: 10 }}
          name="volume-up"
          size={25}
          color="white"
        />
      </View>
      <SquareButtonFilled
        onPress={() => props.navigation.navigate("Home")}
        buttonTitle="Enregistrer les modifications"
      />
      <SquareButtonBorder
        onPress={() => props.navigation.navigate("SplashScreen")}
        buttonTitle="Supprimer le compte"
      />
    </ImageBackground>
  );
}

// ATTENTION lorsqu'on veut lire une props redux il faut obligatoirement mettre la fonction et l'exporter
function mapStatesToProps(state) {
  console.log(state);
  return { user: state.user };
}

export default connect(mapStatesToProps, null)(ProfileSettings);