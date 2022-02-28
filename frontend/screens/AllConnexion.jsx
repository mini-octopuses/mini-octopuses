import React from "react";
import { StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';



export default function AllConnexion(){
    return(
        <ImageBackground source={require('../assets/bg.png')} style={styles.container}>
            <Image source={require('../assets/Logo.png') } style={styles.logo} />
            <Image source={require('../assets/LogoText.png') } />
            <Text h2 style= {{color:'#fff', textAlign:'center'}} >Dev Quizz Battle
            </Text>
            
                <TouchableOpacity onPress={() => props.navigation.navigate('')} style={styles.GoogleButton} 
               >
                   <FontAwesome name="google" size={24} color="black" />
                    <Text style={styles.buttonTitle}> Connexion avec Google</Text>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('')} style={styles.GoogleButton}
               >
                   <FontAwesome name="facebook" size={24} color="white" />
                    <Text style={styles.buttonTitle}> Connexion avec Facebook</Text>
                  
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

      GoogleButton:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        
        borderRadius:10,
        width:  Dimensions.get('window').width/1.2,
        height:  Dimensions.get('window').height/12,
        marginBottom: 20,
      

      },
      buttonTitle:{
          fontSize:22,
          fontWeight:'bold',
          color:'#757575'

      }
})