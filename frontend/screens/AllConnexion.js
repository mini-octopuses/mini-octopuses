import React, { useEffect } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Text } from "react-native-elements";

import { FontAwesome } from "@expo/vector-icons";

import Logo from "../components/Logo";
import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";

export default function AllConnexion(props) {
  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={StyleGuide.container}
    >
      <Logo />

      {/* <View style={StyleGuide.googleButton}>
        <Image
          source={require("../assets/google.png")}
          style={StyleGuide.googlePicto}
        />
        <Text style={StyleGuide.titleGoogleButton}> Connexion Google</Text>
      </View> */}

      <TouchableOpacity
        style={StyleGuide.facebookButton}
        onPress={() => props.navigation.navigate("FacebookPage")}
      >
        <FontAwesome name="facebook" size={27} color="white" />
        <Text style={StyleGuide.titleFacebookButton}> Connexion Facebook</Text>
      </TouchableOpacity>

      <SquareButtonBorder
        onPress={() => props.navigation.navigate("SignUp")}
        buttonTitle="S'inscrire"
      />
      <SquareButtonBorder
        onPress={() => props.navigation.navigate("SignIn")}
        buttonTitle="Se connecter"
      />
      <SquareButtonFilled
        onPress={() => props.navigation.navigate("Home")}
        buttonTitle="Jouer en tant qu'invité"
      />
    </ImageBackground>
  );
}
