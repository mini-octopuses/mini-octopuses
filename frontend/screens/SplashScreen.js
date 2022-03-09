import React, { useEffect } from "react";
import { ImageBackground, Dimensions } from "react-native";

import Logo from "../components/Logo";
import StyleGuide from "../style/styleGuide";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../config";

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      async function loadToken() {
        AsyncStorage.getItem("token", async function (error, data) {
          if (data) {
            let rawResponse = await fetch(
              `${config.myIp}/get-user?token=${data}`
            );
            let response = await rawResponse.json();
            if (response.result) {
              props.saveUser(response.user);
              props.navigation.navigate("Home");
            } else {
              props.navigation.navigate("AllConnexion");
            }
          } else {
            props.navigation.navigate("AllConnexion");
          }
        });
      }
      loadToken();
    }, 1500);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={StyleGuide.container}
    >
      <Logo style={{ marginTop: 100 }} />
    </ImageBackground>
  );
}

function maDispatchToProps(dispatch) {
  return {
    saveUser: function (gameUser) {
      dispatch({ type: "saveUser", gameUser });
    },
  };
}

export default connect(null, maDispatchToProps)(SplashScreen);
