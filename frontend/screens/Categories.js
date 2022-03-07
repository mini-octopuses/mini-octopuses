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
import { connect } from "react-redux";

function Categories(props) {
  const [allTopicList, setAllTopicList] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([])

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

  async function generateGame() {
    let rawResponse = await fetch(`${config.myIp}/generate-game`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `deviceLang=EN&topics=${props.user.topics}`
    });
    let response = await rawResponse.json()
    if (response.result) {
      //* Check backend not responding with the correct schema
      props.saveGame(response.game)
      props.navigation.navigate("TrainingScreen");
    } else {
      console.log("Error questions not found")
    }
  }

  function topicClick(topicName) {
    let tab = [...selectedTopics]

    if (tab.includes(topicName)) {
      tab = tab.filter(elem => elem !== topicName)
    } else {
      tab.push(topicName)
    }
    setSelectedTopics(tab);
  }

  async function saveTopicsRemote() {
    props.saveTopics(selectedTopics)
    console.log("before topic")


    let rawResponse = await fetch(`${config.myIp}/update-user-topics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `deviceLang=EN&topics=${props.user.topics}&token=${props.user.token}`
    });
    console.log("after topic")

    let response = await rawResponse.json()
    if (response.result) {
      console.log("before game")
      generateGame();
      console.log("after game")
    } else {
      console.log("Error: Could not update user's topics in Database")
    }
  }


  return (
    <SafeAreaView style={StyleGuide.container}>

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

      <Text style={{ fontSize: 20, marginBottom: 20, color: 'white' }}>
        Sélectionnes tes themes préférés
      </Text>

      <ScrollView style={{ flex: 1 }}>

        <View>
          {allTopicList.map((item, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => { topicClick(item.name) }}>
                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={["#F81C8F", "#FFA353"]}
                  style={{ borderRadius: 40, marginBottom: 12 }}
                >
                  <View style={selectedTopics.includes(item.name) ? StyleGuide.roundButtonFilled : StyleGuide.roundButtonBorder} >
                    <Text style={StyleGuide.buttonTitle}>{item.name}</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity>
          <View style={{ backgroundColor: "#2B2B2B", height: 130 }}>
            <Text style={{ borderColor: "#2B2B2B" }}></Text>
          </View>
        </TouchableOpacity>

      </ScrollView>

      <View style={StyleGuide.footer}>
        <TouchableOpacity
          onPress={() => {
            if (selectedTopics.length) {
              saveTopicsRemote()
            }
          }}
        >
          <LinearGradient
            start={[0, 0.5]}
            end={[1, 0.5]}
            colors={
              !selectedTopics.length
                ? ["#757575", "#757575"]
                : ["#F81C8F", "#FFA353"]
            }
            style={{ borderRadius: 5 }}
          >
            <View
              style={
                !selectedTopics.length
                  ? StyleGuide.squareButtonDisable
                  : StyleGuide.squareButtonFilled
              }
            >
              <Text style={StyleGuide.buttonTitle}>Valider</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return { game: state.game, user: state.user };
}
function mapDispatchToProps(dispatch) {
  return {
    saveGame: function (game) {
      dispatch({ type: "saveGame", game });
    },
    saveTopics: function (topics) {
      dispatch({ type: "saveTopics", topics })
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
