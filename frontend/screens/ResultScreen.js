
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

//* Import icons will be removed later on
// import { FontAwesome } from '@expo/vector-icons';

function ResultScreen(props) {
    let myScore = 0;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={styles.container}>
                <Text style={{ fontSize: 34, color: 'white' }}>Voici ton score</Text>
                <Text style={{ fontSize: 34, color: 'white' }}>{myScore} / 8</Text>

                <Button title='REJOUER' onPress={() => console.log('Pressing replay button')} />

                {/* //* Needs redirect towards another page */}
                <Button title='VOIR les réponses' onPress={() => {
                    console.log('Pressing history button')
                    props.navigation.navigate('HistoryScreen')
                }} />

                {/* //* Needs redirect towards the homePage */}
                <Button title='Accueil' onPress={() => console.log('Pressing homePage button')} />
            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2b2b2b'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 20
    }
});

export default ResultScreen