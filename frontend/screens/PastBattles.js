import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, Switch } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import { connect } from "react-redux";
import config from "../config";

function PastBattles(props) {
    const [gameList, setGameList] = useState([]);
    useEffect(() => {
        async function loadGames() {
            let rawResponse = await fetch(`${config.myIp}/get-user-all-games?token=${props.user.token}`);
            let response = await rawResponse.json()

            if (response.result) {
                setGameList(response.gameList)
            } else {
                console.log("Error: could not fetch user's gamelist")
            }
        }
        loadGames();
    }, []);

    async function getGame(id, game) {
        props.saveGame(game)
        props.navigation.navigate("HistoryScreen")
    }

    let tab = gameList.map((elem, i) => {
        return (
            <SquareButtonBorder key={i} onPress={() => {
                getGame(elem._id, elem)
            }} buttonTitle="Bataille_321" />
        )
    })

    //Ajouter une scollView pour les past battles
    return (

        <View style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <FontAwesome onPress={() => props.navigation.goBack()} style={{ marginTop: 30, marginLeft: 10 }} name="arrow-left" size={25} color="white" />
            </View>

            <Text style={{ fontSize: 20, marginBottom: 20, color: 'white' }}>Batailles passées</Text>
            {tab}
            {/* <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Bataille_321" /> */}
            {/* <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Bataille_753" /> */}
            {/* <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Bataille_159" /> */}
            {/* <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Bataille_852" /> */}

        </View>
    );
}

function mapStateToProps(state) {
    return { user: state.user }
}

function mapDispatchToProps(dispatch) {
    return {
        saveGame: function (game) {
            dispatch({ type: 'saveGame', game })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PastBattles)
