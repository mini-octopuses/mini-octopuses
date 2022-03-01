import React from "react";
import { View, Button } from 'react-native';

export default function PageTwo(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2ecc71' }}>
            <Button title="Press this to go to result page"
                onPress={() => {
                    console.log('going to result page')
                    props.navigation.navigate('ResultScreen')
                }} />
        </View>
    )
}