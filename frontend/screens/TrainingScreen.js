import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, SafeAreaView, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/styles/prism';
import { connect } from 'react-redux';
import StyleGuide from "../style/styleGuide";
import config from '../config';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function TrainingScreen(props) {
    const [index, setIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState([])
    const [seconds,setSeconds] = useState(0)

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
        return score;
    }

    const [indexSecondes, setIndexSecondes] = useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndexSecondes((indexSecondes + 1) % (60 + 1));
            if(indexSecondes == 60){
                setIndex(index + 1)
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [indexSecondes])
  
    
    async function increaseIndex(posClicked) {
        setUserAnswers([...userAnswers, posClicked])
        if (index < 7) setIndex(index + 1);
        if (index === 7) {
            let tab = [...userAnswers, posClicked]
            let temp = props.game
            temp.userAnswers = [...tab]
            temp.score = getFinalScore(tab)
            props.saveAnswers(tab)
            getFinalScore(tab);
            setIndex(0);
            setUserAnswers([]);
            // console.log(props.game)
            let game = JSON.stringify(temp)
            let rawResponse = await fetch(`${config.myIp}/save-game`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `deviceLang=EN&token=${props.user.token}&game=${game}`
            });
            let response = await rawResponse.json()
            if (response.result) {
                props.navigation.navigate('ResultScreen')
            } else {
                console.log("Error: Saving of the game in DB failed")
            }
        }
    }

    let code = (
        <SyntaxHighlighter language='javascript' style={darcula} highlighter={"prism" || "hljs"} >
            {props.game.questions[index].code}
        </SyntaxHighlighter>
    )
    if (props.game.questions[index].code.length === 0) {
        code = <View></View>
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
            <ImageBackground source={require("../assets/training_bc.png")} style={StyleGuide.container}>

                <View style={{ flex: 1 }}>
                    {/* //* This is the header */}
                    <View style={StyleGuide.header}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                            <Image
                                style={StyleGuide.profileImageButton}
                                source={require("../assets/octo_blue.png")}
                            />
                            <Text style={{ marginLeft: 10, color: 'white' }}>#{props.user.username}</Text>
                        </TouchableOpacity>
                        <FontAwesome onPress={() => props.navigation.navigate("Settings")} style={{ marginTop: 15, marginRight: 10 }} name="gear" size={35} color="white" />
                    </View>

                    {/* //* This is the code block with the questions */}
                    <View style={styles.container}>
                        <Text style={{ fontSize: 34, color: 'white', margin: 20, textAlign: 'center' }}>{props.game.questions[index].title}</Text>
                        {code}
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
                    <View style={{marginBottom:20}}>
                        <Progress step={indexSecondes} steps={60} height={25}/>
                    </View>
                </View>
                
            </ImageBackground>
           
        </SafeAreaView>
    )
}



// PROGRESS BAR 

const Progress = ({ step, steps, height }) => {

    const [width, setWidth] = useState(0)
    const animatedValue = React.useRef(new Animated.Value(1000)).current;
    const reactive = React.useRef(new Animated.Value(1000)).current;

    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true
        }).start()
    })

    React.useEffect(() => {
        reactive.setValue(-width + width * step / steps)
    }, [step, width])

    return (
        <>
           
            <View
                onLayout={e => {
                    const newWidth = e.nativeEvent.layout.width;
                    setWidth(newWidth)
                }}
                style={{
                    height,
                    backgroundColor: 'rgba(254, 146, 90,0.4)',
                    borderRadius: height,
                    overflow: 'hidden'
                }}>
                <Text style={{ textAlign: 'center', color: 'white', zIndex: 2, marginTop: 2 }}>{step} sec</Text>
                <Animated.View style={{
                   
                    height,
                    width: '100%',
                    backgroundColor: '#F92C8C',
                    borderRadius: height,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    transform: [
                        {
                            translateX: animatedValue,
                        },
                    ],
                }}
                />
            </View>
        </>
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
        // backgroundColor: '#2b2b2b'
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
        },
        saveGameInUser: function (game) {
            dispatch({ type: "saveGameInUser", game })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrainingScreen);