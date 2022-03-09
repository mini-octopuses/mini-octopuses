import React, { useEffect } from "react";
import { ImageBackground, Dimensions } from "react-native";

import Logo from "../components/Logo";
import StyleGuide from "../style/styleGuide";

export default function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("AllConnexion");
    }, 1500);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={StyleGuide.container}
    >
      <Logo style={{ marginTop: 100 }} />
    </ImageBackground>
  );
}
