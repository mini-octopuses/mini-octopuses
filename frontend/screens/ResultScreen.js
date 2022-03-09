import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";

import { connect } from 'react-redux';
import config from '../config';

//* Import icons will be removed later on

function ResultScreen(props) {
    useEffect(() => {
        props.setTimeZero()
    }, [props.time])

    async function generateGame() {
        let rawResponse = await fetch(`${config.myIp}/generate-game`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `deviceLang=EN&topics=${props.user.topics}`
        });
        let response = await rawResponse.json()
        if (response.result) {
            props.saveGame(response.game)
            props.setTimeZero()
            props.resetPos()
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
                <Text style={{ fontSize: 70, color: 'white' }}>{props.game.score} / 8</Text>
            </View>

            <View style={StyleGuide.footer}>
                <SquareButtonFilled onPress={() => { generateGame() }} buttonTitle="Rejouer" />
                <SquareButtonBorder onPress={() => {
                    props.navigation.navigate("HistoryScreen")
                    props.setTimeZero()
                    props.resetPos()
                }} buttonTitle="Voir les réponses" />
                <SquareButtonBorder onPress={() => {
                    props.setTimeZero()
                    props.resetPos()
                    props.navigation.navigate("Home")
                }} buttonTitle="Accueil" />
            </View>
        </ImageBackground>
    )
}

function mapStateToProps(state) {
    return ({
        game: state.game,
        score: state.score,
        user: state.user,
        time: state.time
    })
}
function mapDispatchToProps(dispatch) {
    return {
        saveGame: function (game) {
            dispatch({ type: 'saveGame', game })
        },
        setTimeZero: function () {
            dispatch({ type: 'setTimeZero' })
        },
        resetPos: function () {
            dispatch({ type: 'resetPos' })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);