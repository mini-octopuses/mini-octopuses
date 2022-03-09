import React, { useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native'

import Logo from "../components/Logo";
import StyleGuide from "../style/styleGuide";

export default function SplashScreen(props) {



  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("AllConnexion");
    }, 3000);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={StyleGuide.container}
    >
 
      <Logo style={{ marginTop: 100 }} />

      <LottieView 
        style={styles.loading}
        source={require("../assets/lottie/loading.json")}
        autoPlay
       />
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  loading:{
    paddingTop:50,
    height:400,
  }
})