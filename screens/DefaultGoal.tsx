import { StyleSheet, View, Text, Pressable, Modal, Dimensions } from "react-native";
import {  useState } from "react";
import axios from "axios";



const { width } = Dimensions.get("window");

export default function DefaultGoal(  {route, navigation}: {route:any, navigation: any } ){

  
  const userId = route.params.userId;
  
  console.log('User details: ',userId);

  const[isModalVisible, setModalVisible] = useState(false);


  const toggleModalVisibility = () => { 
    if(!isModalVisible){
        setModalVisible(true);
        createChallenge()
        setTimeout(() => {
            setModalVisible(false)
            navigation.navigate("Challenge", {
                itemId: 86,
                userId: userId,
              })
        }, 3000) 
    }
    
 }; 

 const createChallenge = () => {
  axios.post('http://18.153.74.70/challenges',{
    user_id: userId,
    start: '2023-10-22',
    numberOfDays: 14,
    "status": "ACTIVE",
    "dailyEntries": [
      {
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "date": "2023-10-22",
        "status": "GOOD"
      }
    ]
  })
  .then((response) => {
    console.log(response.data);
   
  })
  .catch((error)=> {
    console.log(error);
  })
 }


    return(
    <View style={mainContainerStyle.container}>
      <View style={containerStyles.container}>
      <Text style={textStyles.title}>Welcome!</Text>
        <Text style={textStyles.subtitle}>Start your 14 day goal.</Text>
        <Text style={{marginTop: 40, alignItems:'center', fontSize: 46}}> 💪 </Text>
       
        </View>
        <View style={buttonContainerStyle.container}>
        <Pressable style={buttonStyles.button} onPress={toggleModalVisibility}>
          <Text style={buttonStyles.buttonText}>Get started</Text>
        </Pressable>
      </View>
      {/* Confirmation modal popup */}
      <Modal animationType="slide" 
                   transparent visible={isModalVisible}  
                   presentationStyle="overFullScreen" 
                   > 
                <View style={containerStyles.viewWrapper}> 
                    <View style={containerStyles.modalView}> 
                    <Text style={{fontSize: 46, alignSelf: 'center'}}>🔥</Text>
                    <Text style={textStyles.subtitle}>Exciting! 
Your 14-day journey begins now!</Text>
                    </View> 
                </View> 
            </Modal> 
    </View>
     
    );
}

const buttonContainerStyle = StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "flex-end",
      alignItems: 'center'
     
    },
  });
const mainContainerStyle = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      marginTop: 250
    },
  });
  
  const containerStyles = StyleSheet.create({
      container: {
        alignItems: "center",
        height: '60%'
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
        padding: 20,
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
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
        marginLeft: 20,
        marginTop: 20,
        marginRight: 20,
        fontWeight: 'bold'
    },
    body: {
      fontSize: 12,
      textAlign: "left",
      marginTop: 34,
    },
    confirmationText: {
        fontSize: 26,
        textAlign: "center",
    }
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

  