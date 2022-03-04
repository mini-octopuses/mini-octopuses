import React from "react";
import { View, Switch } from "react-native";

export const SwitchComponent = (props) => {

  return (
    <View>
      <Switch
        trackColor={{ false: "#fff", true: "#fff" }}
        thumbColor={props.isEnabled ? "#FFA353" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={props.toggleSwitch}
        value={props.isEnabled}
      />
    </View>
  );
};

export default SwitchComponent;