import {  StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Walkthrough1 from './screens/Walkthrough1';

// const navigation = createNativeN

export default function App() {
  return (
      <View style={containerStyles.container}>
      <StatusBar style="auto" />
      <Walkthrough1/>
     
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

 

