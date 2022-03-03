
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, SafeAreaView, Pressable, ImageBackground, TouchableOpacity } from 'react-native';

// import { Image } from 'react-native-elements';
//* Import react native elements
import { Button } from 'react-native-elements';
import StyleGuide from "../style/styleGuide";
import { FontAwesome } from "@expo/vector-icons";

//* Imports for synthax highlighting for code blocks
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/styles/prism';

//* Import for the connection to the store
import { connect } from 'react-redux';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//* Use a dynamic user instead of a static one

function TrainingScreen(props) {
    const [index, setIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    let username = "Hikenou"

    function getFinalScore(answers) {
        let score = 0;
        for (let i = 0; i < props.game.questions.length; i++) {
            for (let j = 0; j < props.game.questions[i].answers.length; j++) {
                if (props.game.questions[i].answers[j].isCorrect && answers[i] === j) {
                    score++;
                }
            }
        }
        props.saveScore(score)
    }

    async function increaseIndex(posClicked) {
        console.log(posClicked)
        setUserAnswers([...userAnswers, posClicked])
        if (index < 7) setIndex(index + 1);
        if (index === 7) {
            let tab = [...userAnswers, posClicked]
            props.saveAnswers(tab)
            getFinalScore(tab);
            setIndex(0);
            setUserAnswers([]);
            // props.saveScore()
            //* todo: Save the game in user
            props.navigation.navigate('ResultScreen')
        }
    }

    return (
        <ImageBackground
            source={require("../assets/training_bc.png")}
            style={StyleGuide.container}
        >

            <View style={StyleGuide.header}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                    <Image
                        style={StyleGuide.profileImageButton}
                        source={require("../assets/Laureline.jpeg")}
                    />
                    <Text style={{ marginLeft: 10, color: 'white' }}>#laureloop</Text>
                </TouchableOpacity>
                <FontAwesome
                    onPress={() => props.navigation.navigate("Settings")}
                    style={{ marginTop: 15, marginRight: 10 }}
                    name="gear"
                    size={35}
                    color="white"
                />
            </View>

            {/* //* This is the code block with the questions */}
            <View style={styles.container}>
                <Text style={{ fontSize: 34, color: 'white', margin: 20, textAlign: 'center' }}>{props.game.questions[index].title}</Text>
                <SyntaxHighlighter language='javascript' style={darcula} highlighter={"prism" || "hljs"}>
                    {props.game.questions[index].code}
                </SyntaxHighlighter>
            </View>

            {/* //*Container for answers */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* //*Display of the answers */}
                <View style={{ flexDirection: 'row' }}>
                    <Button title={props.game.questions[index].answers[0].answer} buttonStyle={styles.buttonBlack} onPress={() => increaseIndex(0)} />
                    <Button title={props.game.questions[index].answers[1].answer} buttonStyle={styles.buttonBlack} onPress={() => increaseIndex(1)} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Button title={props.game.questions[index].answers[2].answer} buttonStyle={styles.buttonBlack} onPress={() => increaseIndex(2)} />
                    <Button title={props.game.questions[index].answers[3].answer} buttonStyle={styles.buttonBlack} onPress={() => increaseIndex(3)} />
                </View>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    userIcon: {
        backgroundColor: '#494949',
        width: 50,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
    },
    container: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    username: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5,
        marginBottom: 35
    },
    codeBlock: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonBlack: {
        width: windowWidth / 2.2,
        height: windowHeight / 7,
        backgroundColor: 'black',
        margin: 7,
        borderRadius: 10
    },
    buttonGreen: {
        width: windowWidth / 2.2,
        height: windowHeight / 7,
        backgroundColor: '#56A754',
        margin: 7,
        borderRadius: 10
    },
    buttonRed: {
        width: windowWidth / 2.2,
        height: windowHeight / 7,
        backgroundColor: '#BB312C',
        margin: 7,
        borderRadius: 10,
    }
});

function mapStateToProps(state) {
    return { game: state.game, user: state.user }
}

function mapDispatchToProps(dispatch) {
    return {
        saveGame: function (game) {
            dispatch({ type: 'saveGame', game })
        },
        saveAnswers: function (answers) {
            dispatch({ type: 'saveGameAnswers', answers })
        },
        saveScore: function (score) {
            dispatch({ type: 'saveScore', score })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrainingScreen);