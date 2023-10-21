import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Walkthrough1 from './screens/Walkthrough1';
import CreateAccount from './screens/CreateAccount';
import LogIn from './screens/LogIn';
import Loading from './screens/Loading';
import GoalSetting from './screens/GoalSetting';
import Walkthrough2 from './screens/Walkthrough2';
import Walkthrough3 from './screens/Walkthrough3';
import SplashScreen from './screens/SplashScreen';
import Challenge from './screens/Challenge';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAccount" >
        <Stack.Screen name="Walkthrough1" component={Walkthrough1} options={{headerShown:false}} />
        <Stack.Screen name="Walkthrough2" component={Walkthrough2} options={{headerShown:false}}/>
        <Stack.Screen name="Walkthrough3" component={Walkthrough3} options={{headerShown:false}}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount} options={{headerShown:false}} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="GoalSetting" component={GoalSetting} options={{headerShown:false}} />
        <Stack.Screen name="Challenge" component={Challenge} />
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
