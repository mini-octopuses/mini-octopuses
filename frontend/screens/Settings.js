import React, { useState } from "react";
import { View, Text, ImageBackground, Image, Dimensions } from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";
import SwitchComponent from "../components/SwitchComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";

function Settings(props) {
  const [effetSonore, setEffetSonore] = useState(false);
  const [musique, setMusique] = useState(false);
  const [vibration, setVibration] = useState(false);
  const [notification, setNotification] = useState(false);
  const [langageFr, setLangageFr] = useState(true);

  const isLanguage = () => {
    setLangageFr(!langageFr);
  };

  return (
    <ImageBackground
      source={require("../assets/Profile.png")}
      style={StyleGuide.container}
    >
      <View style={StyleGuide.header}>
        <FontAwesome
          onPress={() => props.navigation.goBack(null)}
          style={{ marginTop: 30, marginLeft: 10 }}
          name="arrow-left"
          size={25}
          color="white"
        />
      </View>

      <View>
        <Image
          style={{ width: 130, height: 130, borderRadius: 100 }}
          source={require("../assets/octo_blue.png")}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 50,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          #{props.user.username}
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: -40,
        }}
      >
        <Image
          style={{
            width: Dimensions.get("window").width / 3.5,
            height: Dimensions.get("window").height / 5.5,
            borderRadius: 100,
          }}
          source={require("../assets/octo_blue.png")}
        />
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
              marginLeft: 10,
            }}
          >
            #{props.user.username}
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <FontAwesome
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="music"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 130 }}>
          Musique
        </Text>
        <SwitchComponent isEnabled={musique} toggleSwitch={setMusique} />
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="vibration"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 130 }}>
          Vibration
        </Text>
        <SwitchComponent isEnabled={vibration} toggleSwitch={setVibration} />
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="notifications"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 130 }}>
          Notifications
        </Text>
        <SwitchComponent
          isEnabled={notification}
          toggleSwitch={setNotification}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <FontAwesome
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="globe"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 160 }}>
          Langage{" "}
        </Text>
        <Text
          onPress={isLanguage}
          style={{
            margin: 3,
            color: langageFr ? "orange" : "white",
            fontWeight: "bold",
          }}
        >
          {" "}
          FR{" "}
        </Text>
        <Text
          onPress={isLanguage}
          style={{ color: langageFr ? "white" : "orange", fontWeight: "bold" }}
        >
          {" "}
          EN{" "}
        </Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="vibration"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 130 }}>
          Vibration
        </Text>
        <SwitchComponent isEnabled={vibration} toggleSwitch={setVibration} />
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="notifications"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 130 }}>
          Notifications
        </Text>
        <SwitchComponent
          isEnabled={notification}
          toggleSwitch={setNotification}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <FontAwesome
          style={{ marginTop: 10, marginRight: 10, paddingBottom: 10 }}
          name="globe"
          size={25}
          color="white"
        />
        <Text style={{ color: "white", fontWeight: "bold", width: 160 }}>
          Langage{" "}
        </Text>
        <Text
          onPress={isLanguage}
          style={{
            margin: 3,
            color: langageFr ? "orange" : "white",
            fontWeight: "bold",
          }}
        >
          {" "}
          FR{" "}
        </Text>
        <Text
          onPress={isLanguage}
          style={{ color: langageFr ? "white" : "orange", fontWeight: "bold" }}
        >
          {" "}
          EN{" "}
        </Text>
      </View>

      <View style={{ marginBottom: 30 }}>
        <SquareButtonFilled
          onPress={() => {
            AsyncStorage.removeItem("token");
            AsyncStorage.clear();
            props.navigation.navigate("AllConnexion");
          }}
          buttonTitle="Se déconnecter"
        />
      </View>
    </ImageBackground>
  );
}

function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps, null)(Settings);
