import { NavigationContainer } from '@react-navigation/native';
import {  StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Register from './screens/Register';
import Walkthrough1 from './screens/Walkthrough1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <View style={containerStyles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Walkthrough1'>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Walkthrough1" component={Walkthrough1}/>
        </Stack.Navigator>
      </NavigationContainer>
     
      </View>
    
  );
}

const containerStyles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
  
  },
})

 

