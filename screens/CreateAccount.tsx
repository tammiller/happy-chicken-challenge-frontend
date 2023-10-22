import { View, Text, StyleSheet, Pressable, TextInput, Alert } from "react-native";
import { useState } from "react";
import axios from "axios";

export default function CreateAccount({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [name, setName] = useState("");

  const [isNameValid, setNameValid] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPsswordValid, setPsswordValid] = useState(false);

  function onNameChangeHandler(enteredText: string) {
    setName(enteredText);
    //   console.log('name '+name.length);
    setNameValid(name !== "" ? name.length > 0 : false);
    return isNameValid;
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

  const signUpUser = () => {
    axios
      .post(`http://18.153.74.70/users/signUp`, {
        emailId: email,
        name: name,
        password: password
    })
      .then((response) => {
        // if account successfully created, go to walkthrough
        console.log(response.data)
        navigation.navigate("Walkthrough1", {
          itemId: 86,
          otherParam: "anything you want here",
        });
      })
      .catch((error) => {
        // if account NOT successfully created, display error message
        console.error(error);
        Alert.alert("Error", "Sorry, we're having trouble creating your account right now. Please come back and try again later.");
      });
  };

  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Text style={textStyles.title}>Create your account</Text>
        <View style={{ width: "100%", height: 40 }}></View>
        <Text style={textStyles.body}>Name</Text>
        <TextInput
          style={textInputStyles(isNameValid).textInput}
          onChangeText={onNameChangeHandler}
        ></TextInput>
        <Text style={textStyles.body}>Email</Text>
        <TextInput
          style={textInputStyles(isEmailValid).textInput}
          onChangeText={onEmailChangeHandler}
          autoCapitalize='none'
          inputMode="email"
        ></TextInput>
        <Text style={textStyles.body}>Password</Text>
        <TextInput
          style={textInputStyles(isPsswordValid).textInput}
          onChangeText={onPasswordChangeHandler}
          autoCapitalize='none'
         secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={buttonContainerStyle.container}>
        <Pressable
          style={buttonStyles.button}
          onPress={() => {
            /* 1. Navigate to the GoalSetting route with params */
            // console.log("isNameValid: "+isNameValid+ " with "+name +" isEmailValid: "+isEmailValid+ " isPasswordValid: "+isPsswordValid );
            if (!isNameValid) {
              invalidAlert("Name");
            } else if (!isEmailValid) {
              invalidAlert("Email id");
            } else if (!isPsswordValid) {
              invalidAlert("Password");
            } else {
              signUpUser()
            }
          }}
        >
          <Text style={buttonStyles.buttonText}>Create Account</Text>
        </Pressable>
      </View>
      {/* <View style={buttonContainerStyle.linkContainer}> */}
      <Pressable
        onPress={() => {
          navigation.navigate("LogIn", {
            itemId: 86,
            otherParam: "some",
          });
        }}
      >
        <Text style={textStyles.linkText}>Already have account? Log in.</Text>
      </Pressable>
    </View>
    // </View>
  );
}

const buttonContainerStyle = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  linkContainer: {
    width: "100%",
    justifyContent: "center",
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
    width: "100%",
    paddingTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
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
    fontSize: 18,
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
    marginBottom: 40,
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
