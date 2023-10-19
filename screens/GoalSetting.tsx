import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

export default function GoalSetting() {
  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Text style={textStyles.title}>Welcome!</Text>
        <Text style={textStyles.subtitle}>Start setting your goal.</Text>
        <Text style={textStyles.body}>Name your goal</Text>
        <TextInput style={inputStyles.input}></TextInput>
        <Text style={textStyles.body}>Select time</Text>
      </View>

      <View style={buttonContainerStyle.container}>
        <Pressable style={buttonStyles.button}>
          <Text style={buttonStyles.buttonText}>Create</Text>
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

const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: "#F5F5F5",
    top: 10,
    borderRadius: 12,
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
