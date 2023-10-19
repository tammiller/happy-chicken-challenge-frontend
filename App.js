
import { NavigationContainer } from '@react-navigation/native';

import ProgressScreen from './src/components/progressScreen';
import { createStackNavigator } from '@react-navigation/stack';



const Stack= createStackNavigator();

export default function App() {
    

  return (
    <NavigationContainer>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Progress" component={ProgressScreen} />
    </NavigationContainer>
    
    
  );
}


