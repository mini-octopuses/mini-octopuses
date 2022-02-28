import React from "react";
import { View, Button } from 'react-native';

export default function PageTwo(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2ecc71' }}>
            <Button title="This is page two press this to page one" onPress={() => props.navigation.navigate('PageOne')} />
        </View>
    )
}