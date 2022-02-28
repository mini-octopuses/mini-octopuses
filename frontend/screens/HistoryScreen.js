
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Image, Pressable } from 'react-native';

//* Import react native elements
import { Button } from 'react-native-elements';

//* Import icons will be removed later on
// import { FontAwesome } from '@expo/vector-icons';

//* Import of dimensions
import { Dimensions } from 'react-native';


//* Imports for synthax highlighting for code blocks
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/styles/prism';


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

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

            <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
                {/* This is the header */}
                <View style={{ alignItems: 'left', justifyContent: 'center' }}>
                    <Image style={styles.userIcon} source={require('../assets/favicon.png')} />
                    <Text style={styles.username}>#username</Text>
                </View>

                {/* This is the code block with the questions */}
                <View style={styles.container}>
                    <Text style={{ fontSize: 34, color: 'white' }}>Question title something ?</Text>
                    <SyntaxHighlighter language='javascript' style={darcula} highlighter={"prism" || "hljs"}>
                        {questionText}
                    </SyntaxHighlighter>
                    <StatusBar style="auto" />
                </View>

                {/*  Display of the answers */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Pressable onPress={() => console.log('Button pressed', 'ANSWER ONE')}> */}
                        {/* </Pressable> */}
                        <Button title='Answer one' buttonStyle={{ width: windowWidth / 2.2, height: windowHeight / 7, backgroundColor: 'black', margin: 7, borderRadius: 10 }} onPress={() => console.log('Button pressed', 'ANSWER ONE')} />
                        {/* <Pressable onPress={() => console.log('Button pressed', 'ANSWER TWO')}> */}
                        <Button title='Answer two' buttonStyle={{ width: windowWidth / 2.2, height: windowHeight / 7, backgroundColor: 'orange', margin: 7, borderRadius: 10 }} onPress={() => console.log('Button pressed', 'ANSWER TWO')} />
                        {/* </Pressable> */}
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Pressable onPress={() => console.log('Button pressed', 'ANSWER THREE')}> */}
                        <Button title='Answer three' buttonStyle={{ width: windowWidth / 2.2, height: windowHeight / 7, backgroundColor: 'black', margin: 7, borderRadius: 10 }} onPress={() => console.log('Button pressed', 'ANSWER THREE')} />
                        {/* </Pressable> */}
                        {/* <Pressable onPress={() => console.log('Button pressed', 'ANSWER FOUR')}> */}
                        <Button title='Answer four' buttonStyle={{ width: windowWidth / 2.2, height: windowHeight / 7, backgroundColor: 'black', margin: 7, borderRadius: 10 }} onPress={() => console.log('Button pressed', 'ANSWER FOUR')} />
                        {/* </Pressable> */}
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    userIcon: {
        backgroundColor: '#494949',
        marginLeft: 25,
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
        marginLeft: 5,
        marginBottom: 35
    },
    codeBlock: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default HistoryScreen