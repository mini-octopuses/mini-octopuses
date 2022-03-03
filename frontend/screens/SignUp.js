import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { connect } from "react-redux";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import FormInput from "../components/FormInput";
import Logo from "../components/Logo";

import config from "../config";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    let user = await fetch(`${config.myIp}/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `username=${username}&email=${email}&password=${password}&isGuest=false`,
    });
    let backResponse = await user.json();

    console.log(backResponse);
    if (backResponse.result) {
      props.saveUser(backResponse.user);
      props.navigation.navigate("Home");
    }
    console.log(backResponse);
  };

  return (
    <View style={StyleGuide.container}>
      <Logo />
      <Text h3>Inscription</Text>

      <FormInput
        placeholder="Prénom / Pseudo"
        icon="pseudo"
        value={username}
        onChangeText={(val) => setUsername(val)}
      />

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

      <SquareButtonBorder onPress={() => signUp()} buttonTitle="Confirmer" />
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
  console.log(state);
  return { user: state.user };
}

export default connect(mapStatesToProps, maDispatchToProps)(SignUp);
