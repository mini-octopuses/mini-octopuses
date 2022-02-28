import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import StyleGuide from "../style/styleGuide";
import { LinearGradient } from "expo-linear-gradient";


import { FontAwesome } from '@expo/vector-icons';

export default function Home(props) {
    return (

        <View style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <View>
                    <Image style={StyleGuide.profileImage} source={require('../assets/Laureline.jpeg')} />
                    <Text style={{ marginLeft: 10 }}>#Laureloop</Text>
                </View>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="gear" size={35} color="black" />
            </View>

            <Image source={require('../assets/Logo.png')} style={StyleGuide.logo} />
            <Image source={require('../assets/LogoText.png')} />
            <Text h2 style={{ color: '#fff', textAlign: 'center' }} >Dev Quizz Battle
            </Text>


            <View style={StyleGuide.buttonMargin}>
                <Text style={StyleGuide.fontSize}>Choisis le mode de jeu</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Categories')}>
                    <LinearGradient start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={['#F81C8F', '#FFA353']}
                        style={{ borderRadius: 5 }}>
                        <View style={StyleGuide.buttonGradientFilled}>
                            <Text style={StyleGuide.buttonFilled}>Entrainement</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={StyleGuide.buttonMargin}>
                <TouchableOpacity onPress={() => props.navigation.navigate('PageTwo')}>
                    <LinearGradient start={[0, 0.5]}
                        end={[1, 0.5]}
                        colors={['#F81C8F', '#FFA353']}
                        style={{ borderRadius: 5 }}>
                        <View style={StyleGuide.buttonGradientFilled}>
                            <Text style={StyleGuide.buttonFilled}>Duel</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>


        </View>
    )
}