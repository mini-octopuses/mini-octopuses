
import React from 'react';
import { Dimensions, StyleSheet, View, Text, SafeAreaView, StatusBar, Image, Pressable } from 'react-native';

//* Import react native elements
import { Button } from 'react-native-elements';

//* Import icons will be removed later on
import { FontAwesome } from '@expo/vector-icons';

//* Imports for synthax highlighting for code blocks
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/styles/prism';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HistoryScreen(props) {

    const questionText = `const octopuses = [
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
      }`

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
                {/* This is the header */}
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Image style={styles.userIcon} source={require('../assets/favicon.png')} />
                        <Text style={styles.username}>#username</Text>
                    </View>
                    {/* Add code to display a setting button on the right part of the screen opposite to the avatar */}
                </View>

                {/* This is the code block with the questions */}
                <View style={styles.container}>
                    <Text style={{ fontSize: 34, color: 'white' }}>Question title something ?</Text>
                    <SyntaxHighlighter language='javascript' style={darcula} highlighter={"prism" || "hljs"}>
                        {questionText}
                    </SyntaxHighlighter>
                    <StatusBar style="auto" />
                </View>

                {/* Container for answers */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {/*  Display of the answers */}
                    <View style={{ flexDirection: 'row' }}>
                        <Button title='Answer one' buttonStyle={styles.buttonBlack} />
                        <Button title='Answer two' buttonStyle={styles.buttonGreen} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Button title='Answer three' buttonStyle={styles.buttonRed} />
                        <Button title='Answer four' buttonStyle={styles.buttonBlack} />
                    </View>

                    {/* Display of prev and next */}
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: windowWidth / 1.1, padding: 10 }}>
                        <Pressable onPress={() => console.log('Button pressed', 'Prev')}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome name="arrow-left" size={24} color="white" />
                                <Text style={{ color: 'white', marginLeft: 10 }}>Précédent</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => console.log('Button pressed', 'Next')}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white', marginRight: 10 }}>Suivant</Text>
                                <FontAwesome name="arrow-right" size={24} color="white" />
                            </View>
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

export default HistoryScreen