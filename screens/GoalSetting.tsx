import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { Chip } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function GoalSetting({ navigation }: { navigation: any }) {
  const [goalName, setGoalName] = useState("");
  const [goalLength, setGoalLength] = useState(null);
  const [isGoalValid, setGoalValid] = useState(false);

  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  const handleChipClick = (chipValue: string) => {
    if (selectedChip === chipValue) {
      setSelectedChip(null); // Deselect the chip if it's already selected
    } else {
      setSelectedChip(chipValue); // Select the clicked chip
    }
  };

  const createGoal = () => {
    axios
      .post(`http://18.153.74.70/challenges`, {
        name: goalName,
        numberOfDays: goalLength,
      })
      .then((response) => {
        // Successfully created a new goal/cha;;enge
        console.log("New goal created:", response.data);
        // redirect to challenge status page
        navigation.navigate("Challenge", {
          itemId: 86,
          otherParam: "",
        });
      })
      .catch((error) => {
        // Handle the error case
        Alert.alert("Error", "Challenge not created. Please try again later.");
      });
  };

  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Text style={textStyles.title}>Welcome!</Text>
        <Text style={textStyles.subtitle}>Start setting your goal.</Text>

        <View style={containerStyles.inputContainer}>
          <Text style={textStyles.body}>Name your goal</Text>
          <TextInput
            style={textInputStyles(isGoalValid).textInput}
            // onChangeText={onEmailChangeHandler}
          ></TextInput>

          <Text style={textStyles.body}>Select time</Text>
          <View style={containerStyles.chipContainer}>
            <Chip
              style={chipStyles.chip}
              label="1 day"
              size="small"
              clickable
              onClick={() => handleChipClick('1 day')}
              color={selectedChip === '1 day' ? 'primary' : 'default'}
            />
            <Chip
              style={chipStyles.chip}
              label="3 days"
              size="small"
              clickable
              onClick={() => handleChipClick('3 days')}
              color={selectedChip === '3 days' ? 'primary' : 'default'}
            />
            <Chip
              style={chipStyles.chip}
              label="7 days"
              size="small"
              clickable
              onClick={() => handleChipClick('7 days')}
              color={selectedChip === '7 days' ? 'primary' : 'default'}
            />
            <Chip
              style={chipStyles.chip}
              label="14 days"
              size="small"
              clickable
              onClick={() => handleChipClick('14 days')}
              color={selectedChip === '14 days' ? 'primary' : 'default'}
            />
            <Chip
              style={chipStyles.chip}
              label="30 days"
              size="small"
              clickable
              onClick={() => handleChipClick('30 days')}
              color={selectedChip === '30 days' ? 'primary' : 'default'}
            />
          </View>
        </View>
      </View>

      <View style={buttonContainerStyle.container}>
        <Pressable
          style={buttonStyles.button}
          onPress={() => {
            createGoal()
            navigation.navigate("Challenge", {
              itemId: 86,
              otherParam: "",
            });
          }}
        >
          <Text style={buttonStyles.buttonText}>Create</Text>
        </Pressable>
      </View>
    </View>
  );
}

const chipStyles = StyleSheet.create({
  chip: {
    minWidth: 88,
    minHeight: 40,
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
    marginTop: 40,
    justifyContent: "center",
  },
  chipContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 10,
  },
});

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
    marginTop: 25,
  },
  body: {
    fontSize: 16,
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
