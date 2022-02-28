import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StyleGuide from "../style/styleGuide";

export default function PageOne(props) {
  return (
    <ImageBackground
      source={require("../assets/training_bc.png")}
      style={StyleGuide.container}
    >
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
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SplashScreen")}
        >
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
