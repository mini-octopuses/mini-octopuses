import React, { useState } from 'react';
import { StyleSheet,Dimensions,Image, ImageBackground,TouchableOpacity} from 'react-native';
import { Text } from 'react-native-elements';



export default function SplashScreen(props){
    const [pseudo, setPseudo]=useState('');
    return(
        <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
            <Image source={require('../assets/Logo.png') } style={styles.logo} />
            <Image source={require('../assets/LogoText.png') } />
            <Text h2 style= {{color:'#fff', textAlign:'center'}} >Dev Quizz Battle
            </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('AllConnexion')} style={styles.button}
               >
                    <Text h3 style={styles.buttonTitle}> Autre page</Text>
                </TouchableOpacity>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      position: 'relative',
      
    },
    logo:{
        width:  Dimensions.get('window').width/1.2,
        resizeMode: 'contain',
        position:'absolute',
        top: 10,
        
    },
    button:{
        backgroundColor : 'pink',
        borderRadius:100,
        width:  Dimensions.get('window').width/1.2,
        height:  Dimensions.get('window').height/15,


    }
   
    
});    