import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonBorder from "../components/SquareButtonBorder";
import SquareButtonFilled from "../components/SquareButtonFilled";

import { connect } from 'react-redux';

//* Import icons will be removed later on
// import { FontAwesome } from '@expo/vector-icons';

function ResultScreen(props) {
    let myScore = 0;



    const tempGameGenerator = () => {
        // console.log('consolelog to be replaced', 'by a fake data generator')
        // console.log(brutGame)
        // console.log("User's score: ", brutGame.score)
        // console.log("User's answers: ", JSON.stringify(brutGame.userAnswers));
        // console.log("1: ", brutGame.questions[0])
        // console.log("All questions: ", brutGame.questions)
        // console.log('error: ', brutGame.questions[8])
        props.saveGame(brutGame);
    }


    let brutGame = {
        score: 8,
        userAnswers: [1, 2, 3, 1, 2, 0, 0, 1],
        questions: [
            {
                "title": "What are JavaScript datatypes ?",
                "code": "",
                "topic": ["JavaScript"],
                "answers": [
                    {
                        "answer": "Number, String, Boolean, Object", "isCorrect": false
                    },
                    {
                        "answer": "Number, String, Boolean, Object, Undefined", "isCorrect": true
                    },
                    {
                        "answer": "Number, String, Boolean", "isCorrect": false
                    },
                    {
                        "answer": "Number, String, Boolean, Object, Array", "isCorrect": false
                    }
                ]
            },
            {
                "title": "How do you declare an unchangeable variable ?",
                "code": "",
                "topic": ["JavaScript"],
                "answers": [
                    {
                        "answer": "let varName", "isCorrect": false
                    },
                    {
                        "answer": "var varName", "isCorrect": false
                    },
                    {
                        "answer": "const varName", "isCorrect": true
                    },
                    {
                        "answer": "...varName", "isCorrect": false
                    }
                ]
            },
            {
                "title": "How do you extract a specific key's value from an object ?",
                "code": "",
                "topic": ["JavaScript"],
                "answers": [
                    {
                        "answer": "let { status } = user", "isCorrect": true
                    },
                    {
                        "answer": "let status = user", "isCorrect": false
                    },
                    {
                        "answer": "let { status } = user()", "isCorrect": false
                    },
                    {
                        "answer": "let [ status ] = user", "isCorrect": false
                    }
                ]
            },
            {
                "title": "How do you declare an arrow function ?",
                "code": "",
                "topic": ["JavaScript"],
                "answers": [
                    {
                        "answer": "function funcName => (args) {}", "isCorrect": false
                    },
                    {
                        "answer": "var funcName = (args) => {}", "isCorrect": true
                    },
                    {
                        "answer": "funcName => (args) {}", "isCorrect": false
                    },
                    {
                        "answer": "function funcName(args) => {}", "isCorrect": false
                    }
                ]
            },
            {
                "title": "What is an Object in JavaScript ?",
                "code": "",
                "topic": ["JavaScript"],
                "answers": [
                    {
                        "answer": "It doesn't exist in JavaScript", "isCorrect": false
                    },
                    {
                        "answer": "It is the same as an array", "isCorrect": false
                    },
                    {
                        "answer": "It is a two dimentional array", "isCorrect": false
                    },
                    {
                        "answer": "It stores various keyed collections entities", "isCorrect": true
                    }
                ]
            },
            {
                "title": "Which type of scope doesn't exist in JavaScript ?",
                "code": "",
                "topic": ["JavaScript"],
                "answers": [
                    {
                        "answer": "Global Scope", "isCorrect": false
                    },
                    {
                        "answer": "Block Scope", "isCorrect": false
                    },
                    {
                        "answer": "Local or Function Scope", "isCorrect": false
                    },
                    {
                        "answer": "Variable Scope", "isCorrect": true
                    }
                ]
            },
            {
                "title": "What is the difference between Static typing and Dynamic typing ?",
                "code": "",
                "topic": ["JavaScript"],
                "answers": [
                    {
                        "answer": "There is no difference", "isCorrect": false
                    },
                    {
                        "answer": "The the former's type can be changed", "isCorrect": false
                    },
                    {
                        "answer": "The latter's type can be changed", "isCorrect": true
                    },
                    {
                        "answer": "Both don't exist", "isCorrect": false
                    }
                ]
            },
            {
                "title": "How do you call an function taking another function as argument ?",
                "code": "",
                "topic": ["JavaScript"],
                "answers": [
                    {
                        "answer": "A regular function", "isCorrect": false
                    },
                    {
                        "answer": "An arrow function", "isCorrect": false
                    },
                    {
                        "answer": "A higher order function", "isCorrect": true
                    },
                    {
                        "answer": "A parent function", "isCorrect": false
                    }
                ]
            }
        ]
    }

    // let letbrutGame2 = {
    //     score: 8,
    //     userAnswers: [1, 2, 3, 1, 2, 0, 0, 1],
    //     questions: [
    //         {
    //             "title": "What is the value of sum at the of the loop ?",
    //             "code": "let sum = 0;for (let i = 0; i <= 3; i++) {sum += i;}",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "3", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "0", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "undefined", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "6", "isCorrect": true
    //                 }
    //             ]
    //         },
    //         {
    //             "title": "What will be displayed by console.log() ?",
    //             "code": "`let sum; console.log(sum)`",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "null", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "undefined", "isCorrect": true
    //                 },
    //                 {
    //                     "answer": "this code doesn't workd", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "nothing", "isCorrect": false
    //                 }
    //             ]
    //         },
    //         {
    //             "title": "What is the output of the following code ?",
    //             "code": "let str='hello'; let num=12; console.log(hello+num)",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "hello12", "isCorrect": true
    //                 },
    //                 {
    //                     "answer": "hello undefined", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "hello 12", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "It gives an error", "isCorrect": false
    //                 }
    //             ]
    //         },
    //         {
    //             "title": "What does the following code do ?",
    //             "code": "const str = str.charAt(0).toUpperCase() + str.slice(1);",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "It changes the whole string to uppercase", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "It changes the first letter to uppercase", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "It changes the string to and array of characters", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "It doesn't work", "isCorrect": true
    //                 }
    //             ]
    //         },
    //         {
    //             "title": "What is the output of the following code ?",
    //             "code": "const array = ['hello', 'my', 'name', 'is', 'John'];const result = array.filter(e => e.length >= 4);console.log(result);",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "['is', 'my']", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "'hello', 'name', 'John'", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "['hello', 'name', 'John']", "isCorrect": true
    //                 },
    //                 {
    //                     "answer": "['is', 'my']", "isCorrect": false
    //                 }
    //             ]
    //         },
    //         {
    //             "title": "What will the output of the following code be ?",
    //             "code": "const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];console.log(beasts.indexOf('bison', 2));console.log(beasts.indexOf('giraffe'));",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "2, 0", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "4, 0", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "1, -1", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "4, -1", "isCorrect": true
    //                 }
    //             ]
    //         },
    //         {
    //             "title": "What is missing to display the weight in kg ?",
    //             "code": "var obj = {fn: 'Martin', ln: 'Harper', age: 26, weight: 48};var {fn, ,ln, age, weight} = obj;var newObj = {fn, ln, age, weight: /*MISSING CODE*/};",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "weight / 1000", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "weight + 'kg'", "isCorrect": true
    //                 },
    //                 {
    //                     "answer": "weight + kg", "isCorrect": true
    //                 },
    //                 {
    //                     "answer": "kg", "isCorrect": false
    //                 }
    //             ]
    //         },
    //         {
    //             "title": "What is the output of the following code ?",
    //             "code": "const sentence = 'The quick brown fox jumps over the lazy dog.';const word = 'fox';console.log(`The word '${word}' ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "'The word 'fox' is in the sentence'", "isCorrect": true
    //                 },
    //                 {
    //                     "answer": "'The word 'fox' is not in the sentence'", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "Nothing it doens't work", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "'The word 'word' sentence in the sentence'", "isCorrect": false
    //                 }
    //             ]
    //         },
    //         {
    //             "title": "What is the output of the following code ?",
    //             "code": "const array1 = [1, 2, 3];console.log(array1.includes(2));",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "1", "isCorrect": true
    //                 },
    //                 {
    //                     "answer": "2", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "3", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "0", "isCorrect": false
    //                 }
    //             ]
    //         },
    //         {
    //             "title": "What happens to the first array ?",
    //             "code": "let tab1 = ['Hello'];let tab2 = tab1;tab2.push('World')",
    //             "topic": ["JavaScript"],
    //             "answers": [
    //                 {
    //                     "answer": "Nothing", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "Value is never read", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "It is ignored since we are changing tab1", "isCorrect": false
    //                 },
    //                 {
    //                     "answer": "It gets changed along with tab2", "isCorrect": true
    //                 }
    //             ]
    //         }
    //     ]
    // }

    return (
        <ImageBackground
            source={require("../assets/Profile.png")}
            style={StyleGuide.container}
        >
            <FontAwesome style={{ marginTop: 70, color: '#FFCB53' }} name="trophy" size={170} color="white" />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 250 }}>
                <Text style={{ fontSize: 34, color: 'white' }}>Voici ton score</Text>
                <Text style={{ fontSize: 70, color: 'white' }}>{myScore} / 8</Text>
            </View>


            <View style={StyleGuide.footer}>
                {/* //* Replay button */}
                <SquareButtonFilled onPress={() => props.navigation.navigate("Categories")} buttonTitle="Rejouer" />

                {/* //* Needs to generate fake data */}
                <SquareButtonBorder onPress={() => { props.navigation.navigate("HistoryScreen"), tempGameGenerator() }} buttonTitle="Voir les réponses" />

                {/* //* Needs redirect towards the homePage */}
                {/* <Button title='Accueil'
                    onPress={() => {
                        console.log('Pressing homePage button')
                    }} /> */}
                <SquareButtonBorder onPress={() => props.navigation.navigate("Home")} buttonTitle="Accueil" />

            </View>

        </ImageBackground>
    )
}


function mapDispatchToProps(dispatch) {
    return {
        saveGame: function (game) {
            dispatch({ type: 'saveGame', game })
        }
    }
}
export default connect(null, mapDispatchToProps)(ResultScreen);