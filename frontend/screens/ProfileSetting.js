import React, { useState } from "react";
import { View, ImageBackground, Image, Dimensions } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Root, Popup } from "react-native-popup-confirm-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";
import FormInput from "../components/FormInput";
import configIp from "../config";

function ProfileSettings(props) {
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.email);

  async function updateUser() {
    console.log("tutu");
    let rawResponse = await fetch(`${configIp.myIp}/update-user`, {
      method: "PUT",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${email}&username=${username}&token=${props.user.token}`,
    });
    let response = await rawResponse.json();
    if (response.result) {
      props.saveUser(response.updatedUser);
      // setMessage(response.message);
      Popup.show({
        icon: require("../assets/user.png"),
        type: "success",
        title: "Super !",
        titleTextStyle: {
          color: "#222163",
          fontWeight: "bold",
          fontSize: 22,
          textAlign: "center",
        },
        textBody: "Vos modifications ont bien été enregistrées.",
        descTextStyle: {
          marginTop: 5,
          fontSize: 16,
          color: "#222163",
          fontWeight: "normal",
          textAlign: "center",
        },
        timing: 3000,
        okButtonStyle: { display: "none" },
        modalContainerStyle: {
          borderRadius: 20,
          alignItems: "center",
          padding: 10,
        },
        cancelCallback: () => Popup.hide(),
      });
    } else {
      console.log(response.message);
    }
  }

  async function deleteUser() {
    let rawResponse = await fetch(`${configIp.myIp}/delete-user`, {
      method: "DELETE",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `token=${props.user.token}`,
    });
    let response = await rawResponse.json();
    if (response.result) {
      AsyncStorage.removeItem("token");
      AsyncStorage.clear();
      props.navigation.navigate("AllConnexion");
    } else {
      console.log("Error: User deletion failed");
    }
  }

  return (
    <Root>
      <ImageBackground
        source={require("../assets/Profile.png")}
        style={StyleGuide.container}
      >
        <View style={StyleGuide.header}>
          <FontAwesome
            onPress={() => {
              props.navigation.goBack(null);
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
          {/* <Text style={{ textAlign: "center", color: "#fff" }}>{message}</Text> */}
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
            onPress={() =>
              Popup.show({
                icon: require("../assets/deleteUser.png"),
                type: "confirm",
                title: "Attention!",
                textBody: "Etes vous sûre de vouloir supprimer votre compte ?",
                descTextStyle: {
                  marginTop: 5,
                  fontSize: 16,
                  color: "#222163",
                  fontWeight: "normal",
                  textAlign: "center",
                },
                buttonText: "Confirmer",
                okButtonStyle: { backgroundColor: "#F81C8F" },
                confirmButtonStyle: { backgroundColor: "#F81C8F" },
                confirmText: "Annuler",
                confirmButtonTextStyle: { color: "#fff" },
                callback: () => {
                  deleteUser();
                  Popup.hide();
                },
                cancelCallback: () => {
                  Popup.hide();
                },
              })
            }
            buttonTitle="Supprimer le compte"
          />
        </View>
      </ImageBackground>
    </Root>
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
