import React, {useState} from "react";
import {View, Image,TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";

import StyleGuide from "../style/styleGuide";
import FormInput from "../components/formInput";



export default function SignUp(props){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword]= useState("");

    const signUp = async()=>{
        let user = await fetch('http://192.168.10.156:3000/sign-up',{
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `username=${username}&email=${email}&password=${password}&isGuest=false`
            
        })
        let backResponse = await user.json()

        if (backResponse.result) {
            props.navigation.navigate("Home")
        }
        console.log(backResponse);
    }

    return(
        <View style={StyleGuide.container}>
            {/* <Image source={require('../assets/Logo.png') } style={StyleGuide.logo} /> */}
            <Image source={require('../assets/LogoText.png') } />
            <Text h3 style= {{color:'#fff', textAlign:'center'}} >Dev Quizz Battle
            </Text>
            <Text h3>Inscription</Text>

            <FormInput placeholder='Prénom / Pseudo' icon='pseudo'value={username} onChangeText={(val)=> setUsername(val)} />

            <FormInput placeholder='Email' icon='email' value={email} onChangeText={(val) => setEmail(val)} />
            <FormInput placeholder='Mot de passe' value={password} onChangeText={(val) =>setPassword(val)} />

            <View style={StyleGuide.buttonStyle}>
                <TouchableOpacity onPress={() => signUp() }>
                    <LinearGradient
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    colors={["#F81C8F", "#FFA353"]}
                    style={{ borderRadius: 5 }}
                >
                        <View style={StyleGuide.buttonGradient}>
                          <Text style={StyleGuide.buttonTitle}> Valider</Text>
                        </View>    
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </View>    

    )
}