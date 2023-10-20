import { View, Text, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

export default function LogIn( {navigation}: { navigation: any } ) {

  const[email, setEmail] = useState('');
  const[password, setPasswrod] = useState('');

  const[isEmailValid, setEmailValid] = useState(false);
  const[isPsswordValid, setPsswordValid] = useState(false);


  function onEmailChangeHandler(enteredText: string){
    setEmail(enteredText);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setEmailValid(email.length>0 ? reg.test(enteredText) === true : false);
    return isEmailValid;
   }

   function onPasswordChangeHandler(enteredText: string){
    setPasswrod(enteredText);
    setPsswordValid(password.length>0);
    return isPsswordValid;
   }

   const invalidAlert = ( fieldName: string) => {
    // console.log("invalid Alert called for "+fieldName);
     Alert.alert(
       'Invalid Entry!',
       'Please enter a valid '+fieldName,
       [
         {
           text: 'OK',
           onPress: () => {},
           style: 'cancel',
         },
       ],
       {
         cancelable: true,
        
       },
     );
    }


  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Text style={textStyles.title}>Login</Text>
        <View style={containerStyles.inputContainer}>
        <Text style={textStyles.body}>Email</Text>
        <TextInput style={textInputStyles(isEmailValid).textInput} onChangeText={onEmailChangeHandler}></TextInput>
        <Text style={textStyles.body}>Password</Text>
        <TextInput style={textInputStyles(isPsswordValid).textInput} onChangeText={onPasswordChangeHandler}></TextInput>
        </View>
      </View>
      <View style={buttonContainerStyle.container}>
        <Pressable
          style={buttonStyles.button}
          onPress={() => {
            /* 1. Navigate to the GoalSetting route with params */
            if(!isEmailValid){invalidAlert('Email id')}
            else if(!isPsswordValid){invalidAlert('Password')}
            else{
            navigation.navigate("GoalSetting", {
              itemId: 86,
              otherParam: "anything you want here",
            });
          }
          }}
        >
          <Text style={buttonStyles.buttonText}>Login</Text>
        </Pressable>
     
      <View style={buttonContainerStyle.linkContainer}>
      <Pressable 
      onPress={()=>{
          navigation.navigate("CreateAccount", {
            itemId: 86,
            otherParam: ""
          })
      }}
      >
      <Text style={textStyles.linkText}>Don't have account?Sign up</Text>
      </Pressable>
    </View>
    </View>
    </View>
  );
}

const buttonContainerStyle = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: 'flex-end',
    marginBottom: 20,
    flex: 1,
    flexDirection: 'column'
  },
  linkContainer: {
    width: "100%",
    marginBottom: 50
  }
});

const mainContainerStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});

const containerStyles = StyleSheet.create({
  container: {
    flex:1,
    padding:30,
    backgroundColor:'#fff'
  },

  inputContainer: {
    marginTop: 100,
    justifyContent: 'center',
  }
  
});

const textInputStyles = (isValid: boolean)=>StyleSheet.create({
  textInput: { 
   width: '100%',
   height: 40,
   backgroundColor: '#F5F5F5',
   marginTop: 10,
   borderRadius: 4,
   
   padding: 5

 }

 })

const textStyles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "left",
      marginTop:50,
      
    },
    subtitle: {
      fontSize: 20,
      textAlign: "left",
      marginTop: 34,
    },
    body: {
      fontSize: 14,
      textAlign: "left",
      marginTop: 20,
    },
    textInput: {
      width: '100%',
      height: 40,
      backgroundColor: '#F5F5F5',
      marginTop: 10,
      borderRadius: 4
    },
    linkText: {
      fontSize: 14,
      textAlign: 'center',
  
    }
  });

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#003359",
    padding: 10,
    bottom: 30,
    borderRadius: 12,
    width: 340,
    height: 50,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});