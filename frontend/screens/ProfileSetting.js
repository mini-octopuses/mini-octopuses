import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
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
          #{props.user.username}
        </Text>
      </View>

      <FormInput
        placeholder="Prénom / Pseudo"
        icon="pseudo"
        value={username}
        onChangeText={(val) => setUsername(val)}
      />

      <FormInput
        placeholder="Email"
        icon="email"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <FormInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={(val) => setPassword(val)}
      />

      <SquareButtonBorder onPress={() => signUp()} buttonTitle="Valider" />
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
  return { user: state.user };
}

export default connect(mapStatesToProps, null)(ProfileSettings);
