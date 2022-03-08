import React, { useState } from "react";
import { View, ImageBackground, Image, Dimensions } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";
import FormInput from "../components/FormInput";
import configIp from "../config";

function ProfileSettings(props) {
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.email);
  const [message, setMessage] = useState("");

  async function updateUser() {
    let rawResponse = await fetch(`${configIp.myIp}/update-user`, {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${email}&username=${username}&token=${props.user.token}`,
    });
    let response = await rawResponse.json();
    if (response.result) {
      props.saveUser(response.updatedUser);
      setMessage(response.message);
    } else {
      console.log(response.message);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/Profile.png")}
      style={StyleGuide.container}
    >
      <View style={StyleGuide.header}>
        <FontAwesome
          onPress={() => {
            props.navigation.navigate("Profile");
            setMessage("");
          }}
          style={{
            marginTop: 30,
            marginLeft: 10,
          }}
          name="arrow-left"
          size={25}
          color="white"
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: Dimensions.get("window").height / 12,
        }}
      >
        <Image
          style={{ width: 130, height: 130, borderRadius: 200 }}
          source={require("../assets/octo_blue.png")}
        />
        <Text h4 style={{ fontSize: 18, marginBottom: 50, color: "white" }}>
          #{props.user.username}
        </Text>
      </View>

      <View style={{ marginTop: Dimensions.get("window").height / 3 }}>
        <Text style={{ textAlign: "center", color: "#fff" }}>{message}</Text>
        <FormInput
          placeholder="Prénom / Pseudo"
          icon="updatePseudo"
          value={username}
          onChangeText={(val) => setUsername(val)}
        />
      </View>

      <View style={{ marginBottom: Dimensions.get("window").height / 10 }}>
        <FormInput
          placeholder="Email"
          icon="updateEmail"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
      </View>

      <View style={{ justifyContent: "flex-end" }}>
        <SquareButtonFilled
          onPress={() => updateUser()}
          buttonTitle="Enregistrer les modifications"
        />
        <SquareButtonBorder
          onPress={() => props.navigation.navigate("AllConnexion")}
          buttonTitle="Supprimer le compte"
        />
      </View>
    </ImageBackground>
  );
}

// ATTENTION lorsqu'on veut lire une props redux il faut obligatoirement mettre la fonction et l'exporter
function mapStatesToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dsipatch) {
  return {
    saveUser: function (gameUser) {
      dsipatch({ type: "saveUser", gameUser });
    },
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(ProfileSettings);
