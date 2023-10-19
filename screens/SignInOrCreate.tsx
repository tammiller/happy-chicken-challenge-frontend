import { View, Text, StyleSheet, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function SignInOrCreate({ navigation }: { navigation: any }) {
  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Text style={textStyles.title}>Veggie Voyager Logo </Text>
      </View>

      <View style={buttonContainerStyle.container}>
        <Pressable
          style={buttonStyles.button}
          onPress={() => {
            /* 1. Navigate to the GoalSetting route with params */
            navigation.navigate("CreateAccount", {
              itemId: 86,
              otherParam: "anything you want here",
            });
          }}
        >
          <Text style={buttonStyles.buttonText}>Create Account</Text>
        </Pressable>

        <Text
          style={textStyles.button}
          onPress={() => {
            /* 1. Navigate to the GoalSetting route with params */
            navigation.navigate("LogIn", {
              itemId: 86,
              otherParam: "anything you want here",
            });
          }}
        >
          Log In
        </Text>
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
