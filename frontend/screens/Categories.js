import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    ScrollView,
} from "react-native";
import StyleGuide from "../style/styleGuide";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import config from "../config";

export default function Categories(props) {
    const [allTopicList, setAllTopicList] = useState([]);

    useEffect(() => {
        async function loadData() {
            let topicFromBack = await fetch(`${config.myIp}/topics`);

            const body = await topicFromBack.json();
            let setAllTopicListCopy = [...allTopicList];

            body.topicFromBack.map((item) => {
                setAllTopicListCopy.push(item);
            });
            setAllTopicList(setAllTopicListCopy);
        }
        loadData();
    }, []);

    // console.log(allTopicList);

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
        topics: ["MongoDB"],
        // gameList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'games' }],
        // progression: [{ topic: String, numberCorrect: Number }]
        // "HTML", "MongoDB"
    };

    // const selectTopic = async () => {
    // }

    return (
        <SafeAreaView style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
                    <Image
                        style={StyleGuide.profileImageButton}
                        source={require("../assets/Laureline.jpeg")}
                    />
                    <Text style={{ marginLeft: 10 }}>#laureloop</Text>
                </TouchableOpacity>
                <FontAwesome
                    onPress={() => props.navigation.navigate("Settings")}
                    style={{ marginTop: 15, marginRight: 10 }}
                    name="gear"
                    size={35}
                    color="white"
                />
            </View>

            <Text style={{ fontSize: 20, marginBottom: 20 }}>
                Sélectionnes tes themes préférés
            </Text>

            <ScrollView style={{ flex: 1 }}>

                <View>
                    {allTopicList.map((item, i) => {
                        return (
                            <TouchableOpacity key={i} onPress={() => props.navigation.navigate("Categories")}>
                                <LinearGradient
                                    start={[0, 0.5]}
                                    end={[1, 0.5]}
                                    colors={["#F81C8F", "#FFA353"]}
                                    style={{ borderRadius: 40, marginBottom: 12 }}
                                >
                                    <View style={fakeUser.topics.includes(item.name) ? StyleGuide.roundButtonFilled : StyleGuide.roundButtonBorder} >
                                        <Text style={StyleGuide.buttonTitle}>{item.name}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <TouchableOpacity style={{ borderColor: "#2B2B2B" }}>
                    <View style={{ backgroundColor: "#2B2B2B", height: 150 }}>
                        <Text></Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>

            <View style={StyleGuide.footer}>
                <TouchableOpacity onPress={() => {
                    if (fakeUser.topics.length) {
                        props.navigation.navigate("ResultScreen");
                    }
                }}
                >
                    <LinearGradient
                        start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={!fakeUser.topics.length ? ["#757575", "#757575"] : ["#F81C8F", "#FFA353"]}
                        style={{ borderRadius: 5 }}
                    >
                        <View style={!fakeUser.topics.length ? StyleGuide.squareButtonDisable : StyleGuide.squareButtonFilled}>
                            <Text style={StyleGuide.buttonTitle}>Valider</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}