import React from 'react';
import { View, Text} from 'react-native';
import CircularProgress from 'react-native-circular-progress';
import Icon from '../components/Icon'; 


const ProgressBar = () => {
   
  const percentage = 70; // Change this with props
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
        size={200} 
        width={15} 
        fill={percentage} 
        tintColor="#00E0D7" 
        backgroundColor="#ccc" 
      >
        {(fill : number) => (
          <Text style={{ fontSize: 24 }}>{Math.round(fill)}%</Text>
        )}
      </CircularProgress>
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