import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";

import StyleGuide from "../style/styleGuide";
import FormInput from "../components/FormInput";
import configIp from "../config.js";
import Logo from "../components/Logo";
import SquareButtonBorder from "../components/SquareButtonBorder";
import { FontAwesome } from "@expo/vector-icons";


function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    let user = await fetch(`${configIp.myIp}/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${email}&password=${password}`,
    });
    let backResponse = await user.json();
    if (backResponse.result) {
      props.saveUser(backResponse.user);
      props.navigation.navigate("Home");
    }
  };

  return (
    <View style={StyleGuide.container}>
      <View style={StyleGuide.header}>
        <FontAwesome
          onPress={() => props.navigation.goBack()}
          style={{ marginTop: 30, marginLeft: 10 }}
          name="arrow-left"
          size={25}
          color="white"
        />
      </View>
      <Logo />
      <Text h3>Connexion</Text>

      <FormInput
        placeholder="Email"
        icon="email"
        value={email}
        onChangeText={(val) => setEmail(val)}
      />
      <FormInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={(val) => setPassword(val)}
      />

      <SquareButtonBorder onPress={() => signIn()} buttonTitle="Valider" />
    </View>
  );
}

function maDispatchToProps(dispatch) {
  return {
    saveUser: function (gameUser) {
      dispatch({ type: "saveUser", gameUser });
    },
  };
}

function mapStatesToProps(state) {
  return { user: state.user };
}

export default connect(mapStatesToProps, maDispatchToProps)(SignIn);
