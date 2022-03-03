import React from "react";

import { ImageBackground } from "react-native";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";


export default function PageOne(props) {
  return (
    <ImageBackground
      source={require("../assets/training_bc.png")}
      style={StyleGuide.container}
    >

      <SquareButtonBorder onPress={() => props.navigation.navigate("Categories")} buttonTitle="Go to Categories" />
      <SquareButtonFilled onPress={() => props.navigation.navigate("Home")} buttonTitle="Go Home" />

    </ImageBackground >
  );
}
