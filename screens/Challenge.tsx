import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Challenge( {navigation}: { navigation: any } ) {
  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Text style={textStyles.title}>Cruelty Free Commit </Text>
      </View>
    </View>
  );
}

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