import React, { useState}from 'react';
import { View, Text} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import Icon from '../components/Icon'; 



const ProgressBar = () => {
   
 const [value, setValue] = useState(0);
 const currentDate = new Date();
 const formattedDate = currentDate.toDateString();

  return (

    <View>
        <View>
            <Icon source = {require('../../assets/bellIcon.png')} width ={10} height={10}  />  
            <Icon source = {require('../../assets/ringIcon.png')} width ={10} height={10}  />  
        </View>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <CircularProgress
        radius={90}
        value = {value}
        activeStrokeColor='#265F68'
        inActiveStrokeColor='#A2FC9D'
        inActiveStrokeOpacity={0.2}
        />

    </View>

        <View> 
         <Text> Today : {formattedDate}</Text>
        </View>


       <View>
       
        <Icon source = {require('../../assets/imoji.png')} width ={30} height={20}  /> 
       </View>

       <View>
        <Icon source = {require('../../assets/home.png')} width ={15} height={15}  /> 
        <Icon source = {require('../../assets/journey.png')} width ={15} height={15}  /> 
        <Icon source = {require('../../assets/challenge.png')} width ={15} height={15}  /> 
       </View>

    </View>
  );
};

export default ProgressBar;
