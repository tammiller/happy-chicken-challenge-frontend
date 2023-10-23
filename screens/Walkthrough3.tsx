import { View, Text, StyleSheet, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {  useState } from "react";

export default function Walkthrough3( {route, navigation}: {route: any,  navigation: any } ) {

  const userId = route.params.userId;

  console.log("User details walkthrough ", route.params.userId);

  return (
    <View style={mainContainerStyle.container}>
    <View style={containerStyles.container}>
      <Text style={textStyles.title}>Motivation and inspiration</Text>
      <Text style={textStyles.subtitle}>Stay motivated with supports, quotes, resources, and tips that inspire you and keep your enthusiasm high throughout your plant-based journey.
      </Text>
    </View>
    <View style={buttonContainerStyle.container}>
      <Pressable
        style={buttonStyles.button}
        onPress={() => {
          /* 1. Navigate to the GoalSetting route with params */
          navigation.navigate("DefaultGoal", {
            itemId: 86,
            userId: userId,
          });
        }}
      >
        <Text style={buttonStyles.buttonText}>Continue</Text>
      </Pressable>
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
    backgroundColor: '#fff'
  },
});

const containerStyles = StyleSheet.create({
  container: {
    width: 250,
    marginStart: 40,
    marginEnd: 40,
    bottom: 50,
    justifyContent: "center",
    alignSelf: "center",
  },
});

const textStyles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "left",
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
