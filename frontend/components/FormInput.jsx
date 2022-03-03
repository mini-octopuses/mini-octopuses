import React from "react";
import {Dimensions } from 'react-native';
import {  Input } from 'react-native-elements';


export default function FormInput(props){
    switch(props.icon) {
        case 'pseudo':
            return(
                <Input  
                    placeholder={props.placeholder} 
                    onChangeText={props.onChangeText} 
                    value={props.value} 
                    style={{marginLeft:5, color:"lightgrey", fontSize:16, fontStyle:'italic'}}
                    leftIcon={{ type: 'font-awesome', name: 'user-circle-o', color:"lightgrey"}}
                    containerStyle = {{width:Dimensions.get('window').width/1.2, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10,marginTop:20}}
                    inputContainerStyle = {{borderBottomWidth:0, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10}}>
                </Input> 
            )
            case 'email':
            return(
                <Input  
                    placeholder={props.placeholder} 
                    onChangeText={props.onChangeText} 
                    value={props.value} 
                    style={{marginLeft:5, color:"lightgrey", fontSize:16}}
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o', color:"lightgrey"}}
                    containerStyle = {{width:Dimensions.get('window').width/1.2, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10,marginTop:20}}
                    inputContainerStyle = {{borderBottomWidth:0, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10}}>
                </Input>
            )
            default :
            return(
                <Input  
                    placeholder={props.placeholder} 
                    onChangeText={props.onChangeText} 
                    value={props.value} 
                    placeholder={props.placeholder} 
                    style={{marginLeft:5, color:"lightgrey", fontSize:16}}
                    leftIcon={{ type: 'font-awesome', name: 'lock', color:"lightgrey"}}
                    containerStyle = {{width:Dimensions.get('window').width/1.2, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10, marginTop:20, marginBottom:20}}
                    inputContainerStyle = {{borderBottomWidth:0, 
                    height:Dimensions.get('window').height/12,backgroundColor:'#fff', borderRadius:10}}>
                </Input>
            )
    }

}