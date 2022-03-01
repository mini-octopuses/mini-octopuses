import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import StyleGuide from "../style/styleGuide";
import { LinearGradient } from "expo-linear-gradient";


import { FontAwesome } from '@expo/vector-icons';

export default function Categories(props) {

    const [allTopicList, setAllTopicList] = useState([]);

    useEffect(() => {
        async function loadData() {
            let topicFromBack = await fetch('http://192.168.43.224:3000/topics')

            const body = await topicFromBack.json()
            let setAllTopicListCopy = [...allTopicList]

            body.topicFromBack.map((item) => {
                setAllTopicListCopy.push(item)
            })

            setAllTopicList(setAllTopicListCopy)
        }
        loadData();
    }, [])

    console.log(allTopicList)

    // const allTopicList = [
    //     { "name": "HTML" },
    //     { "name": "CSS" },
    //     { "name": "React" },
    //     { "name": "React Native" },
    //     { "name": "MongoDB" },
    //     { "name": "Express" },
    //     { "name": "Javascript" }];

    const fakeUser = {
        username: "Aija",
        password: "test",
        email: "aija@aija.com",
        token: "qsdf55azert555zerty",
        profilPicture: "",
        isGuest: false,
        topics: ["HTML", "MongoDB"],
        // gameList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'games' }],
        // progression: [{ topic: String, numberCorrect: Number }]
    }

    const selectTopic = async () => {


    }

    return (

        <View style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <View>
                    <Image style={StyleGuide.profileImage} source={require('../assets/Laureline.jpeg')} />
                    <Text style={{ marginLeft: 10 }}>#Laureloop</Text>
                </View>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="gear" size={35} color="black" />
            </View>

            <Text style={StyleGuide.fontSize}>Sélectionnes tes themes préférés</Text>
            <ScrollView style={{ flex: 1, height: 50 }}>

                <View style={StyleGuide.buttonMargin}>
                    {allTopicList.map((item, i) => {
                        return <TouchableOpacity key={i} onPress={() => selectTopic()}>
                            <LinearGradient start={[0, 0.5]}
                                end={[1, 0.5]}
                                colors={['#F81C8F', '#FFA353']}
                                style={{ borderRadius: 40, marginBottom: 12 }}>
                                <View style={fakeUser.topics.includes(item.name) ? StyleGuide.buttonGradientFilled : StyleGuide.buttonGradientToppic}>
                                    <Text style={StyleGuide.button}>{item.name}</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>

                    })}
                </View>

                <View style={StyleGuide.buttonMargin}>
                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#2B2B2B', height: 80 }}>
                            <Text style={{ borderColor: '#2B2B2B' }}></Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <View style={StyleGuide.footer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('PageTwo')}>
                    <LinearGradient start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={!fakeUser.topics.length ? ['#757575', '#757575'] : ['#F81C8F', '#FFA353']}
                        style={{ borderRadius: 5 }}>
                        <View style={!fakeUser.topics.length ? StyleGuide.disabledButton : StyleGuide.buttonGradientFilled}>
                            <Text style={StyleGuide.buttonFilled}>Valider</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>




        </View>
    )
}