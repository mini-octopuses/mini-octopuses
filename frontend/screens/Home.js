import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import StyleGuide from "../style/styleGuide";
import SquareButtonFilled from "../components/SquareButtonFilled";
import Logo from '../components/Logo';

import { connect } from "react-redux";

function Home(props) {
    return (
        <SafeAreaView style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                    <Image style={StyleGuide.profileImageButton} source={require('../assets/octo_blue.png')} />
                    <Text style={{ marginLeft: 10, color: 'white' }}>#{props.user.username}</Text>
                </TouchableOpacity>
                <FontAwesome onPress={() => props.navigation.navigate('Settings')} style={{ marginTop: 15, marginRight: 10 }} name="gear" size={35} color="white" />
            </View>

            <Logo />

            <View style={StyleGuide.footer, { alignItems: 'center' }}>
                <Text style={{ fontSize: 20, marginBottom: 20, color: 'white' }}>Choisis le mode de jeu</Text>
                <SquareButtonFilled onPress={() => props.navigation.navigate("Categories")} buttonTitle="Entrainement" />
                <SquareButtonFilled onPress={() => props.navigation.navigate("Categories")} buttonTitle="Duel" />
            </View>
        </SafeAreaView>
    )
}

function mapStateToProps(state) {
    return { user: state.user }
}

export default connect(mapStateToProps, null)(Home)