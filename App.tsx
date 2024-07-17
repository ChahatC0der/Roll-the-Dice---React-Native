import { SafeAreaView, StyleSheet, Text, View, Image, ImageSourcePropType, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from 'react'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback'

type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


const Dice = ({imageUrl} : DiceProps): JSX.Element => {
  return (
    
      <Image style={styles.diceImage} alt='no image' source={imageUrl}/>

    
  )
}


const App = () : JSX.Element => {
  const generateDiceImage = () => {
    let randomNumber = Math.floor(Math.random() * 6) +1;


    switch(randomNumber){
      case 1: 
        setDiceImage({uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/768px-Dice-1.svg.png'});
        break;
      
        case 2: 
        setDiceImage({uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/768px-Dice-2.svg.png'});
        break;
        
        case 3: 
        setDiceImage({uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/2048px-Dice-3.svg.png'});
        break;

        case 4: 
        setDiceImage({uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/2048px-Dice-4.svg.png'});
        break;

        case 5: 
        setDiceImage({uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/2048px-Dice-5.svg.png'});
        break;

        case 6: 
        setDiceImage({uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dice-6a.svg/2048px-Dice-6a.svg.png'});
        break;
        
        default:
          setDiceImage({uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-6.svg/2048px-Dice-6a.svg.png'});
        
    }

    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  const [diceImage, setDiceImage] = useState({uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/2048px-Dice-5.svg.png"})
  return (
    
      <View style={styles.container}>
        <View style={styles.diceContainer}>
          <Dice imageUrl={diceImage}/>

          <TouchableOpacity style={styles.diceBtn} onPress={generateDiceImage}>
            <Text style={styles.diceBtnText}>Roll the Dice</Text>
          </TouchableOpacity>
        </View>
      </View>
   
  )
}

export default App

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"blue",
    // height:500,
    // width:300
  },
  diceContainer:{
    flexDirection:'column',
    gap:29
    
    

  },
  diceImage:{
    height:200,
    width:200,
    backgroundColor:"red",
    borderRadius:10,
    
  },
  diceBtn:{
    paddingHorizontal: 10,
    paddingVertical:10,
    backgroundColor:"orange",
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:15
  },
  diceBtnText:{
    fontSize:23,
    fontWeight:'600'
  }
})