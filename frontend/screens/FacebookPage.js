import React from "react";
import { Image, Dimensions, View } from "react-native";
import { Button } from "react-native-elements";

import StyleGuide from "../style/styleGuide";

export default function FacebookPage(props) {
  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 1000,
          top: Dimensions.get("window").height / 1.4,
          left: Dimensions.get("window").width / 12,
        }}
      >
        <Button
          buttonStyle={{
            width: Dimensions.get("window").width / 1.19,
            height: Dimensions.get("window").height / 12,
            marginBottom: 10,
            borderRadius: 10,
            backgroundColor: "#4267B2",
          }}
          onPress={() => props.navigation.navigate("Home")}
          title="Se connecter en tant que Hiken"
        ></Button>
        <Button
          buttonStyle={{
            width: Dimensions.get("window").width / 1.19,
            height: Dimensions.get("window").height / 12,
            borderRadius: 10,
            backgroundColor: "lightgrey",
          }}
          onPress={() => props.navigation.navigate("AllConnexion")}
          title="Annuler"
        ></Button>
      </View>
      <Image
        source={require("../assets/facebook.png")}
        style={{
          width: Dimensions.get("window").width / 1,
          height: Dimensions.get("window").height / 0.9,
        }}
      />
    </View>
  );
}
