import React, { useState } from "react";
import { View, Text, ImageBackground, Image, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";
import FormInput from "../components/FormInput";

function ProfileSettings(props) {
  return (
    <ImageBackground
      source={require("../assets/Profile.png")}
      style={StyleGuide.container}
    >
      <View style={StyleGuide.header}>
        <FontAwesome
          onPress={() => props.navigation.navigate("Profile")}
          style={{
            marginTop: 30,
            marginLeft: 10,
          }}
          name="arrow-left"
          size={25}
          color="white"
        />
      </View>

      <View
        style={{
          position: "absolute",
          top: Dimensions.get("window").height / 12,
        }}
      >
        <Image
          style={{ width: 130, height: 130, borderRadius: 200 }}
          source={require("../assets/Laureline.jpeg")}
        />
        <Text style={{ fontSize: 18, marginBottom: 50 }}>
          #{props.user.username}
        </Text>
      </View>

      <View style={{ marginTop: Dimensions.get("window").height / 3 }}>
        <FormInput
          placeholder="Prénom / Pseudo"
          icon="pseudo"
          value={props.user.username}
          onChangeText={(val) => setUsername(val)}
        />
      </View>

      <View style={{ marginBottom: Dimensions.get("window").height / 10 }}>
        <FormInput
          placeholder="Email"
          icon="email"
          value={props.user.email}
          onChangeText={(val) => setEmail(val)}
        />
      </View>

      <View style={{ justifyContent: "flex-end" }}>
        <SquareButtonFilled
          onPress={() => props.navigation.navigate("Home")}
          buttonTitle="Enregistrer les modifications"
        />
        <SquareButtonBorder
          onPress={() => props.navigation.navigate("SplashScreen")}
          buttonTitle="Supprimer le compte"
        />
      </View>
    </ImageBackground>
  );
}

// ATTENTION lorsqu'on veut lire une props redux il faut obligatoirement mettre la fonction et l'exporter
function mapStatesToProps(state) {
  return { user: state.user };
}

function maDispatchToProps(dispatch) {
  return {
    saveUser: function (gameUser) {
      dispatch({ type: "saveUser", gameUser });
    },
  };
}

export default connect(mapStatesToProps, maDispatchToProps)(ProfileSettings);
