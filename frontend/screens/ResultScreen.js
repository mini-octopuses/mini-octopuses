import React, {useEffect, useState} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";

import { connect } from 'react-redux';
import {useSelector} from "react-redux";

//* Import icons will be removed later on

function ResultScreen(props) {



    return (
        <ImageBackground
            source={require("../assets/Profile.png")}
            style={StyleGuide.container}
        >
            <FontAwesome style={{ marginTop: 70, color: '#FFCB53' }} name="trophy" size={170} color="white" />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 250 }}>
                <Text style={{ fontSize: 34, color: 'white' }}>Voici ton score</Text>
                {/* <Text style={{ fontSize: 70, color: 'white' }}>{myScore} / 8</Text> */}
                <Text style={{ fontSize: 70, color: 'white' }}> 30/ 8</Text>
            </View>

            <View style={StyleGuide.footer}>

                {/* //* Replay button */}
                <SquareButtonFilled
                    onPress={() => {
                        //* Add code to generate a new game
                        props.navigation.navigate('TrainingScreen')
                    }} buttonTitle="Rejouer" />

                {/* //* Needs to generate fake data */}
                <SquareButtonBorder onPress={() => props.navigation.navigate("HistoryScreen")} buttonTitle="Voir les réponses" />

                {/* //* Needs redirect towards the homePage */}
                <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Accueil" />

            </View>

        </ImageBackground>
    )
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#2b2b2b'
//     },
//     title: {
//         fontSize: 40,
//         fontWeight: 'bold',
//         marginTop: 60,
//         marginBottom: 20
//     }
// });

function mapStateToProps(state) {
    return ({ game: state.game, score:state.score })
}
function mapDispatchToProps(dispatch) {
    return {
        saveGame: function (game) {
            dispatch({ type: 'saveGame', game })
        }
        // ,
        // saveUser: function (user) {
        //     dispatch({ type: 'saveUser', user })
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);