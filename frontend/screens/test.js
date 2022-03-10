import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";

import { Root, Toast } from "react-native-popup-confirm-toast";

function TestPage() {
  return (
    <Root>
      <View>
        <TouchableOpacity
          onPress={() => {
            Toast.show({
              title: "Dikkat!",
              text: "Mutlak özgürlük, kendi başına hiçbir anlam ifade etmez.",
              color: "#702c91",
              timeColor: "#440f5f",
              timing: 5000,
              icon: <FontAwesome5 name="user-check" size={24} color="green" />,
              position: "bottom",
            });
          }}
        >
          <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={["#F81C8F", "#FFA353"]}
            style={{ borderRadius: 5 }}
          >
            <View style={styles.squareButtonFilled}>
              <Text style={styles.buttonTitle}>Test toast</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Root>
  );
}

const styles = StyleSheet.create({
  buttonTitle: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 20,
  },
  squareButtonFilled: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    backgroundColor: ["#F81C8F", "#FFA353"],
    borderRadius: 5,
    width: Dimensions.get("window").width / 1.3 + 6,
    height: Dimensions.get("window").height / 15 + 6,
  },
});

export default TestPage;
