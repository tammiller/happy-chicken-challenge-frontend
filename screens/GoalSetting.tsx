import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

export default function GoalSetting() {
  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Text style={textStyles.title}>Setting your goal</Text>
        <Text style={textStyles.subtitle}>Name your goal</Text>
        <TextInput style={inputStyles.input}></TextInput>
        <Text style={textStyles.subtitle}>Select time</Text>

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
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 200
  },
});

const containerStyles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'flex-start',
      padding: 30
    },

    durationContainer: {
      backgroundColor: '#F5F5F5',
      borderRadius: 12,
      padding: 10,
      textAlign: 'center'
    }
  });

const textStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
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
