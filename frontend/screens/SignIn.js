import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";

import StyleGuide from "../style/styleGuide";
import FormInput from "../components/FormInput";
import configIp from "../config.js";
import Logo from "../components/Logo";

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
      //   console.log("titi", backResponse);
      props.saveUser(backResponse.user);
      props.navigation.navigate("Home");
    }
    // console.log("tutu", backResponse);
  };

  return (
    <View style={StyleGuide.container}>
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

      <View style={StyleGuide.buttonStyle}>
        <TouchableOpacity onPress={() => signIn()}>
          <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={["#F81C8F", "#FFA353"]}
            style={{ borderRadius: 5 }}
          >
            <View style={StyleGuide.buttonGradient}>
              <Text style={StyleGuide.buttonTitle}> Valider</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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

export default connect(mapStatesToProps, maDispatchToProps)(SignIn);
