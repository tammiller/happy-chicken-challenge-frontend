import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Walkthrough1() {
        return (
          
            <View style={mainContainerStyle.container}>
            <View style={containerStyles.container}>
            
                <Text style={textStyles.title}>Personalized transition support </Text>
                <Text style={textStyles.subtitle}>Enable personalized goal setting for a smooth transition to a plant-based lifestyle, prioritizing individual motivations and preferences.</Text>
                
            </View>
            <View style={buttonContainerStyle.container}>
            <Pressable style={buttonStyles.button}><Text style={buttonStyles.buttonText}>Continue</Text></Pressable>
            </View>
            </View>
        )
}

const buttonContainerStyle = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0

    }
})

const mainContainerStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    }
})

const containerStyles = StyleSheet.create({
    container:{
        width: 250,
        marginStart: 40,
        marginEnd: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        
        
    },
})

const textStyles = StyleSheet.create({
        title: {
       
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'left' 
        },
        subtitle: {
           
            fontSize: 20,
            textAlign: 'left',
            marginTop: 34
        },
    }
)

const buttonStyles = StyleSheet.create({
   
    button: {
       backgroundColor: '#003359',
       padding: 10,
       borderRadius: 12, 
       width: 340,
       height: 50
     
    },
  
    buttonText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
  })




