import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StyleGuide from "../style/styleGuide";

export default function PageOne(props) {
  return (
    <View style={StyleGuide.container}>
      <View style={StyleGuide.buttonStyle}>
        <TouchableOpacity onPress={() => props.navigation.navigate("PageTwo")}>
          <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={["#F81C8F", "#FFA353"]}
            style={{ borderRadius: 5 }}
          >
            <View style={StyleGuide.buttonGradient}>
              <Text style={StyleGuide.button}>Button to page 2</Text>
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
    </View>
  );
}

// { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2ecc71' }
