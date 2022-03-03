import React, { useState,useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, SafeAreaView, Pressable } from 'react-native';

// import { Image } from 'react-native-elements';
//* Import react native elements
import { Button } from 'react-native-elements';

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
    const [score,setScore] = useState(0)
    const [data,setData] = useState([])
    console.log('score',score)
    let username = "Hikenou"


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://192.168.10.145:3000/generate-game');
            const json = await data.json();
            setData(json);
        }
        fetchData()
            .catch(console.error);
    }, [])


    function getFinalScore(answers) {
        for (let i = 0; i < data.questions.length; i++) {
            for (let j = 0; j < data.questions[i].answers.length; j++) {
                if (data.questions[i].answers[j].isCorrect && answers[i] === j) {
                    setScore(prevScore => prevScore + 1)
                }
            }
        }
        props.saveScore(score)
    }

    function increaseIndex(posClicked) {
        setUserAnswers([...userAnswers, posClicked])
        if (index < 7) setIndex(index + 1);
        if (index === 7) {
            let tab = [...userAnswers, posClicked]
            props.saveAnswers(tab)
            getFinalScore(tab);
            setUserAnswers([]);
            props.saveScore()
            //* todo: Save the game in user
            props.navigation.navigate('ResultScreen')
        }
    }

    function resetScoreUser(){
        setScore(0)
    }

    return (
        data.length !== 0 ?
                <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

                    <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
                        {/* //* This is the header */}
                        <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                            <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Image style={styles.userIcon} source={require('./../assets/favicon.png')} />
                                <Text style={styles.username}>#{username}</Text>
                            </View>
                            {/* //* Add code to display a setting button on the right part of the screen opposite to the avatar */}
                        </View>

                        {/* //* This is the code block with the questions */}
                        <View style={styles.container}>
                            <Text style={{ fontSize: 34, color: 'white', margin: 20, textAlign: 'center' }}>{data.questions[index].title}</Text>
                            {/*<SyntaxHighlighter language='javascript' style={darcula} highlighter={"prism" || "hljs"}>*/}
                            {/*    <Text>Title</Text>*/}
                            {/*</SyntaxHighlighter>*/}
                        </View>
                        {/* //*Container for answers */}
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {/* //*Display of the answers */}
                            <View style={{ flexDirection: 'row' }}>
                                <Button title={data.questions[index].answers[0].answer} buttonStyle={styles.buttonBlack} onPress={() => increaseIndex(0)} />
                                <Button title={data.questions[index].answers[1].answer} buttonStyle={styles.buttonBlack} onPress={() => increaseIndex(1)} />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Button title={data.questions[index].answers[2].answer} buttonStyle={styles.buttonBlack} onPress={() => increaseIndex(2)} />
                                <Button title={data.questions[index].answers[3].answer} buttonStyle={styles.buttonBlack} onPress={() => increaseIndex(3)} />
                            </View>
                        </View>
                    </View>
                </SafeAreaView >
        :
            <Text>Loading...</Text>
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2b2b2b'
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