import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import StyleGuide from "../style/styleGuide";

function Profile(props) {
  return (
    <ImageBackground
      source={require("../assets/Profile.png")}
      style={{
        flex: 1,
        position: "relative",
        backgroundColor: "#2B2B2B",
      }}
    >
      <View style={StyleGuide.header}>
        <FontAwesome
          onPress={() => props.navigation.goBack(null)}
          style={{ marginTop: 30, marginLeft: 10 }}
          name="arrow-left"
          size={25}
          color="white"
        />
        <FontAwesome
          onPress={() => props.navigation.navigate("Settings")}
          style={{ marginTop: 30, marginRight: 10 }}
          name="gear"
          size={35}
          color="white"
        />
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
          <FontAwesome5
            style={{ marginLeft: 10, position: "relative", bottom: 3 }}
            name="pen"
            size={24}
            color="white"
            onPress={() => props.navigation.navigate("ProfileSetting")}
          />
        </View>
      </View>

      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 18, marginTop: 40, color: "white" }}>
          Voici ta progression 🎉
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 40,
              color: "white",
              width: Dimensions.get("window").width * 0.8,
            }}
          >
            HTML
          </Text>
          <Text style={{ fontSize: 18, marginTop: 40, color: "white" }}>
            40%
          </Text>
        </View>
        <View
          style={{
            width: Dimensions.get("window").width * 0.9,
            backgroundColor: "#FFA353",
            height: 25,
            borderRadius: 100,
            marginTop: 10,
          }}
        >
          <Text>
            <View
              style={{
                width: Dimensions.get("window").width * 0.45,
                backgroundColor: "#F81C8F",
                height: 25,
                borderRadius: 100,
                marginTop: 10,
              }}
            >
              <Text> </Text>
            </View>{" "}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 40,
              color: "white",
              width: Dimensions.get("window").width * 0.8,
            }}
          >
            CSS
          </Text>
          <Text style={{ fontSize: 18, marginTop: 40, color: "white" }}>
            90%
          </Text>
        </View>
        <View
          style={{
            width: Dimensions.get("window").width * 0.9,
            backgroundColor: "#FFA353",
            height: 26,
            borderRadius: 100,
            marginTop: 10,
          }}
        >
          <Text>
            <View
              style={{
                width: Dimensions.get("window").width * 0.8,
                backgroundColor: "#F81C8F",
                height: 26,
                borderRadius: 100,
                marginTop: 10,
              }}
            >
              <Text> </Text>
            </View>{" "}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 18,
              marginTop: 40,
              color: "white",
              width: Dimensions.get("window").width * 0.8,
            }}
          >
            React
          </Text>
          <Text style={{ fontSize: 18, marginTop: 40, color: "white" }}>
            10%
          </Text>
        </View>
        <View
          style={{
            width: Dimensions.get("window").width * 0.9,
            backgroundColor: "#FFA353",
            height: 26,
            borderRadius: 100,
            marginTop: 10,
            marginBottom: 50,
          }}
        >
          <Text>
            <View
              style={{
                width: Dimensions.get("window").width * 0.2,
                backgroundColor: "#F81C8F",
                height: 26,
                borderRadius: 100,
                marginTop: 10,
              }}
            >
              <Text> </Text>
            </View>{" "}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("PastBattles")}
        style={{ marginBottom: 20 }}
      >
        <LinearGradient
          start={[0, 0.5]}
          end={[1, 0.5]}
          colors={["#F81C8F", "#FFA353"]}
          style={{
            borderRadius: 5,
            width: Dimensions.get("window").width / 1.3 + 6,
            marginLeft: Dimensions.get("window").width / 10,
          }}
        >
          <View style={StyleGuide.squareButtonFilled}>
            <Text style={StyleGuide.buttonTitle}>Quizz terminés</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
}

function mapStatesToProps(state) {
  return { user: state.user };
}

export default connect(mapStatesToProps, null)(Profile);
