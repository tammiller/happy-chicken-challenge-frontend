import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import * as React from 'react';
import Walkthrough1 from './Walkthrough1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



 export default function Register({ navigation } : {navigation:any}){


    function submitHandler(){
       navigation.navigate(Walkthrough1);
    }
    return (
        <View style={styles.parentContainer}>
        <View style={styles.textInputParentContainer}>
        <TextInput style={styles.container} placeholder='First Name'></TextInput>
        <TextInput style={styles.container} placeholder='Last Name'></TextInput>
        <TextInput style={styles.container} placeholder='Email'></TextInput>
        <TextInput style={styles.container} placeholder='Password'></TextInput>
        </View>
        <View style={buttonStyles.buttonContainer}>
        <Pressable style={buttonStyles.button} onPress= {submitHandler}><Text style={buttonStyles.buttonText}>Register</Text></Pressable>
        </View>
        </View>
    )
}



const styles = StyleSheet.create( {
    textInputParentContainer: {
        width: '100%',
        alignItems: 'center'
    },
        container: {
            width: '80%',
            borderColor: 'lightgrey',
            alignItems: 'center',
            borderWidth: 2,
            padding: 10,
            marginBottom: 20
            
        },

        parentContainer: {
            width: '100%',
            height: '100%',
            paddingVertical: 24,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column'
        }
    
    }
)

const buttonStyles = StyleSheet.create({

    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: 40

    },
   
    button: {
       backgroundColor: '#003359',
       padding: 10,
       borderRadius: 12, 
       width: '80%',
       height: 50,
     
    },
  
    buttonText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
  })
