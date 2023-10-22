import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, {useEffect} from 'react';

export default function SplashScreen({ navigation }: { navigation: any }) {
  useEffect(() => {
    setTimeout(() => {
      // check for login token and navigate
      // for now navigating to CreateAccount
      navigation.navigate("CreateAccount", {
        itemId: 86,
        otherParam: "anything you want here",
      });
    }, 2000)
  })
  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Image source={require('../assets/logo.png')} style={containerStyles.logoStyle}></Image>
        <Text style={textStyles.title}>Veggie{'\n'}Voyager</Text>
      </View>
    </View>
  );
}

const buttonContainerStyle = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
});

const mainContainerStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: '#A2FC9D'
  },
});

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignContent: "center",
    justifyContent: 'center'
  },
  logoStyle: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  }
});

const textStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 26
  },
  subtitle: {
    fontSize: 20,
    textAlign: "left",
    marginTop: 34,
  },
  body: {
    fontSize: 12,
    textAlign: "left",
    marginTop: 34,
  },
  button: {
    fontSize: 20,
    color: "#003359",
    bottom: 20,
    paddingTop: 10
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


