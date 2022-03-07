import React, { useEffect } from "react";
import { ImageBackground, Dimensions } from "react-native";

import Logo from "../components/Logo";
import StyleGuide from "../style/styleGuide";

export default function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      console.log("This will run after 1 second!");
      props.navigation.navigate("AllConnexion");
    }, 2500);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={StyleGuide.container}
    >
      <Logo />
    </ImageBackground>
  );
}
