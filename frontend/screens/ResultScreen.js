import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";

import { connect } from 'react-redux';
import config from '../config';

function ResultScreen(props) {
    let myScore = 0;

    async function generateGame() {
        let rawResponse = await fetch(`${config.myIp}/generate-game`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: 'deviceLang=EN&topics=JavaScript/Regex'
        });
        let response = await rawResponse.json()
        if (response.result) {
            //* Check backend not responding with the correct schema
            props.saveGame(response.game)
            props.navigation.navigate("TrainingScreen");
        }
    }

    return (
        <ImageBackground
            source={require("../assets/Profile.png")}
            style={StyleGuide.container}
        >
            <FontAwesome style={{ marginTop: 70, color: '#FFCB53' }} name="trophy" size={170} color="white" />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 250 }}>
                <Text style={{ fontSize: 34, color: 'white' }}>Voici ton score</Text>
                {/* <Text style={{ fontSize: 70, color: 'white' }}>{myScore} / 8</Text> */}
                {/* <Text style={{ fontSize: 70, color: 'white' }}>{myScore} / 8</Text> */}
                <Text style={{ fontSize: 70, color: 'white' }}>{props.game.score} / 8</Text>
            </View>

            <View style={StyleGuide.footer}>

                {/* //* Replay button */}
                <SquareButtonFilled
                    onPress={() => {
                        //* Add code to generate a new game
                        generateGame()
                        // props.navigation.navigate('TrainingScreen')
                    }} buttonTitle="Rejouer" />

                {/* //* Needs to generate fake data */}
                <SquareButtonBorder onPress={() => props.navigation.navigate("HistoryScreen")} buttonTitle="Voir les réponses" />

                {/* //* Needs redirect towards the homePage */}
                <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Accueil" />

            </View>

        </ImageBackground>
    )
}

function mapStateToProps(state) {
    return ({ game: state.game })
}
function mapDispatchToProps(dispatch) {
    return {
        saveGame: function (game) {
            dispatch({ type: 'saveGame', game })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);