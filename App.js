import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Walkthrough1 from './screens/Walkthrough1';
import SignInOrCreate from './screens/SignInOrCreate';
import CreateAccount from './screens/CreateAccount';
import LogIn from './screens/LogIn';
import Loading from './screens/Loading';
import GoalSetting from './screens/GoalSetting';
import ProgressBar from './screens/ProgressBar';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Walkthrough1">
        <Stack.Screen name="Walkthrough1" component={Walkthrough1} />
        <Stack.Screen name="SignInOrCreate" component={SignInOrCreate} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="GoalSetting" component={GoalSetting} />
        <Stack.Screen name="ProgressBar" component={ProgressBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
