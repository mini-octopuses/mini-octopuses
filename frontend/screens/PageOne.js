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
<<<<<<< HEAD
      <TouchableOpacity
        style={{ marginBottom: 12 }}
        onPress={() => props.navigation.navigate("SplashScreen")}
      >
        <LinearGradient
          start={[0, 0.5]}
          end={[1, 0.5]}
          colors={["#F81C8F", "#FFA353"]}
          style={{ borderRadius: 5 }}
        >
          <View style={StyleGuide.squareButtonBorder}>
            <Text style={StyleGuide.buttonTitle}>Button to Home</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <LinearGradient
          start={[0, 0.5]}
          end={[1, 0.5]}
          colors={["#F81C8F", "#FFA353"]}
          style={{ borderRadius: 5 }}
        >
          <View style={StyleGuide.squareButtonFilled}>
            <Text style={StyleGuide.buttonTitle}>Button to Home</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
=======

      <SquareButtonBorder onPress={() => props.navigation.navigate("Categories")} buttonTitle="Go to Categories" />
      <SquareButtonFilled onPress={() => props.navigation.navigate("Home")} buttonTitle="Go Home" />

    </ImageBackground >
>>>>>>> 3b15ad56e79f82e5eea173daf0cfc0857123c201
  );
}
