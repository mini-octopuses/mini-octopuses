import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import StyleGuide from "../style/styleGuide";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from '@expo/vector-icons';

export default function Home(props) {
    return (

        <SafeAreaView style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                    <Image style={StyleGuide.profileImageButton} source={require('../assets/Laureline.jpeg')} />
                    <Text style={{ marginLeft: 10 }}>#laureloop</Text>
                </TouchableOpacity>
                <FontAwesome onPress={() => props.navigation.navigate('Settings')} style={{ marginTop: 15, marginRight: 10 }} name="gear" size={35} color="white" />
            </View>

            <Image source={require('../assets/Logo.png')} style={StyleGuide.logo} />
            <Image source={require('../assets/LogoText.png')} />
            <Text h2 style={{ color: '#fff', textAlign: 'center' }} >Dev Quizz Battle</Text>

            <Text style={{ fontSize: 20, marginBottom: 20, }}>Choisis le mode de jeu</Text>

            <TouchableOpacity style={{ marginBottom: 12 }} onPress={() => props.navigation.navigate('Categories')}>
                <LinearGradient start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={['#F81C8F', '#FFA353']}
                    style={{ borderRadius: 5 }}>
                    <View style={StyleGuide.squareButtonFilled}>
                        <Text style={StyleGuide.buttonTitle}>Entrainement</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginBottom: 12 }} onPress={() => props.navigation.navigate('Home')}>
                <LinearGradient start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={['#F81C8F', '#FFA353']}
                    style={{ borderRadius: 5 }}>
                    <View style={StyleGuide.squareButtonFilled}>
                        <Text style={StyleGuide.buttonTitle}>Duel</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

        </SafeAreaView>
    )
}