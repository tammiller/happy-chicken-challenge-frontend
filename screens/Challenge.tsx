import { View, Text, StyleSheet, Pressable, Image, Dimensions, Modal, Share } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useContext, useState } from "react";
import { format } from 'date-fns';
import axios from "axios";

const { width } = Dimensions.get("window"); 

const today = format(new Date(), 'MMM dd');

export default function Challenge( {route, navigation}: { route: any, navigation: any } ) {


  const userId = route.params.userId;
  console.log('User details',userId)

  const negativeModalContent = 'Don\'t be discouraged. keep going, you\'ve got this!';
  const neutralModalContent = "Progress is your middle name! Keep going!";
  const positiveModalContent = "Great job, keep up the fantastic work!";
 
  const [modalContent, setModalContent] = useState('');

  const [daysCovered, setDaysCovered] = useState(0);

   var challenges : Challenge[]

  const progress = ( 100 * daysCovered ) / 14 ;

  const title = "🌱";
  const message = "Day "+daysCovered+" of 14 on my plant-based journey, only "+(14-daysCovered)+" days left to reach my goal!";


  const options = {
    title,
    message
  }

  function onShareHandler(){
    console.log("share clicked");
    shareProgress()
  }

  function shareProgress(){
    const share = async() => {
      try{
        var result = await Share.share(options).then()
        console.log('share result ',result.action);
      }catch(err){
        console.log('error sharing ', err);
      }
    };
  }

  interface Challenge{
    challenge_id: string,
    start: string,
    numberOfdays: string,
    status: string,
    dailyEntries: DailyEntry[]

  }

  interface DailyEntry{
    id: string,
    date: string,
    status: string
  }

  function onNegativeEntry(){
    console.log(" negative entry for the day");
   setModalContent(negativeModalContent);
   setModalVisible(true);
   logEntry("BAD");
  }

  function onNeutralEntry(){
    console.log(" neutral entry for the day");
    setModalContent(neutralModalContent);
    setModalVisible(true);
    logEntry("NEUTRAL");
  }

  function onPositiveEntry(){
    console.log(" positive entry for the day");
    setModalContent(positiveModalContent);
    setModalVisible(true);
    logEntry("GOOD");
  }

  const[isModalVisible, setModalVisible] = useState(false);


  const toggleModalVisibility = () => { 
    setModalVisible(!isModalVisible); 
}; 

const getChallenge = () => {
  axios
  .get(`http://18.153.74.70/challenges/${userId}`,)
  .then((response)=>{
    if(typeof response.data != undefined  && response.data){
    console.log("getChallenge ",response.data);
    challenges = response.data;
    console.log("Challenges retrieved ",challenges.length)
    setDaysCovered(response.data[0].dailyEntries.length);
    } else{
      navigation.navigate("DefaultGoal", {
        itemId: 86,
        userId: userId,
      })
    }

  })
  .catch((error)=>{
    console.log(error);
  })
}

const logEntry = (logStatus: string) => {
  axios.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
  })
  axios
  .post(`http://18.153.74.70/challenges/${userId}/${challenges[0].challenge_id}/daily-entries`,{
    id: challenges[0].challenge_id,
    status: logStatus,
    date: '2023-10-22'
  })
  .then((response) => {
    console.log("log Entry response ",response.data);
  })
  .catch((error) => {
    console.log("error loggin entry ",error);
  })
}

getChallenge()

  return (
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
        <Text style={textStyles.title}>Cruelty Free Commit </Text>
        <Text style={containerStyles.progressTextContainer}>{daysCovered}/14</Text>
        <Text style={containerStyles.progressDays}>days</Text>
        <View style={{ width: '100%'}}>
        <View style={{marginTop: 20, alignItems: 'center', rotation: 90}}>
        <AnimatedCircularProgress
          size={175}
          width={8}
          fill={progress}
          tintColor= "#265F68" 
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#A2FC9D"

          />
          </View>
          <Pressable onPress={onShareHandler}>
            <Image style={buttonStyles.share} source={require('../assets/share.png')}></Image>
            </Pressable>
          </View>
          
        
          <View style={containerStyles.dailyEntryContainer}>
            <Text style={textStyles.dateText}>{today}</Text>
          <Text style={textStyles.body}>Have you moved closer to your goal today?</Text>
          <View style={containerStyles.dailyEntryEmoji}>
            <Pressable onPress={onNegativeEntry}>
          <Image style={{width: 50, height: 50}} source={require('../assets/negative-entry.png')}></Image>
          </Pressable>
          <Pressable onPress={onNeutralEntry}>
          <Image style={{width: 50, height: 50, marginLeft: 20}} source={require('../assets/neutral-entry.png')}></Image>
          </Pressable>
          <Pressable onPress={onPositiveEntry}>
          <Image style={{width: 50, height: 50,  marginLeft: 20}} source={require('../assets/positive-entry.png')}></Image>
          </Pressable>
          </View>
          </View>
           {/*  Modal dialog for daily entry status */}
      <Modal animationType="slide" 
                   transparent visible={isModalVisible}  
                   presentationStyle="overFullScreen" 
                   > 
                <View style={containerStyles.viewWrapper}> 
                    <View style={containerStyles.modalView}> 
                    <Text style={textStyles.subtitle}>{modalContent}</Text>
                        {/** This button is responsible to close the modal */} 
                        <Pressable style={buttonStyles.button} onPress={toggleModalVisibility} >
                          <Text style={buttonStyles.buttonText}>Continue</Text>
                        </Pressable>
                    </View> 
                </View> 
            </Modal> 
      </View>
   
    </View>
  );
}

const mainContainerStyle = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: '#fff'
  },
});

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
  },

  progressTextContainer: {
    position: "absolute",
    marginTop: 300,
    fontSize: 22,
    textAlign: 'center',
   
  },

  progressDays: {
    position: "absolute",
    marginTop: 340,
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center'
   
  },

  dailyEntryContainer: {
    justifyContent: 'flex-end',
    marginTop: 100,
    alignItems: 'center',
  },

  dailyEntryEmoji: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginTop: 20
  },

  viewWrapper: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "rgba(0, 0, 0, 0.2)", 
}, 
modalView: { 
    alignItems: "center", 
    justifyContent: "center", 
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    elevation: 5, 
    transform: [{ translateX: -(width * 0.4) },  
                { translateY: -90 }], 
    height: 180, 
    width: width * 0.8, 
    backgroundColor: "#A2FC9D", 
    borderRadius: 10, 
}, 
});

const textStyles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "left",
      marginTop: 200
    },
    subtitle: {
      fontSize: 18,
      textAlign: "center",
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
      fontWeight: 'bold'
    },
    body: {
      fontSize: 12,
      textAlign: "left",
      marginTop: 34,
    },
    dateText: {
     fontSize: 18

    }
  });

  const buttonStyles = StyleSheet.create({
    button: {
      backgroundColor: "#003359",
      padding: 10,
      borderRadius: 8,
      width: 120,
      height: 40,
      alignItems: 'center',
      marginTop: 40
    },
  
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },

    share: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginRight: 20
      
    }
  });