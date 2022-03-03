import React from 'react';
import {View} from "react-native";

export const Switch = (props) => {
    return (
        <View>
            const switchbtn = <Switch
                trackColor={{ false: "#fff", true: "#fff" }}
                thumbColor={isEnabled ? "#FFA353" : "#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.toggleSwitch}
                value={isEnabled}/>
        </View>
    );
};

export default Switch;