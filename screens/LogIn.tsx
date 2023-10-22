import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import axios from "axios";
import { REACT_APP_API } from "@env";

export default function LogIn({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");

  const [isEmailValid, setEmailValid] = useState(false);
  const [isPsswordValid, setPsswordValid] = useState(false);
  interface Challenge {
    id: String;
    userId: String;
    start: Date;
    numDays: Number;
    dailyEntries: DailyEntry[];
  }
  interface DailyEntry {
    id: Number;
    entryDate: Date;
    status: String;
  }

  function onEmailChangeHandler(enteredText: string) {
    setEmail(enteredText);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setEmailValid(email.length > 0 ? reg.test(enteredText) === true : false);
    return isEmailValid;
  }

  function onPasswordChangeHandler(enteredText: string) {
    setPasswrod(enteredText);
    setPsswordValid(password.length > 0);
    return isPsswordValid;
  }

  const invalidAlert = (fieldName: string) => {
    // console.log("invalid Alert called for "+fieldName);
    Alert.alert(
      "Invalid Entry!",
      "Please enter a valid " + fieldName,
      [
        {
          text: "OK",
          onPress: () => {},
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const logInUser = () => {
    axios
      .post(`http://18.153.74.70/users/login`, {
        emailId: email,
        password: password,
      })
      .then((response) => {
        // Successfully logged in the user
        console.log("User logged in:", response.data);
        var userChallenge: Challenge = response.data;
        if (userChallenge == null) {
          // redirect to goal setting page
          navigation.navigate("GoalSetting", {
            itemId: 86,
            otherParam: "",
          });
        } else {
          // redirect to challenge page sending user challenge as props
          navigation.navigate("Challenge", {
            itemId: 86,
            otherParam: "",
            userChallenge: userChallenge,
          });
        }
        console.log(userChallenge.userId);
      })
      .catch((error) => {
        // Handle the error case
        Alert.alert("Error", "User not found. Please create an account.");
        navigation.navigate("CreateAccount", {
          itemId: 86,
          otherParam: "",
        });
      });
  };

  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Text style={textStyles.title}>Login</Text>
        <View style={containerStyles.inputContainer}>
          <Text style={textStyles.body}>Email</Text>
          <TextInput
            style={textInputStyles(isEmailValid).textInput}
            onChangeText={onEmailChangeHandler}
          ></TextInput>
          <Text style={textStyles.body}>Password</Text>
          <TextInput
            style={textInputStyles(isPsswordValid).textInput}
            onChangeText={onPasswordChangeHandler}
          ></TextInput>
        </View>
      </View>
      <View style={buttonContainerStyle.container}>
        <Pressable
          style={buttonStyles.button}
          onPress={() => {
            /* 1. Navigate to the GoalSetting route with params */
            if (!isEmailValid) {
              invalidAlert("Email id");
            } else if (!isPsswordValid) {
              invalidAlert("Password");
            } else {
              logInUser();
            }
          }}
        >
          <Text style={buttonStyles.buttonText}>Login</Text>
        </Pressable>

        <View style={buttonContainerStyle.linkContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("CreateAccount", {
                itemId: 86,
                otherParam: "",
              });
            }}
          >
            <Text style={textStyles.linkText}>
              Don't have account? Sign up!
            </Text>
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
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  linkContainer: {
    width: "100%",
    marginBottom: 50,
  },
});

const mainContainerStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  inputContainer: {
    marginTop: 100,
    justifyContent: "center",
  },
});

const textInputStyles = (isValid: boolean) =>
  StyleSheet.create({
    textInput: {
      width: "100%",
      height: 40,
      backgroundColor: "#F5F5F5",
      marginTop: 10,
      borderRadius: 4,

      padding: 5,
    },
  });

const textStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 50,
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
    width: "100%",
    height: 40,
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    borderRadius: 4,
  },
  linkText: {
    fontSize: 14,
    textAlign: "center",
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
