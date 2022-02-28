import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import StyleGuide from "../style/styleGuide";
import { LinearGradient } from "expo-linear-gradient";


import { FontAwesome } from '@expo/vector-icons';

export default function Categories(props) {
    return (

        <View style={StyleGuide.container}>

            <View style={StyleGuide.header}>
                <View>
                    <Image style={StyleGuide.profileImage} source={require('../assets/Laureline.jpeg')} />
                    <Text style={{ marginLeft: 10 }}>#Laureloop</Text>
                </View>
                <FontAwesome style={{ marginTop: 10, marginRight: 10 }} name="gear" size={35} color="black" />
            </View>


            <ScrollView style={{ flex: 1, height: 50 }}>

                <View style={StyleGuide.buttonMargin}>
                    <Text style={StyleGuide.fontSize}>Sélectionnes tes themes préférés</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#F81C8F', '#FFA353']}
                            style={{ borderRadius: 40,  width:  Dimensions.get('window').width/1.3 + 6,
                            height:  Dimensions.get('window').height/11 + 6 }}>
                            <View style={StyleGuide.buttonGradientToppic}>
                                <Text style={StyleGuide.button}>HTML</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={StyleGuide.buttonMargin}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#F81C8F', '#FFA353']}
                            style={{ borderRadius: 40 }}>
                            <View style={StyleGuide.buttonGradientFilled}>
                                <Text style={StyleGuide.button}>CSS</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={StyleGuide.buttonMargin}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#F81C8F', '#FFA353']}
                            style={{ borderRadius: 40 }}>
                            <View style={StyleGuide.buttonGradientToppic}>
                                <Text style={StyleGuide.button}>Javascript</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={StyleGuide.buttonMargin}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#F81C8F', '#FFA353']}
                            style={{ borderRadius: 40 }}>
                            <View style={StyleGuide.buttonGradientToppic}>
                                <Text style={StyleGuide.button}>React</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={StyleGuide.buttonMargin}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#F81C8F', '#FFA353']}
                            style={{ borderRadius: 40 }}>
                            <View style={StyleGuide.buttonGradientToppic}>
                                <Text style={StyleGuide.button}>React Native</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={StyleGuide.buttonMargin}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#F81C8F', '#FFA353']}
                            style={{ borderRadius: 40 }}>
                            <View style={StyleGuide.buttonGradientToppic}>
                                <Text style={StyleGuide.button}>MongoDB</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={StyleGuide.buttonMargin}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <LinearGradient start={[0, 0.5]}
                            end={[1, 0.5]}
                            colors={['#F81C8F', '#FFA353']}
                            style={{ borderRadius: 40 }}>
                            <View style={StyleGuide.buttonGradientToppic}>
                                <Text style={StyleGuide.button}>Express</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
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
                        colors={['#F81C8F', '#FFA353']}
                        style={{ borderRadius: 5 }}>
                        <View style={StyleGuide.buttonGradientFilled}>
                            <Text style={StyleGuide.buttonFilled}>Valider</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>




        </View>
    )
}