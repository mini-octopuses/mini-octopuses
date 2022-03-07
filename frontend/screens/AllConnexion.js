import React, { useEffect, useState } from "react";
import { View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

import { FontAwesome } from "@expo/vector-icons";

import Logo from "../components/Logo";
import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";
import config from "../config";
import { connect } from "react-redux";

import AsyncStorage from '@react-native-async-storage/async-storage';


function AllConnexion(props) {
  // const [token, setToken] = useState("")
  useEffect(() => {
    async function loadToken() {
      AsyncStorage.getItem('token', async function (error, data) {
        console.log("Token found: ", data)
        let rawResponse = await fetch(`${config.myIp}/get-user?token=${data}`);
        let response = await rawResponse.json()

        if (response.result) {
          props.saveUser(response.user)
          props.navigation.navigate("Home");
        }
        console.log(response)
        // setToken(token)
      })
    }
    loadToken();
  }, []);

  // if(token)
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const guestSignUp = async () => {
    let number = getRandomInt(1, 9999);
    let user = await fetch(`${config.myIp}/sign-up`, {
      method: "POST",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=Guest${number}&email=guest${number}@guest.com&password=ocotopuses&isGuest=true`,
    });
    let backResponse = await user.json();
    if (backResponse.result) {
      props.saveUser(backResponse.user);
      AsyncStorage.setItem('token', backResponse.user.token);
      props.navigation.navigate("Home");
    }
  };

  return (
    <ImageBackground source={require('../assets/bg.png')} style={StyleGuide.container}>
      <Logo />

      <View style={StyleGuide.googleButton}>
        <Image source={require("../assets/google.png")} style={StyleGuide.googlePicto} />
        <Text style={StyleGuide.titleGoogleButton}> Connexion Google</Text>
      </View>

      <TouchableOpacity style={StyleGuide.facebookButton} onPress={() => props.navigation.navigate("FacebookPage")} >
        <FontAwesome name="facebook" size={27} color="white" />
        <Text style={StyleGuide.titleFacebookButton}> Connexion Facebook</Text>
      </TouchableOpacity>

      <SquareButtonBorder onPress={() => props.navigation.navigate("SignUp")} buttonTitle="S'inscrire" />
      <SquareButtonBorder onPress={() => props.navigation.navigate("SignIn")} buttonTitle="Se connecter" />
      <SquareButtonFilled onPress={() => guestSignUp()} buttonTitle="Jouer en tant qu'invité" />
    </ImageBackground>
  )
}


function maDispatchToProps(dispatch) {
  return {
    saveUser: function (gameUser) {
      dispatch({ type: "saveUser", gameUser });
    }
  };
}


export default connect(null, maDispatchToProps)(AllConnexion)
