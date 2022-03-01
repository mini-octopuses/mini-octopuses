
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, SafeAreaView, StatusBar, Image, Pressable } from 'react-native';

//* Import react native elements
import { Button } from 'react-native-elements';

//* Import icons will be removed later on
import { FontAwesome } from '@expo/vector-icons';

//* Imports for synthax highlighting for code blocks
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/styles/prism';

//* Import for the connection to the store
import { connect } from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




// * Use a dynamic user instead of a static one


//* Remove display of prev and next when at max or at min

function HistoryScreen(props) {

    //title, score, userAnswers, topic, answers
    const [index, setIndex] = useState(0)

    function setButtonStyle(buttonPos) {
        if (props.game.questions[index].answers[buttonPos].isCorrect) return styles.buttonGreen
        if (buttonPos === props.game.userAnswers[index]) return styles.buttonRed
        return styles.buttonBlack
    }

    function setPrevButtonStyle() {
        if (index !== 0) return { flexDirection: 'row', alignItems: 'center' }
        return { flexDirection: 'row', alignItems: 'center', display: 'none' }
    }
    function setNextButtonStyle() {
        if (index !== 7) return { flexDirection: 'row', alignItems: 'center' }
        return { flexDirection: 'row', alignItems: 'center', display: 'none' }
    }

    function setNextButtonArea() {
        if (index !== 7) {
            return (
                <View style={setNextButtonStyle()}>
                    <Text style={{ color: 'white', marginRight: 10 }}>Suivant</Text>
                    <FontAwesome name="arrow-right" size={24} color="white" />
                </View>
            )
        }
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', marginRight: 10 }}>Fin</Text>
                <FontAwesome name="arrow-right" size={24} color="white" />
            </View>
        )
    }

    console.log(JSON.stringify(props.game.userAnswers))

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
                {/* //* This is the header */}
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Image style={styles.userIcon} source={require('../assets/favicon.png')} />
                        <Text style={styles.username}>#username</Text>
                    </View>
                    {/* //* Add code to display a setting button on the right part of the screen opposite to the avatar */}
                </View>

                {/* //* This is the code block with the questions */}
                <View style={styles.container}>
                    <Text style={{ fontSize: 34, color: 'white' }}>{props.game.questions[index].title}</Text>
                    {/* <SyntaxHighlighter language='javascript' style={darcula} highlighter={"prism" || "hljs"}>
                        {`const octopuses = [
        { name: 'Blip', waterType: 'salty' },
        { name: 'Blap', waterType: 'fresh' },
        { name: 'Blop', waterType: 'salty' }]
      const ocean = []
      const river = []

      for (const octopus of octopuses) {
        if (XXX === 'salty') {
          ocean.push(octopus)
        } else {
          river.push(octopus)
        }
      }`}
                    </SyntaxHighlighter> */}
                </View>

                {/* //*Container for answers */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/* //*Display of the answers */}
                    <View style={{ flexDirection: 'row' }}>
                        <Button title={props.game.questions[index].answers[0].answer} buttonStyle={setButtonStyle(0)} />
                        <Button title={props.game.questions[index].answers[1].answer} buttonStyle={setButtonStyle(1)} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Button title={props.game.questions[index].answers[2].answer} buttonStyle={setButtonStyle(2)} />
                        <Button title={props.game.questions[index].answers[3].answer} buttonStyle={setButtonStyle(3)} />
                    </View>

                    {/* //*Display of prev and next */}
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: windowWidth / 1.1, padding: 10 }}>
                        <Pressable onPress={() => {
                            console.log('Button pressed', 'Prev')
                            index > 0 ? setIndex(index - 1) : setIndex(0)
                        }}>
                            <View style={setPrevButtonStyle()}>
                                <FontAwesome name="arrow-left" size={24} color="white" />
                                <Text style={{ color: 'white', marginLeft: 10 }}>Précédent</Text>
                            </View>
                        </Pressable>

                        <Pressable onPress={() => {
                            console.log('Button pressed', 'Next')
                            index < 7 ? setIndex(index + 1) : props.navigation.navigate('ResultScreen')
                        }}>
                            {setNextButtonArea()}
                        </Pressable>
                    </View>
                </View>

            </View>
        </SafeAreaView >
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
    return { game: state.game }
}
export default connect(mapStateToProps, null)(HistoryScreen);