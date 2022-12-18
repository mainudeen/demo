import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';



export default function Homes() {
  return (
   
    <View>
      <LinearGradient colors={['#FF0059', '#F4C210']} style={styles.linearGradient}>
  
</LinearGradient>
      <Image style={styles.img} source={require("../Fjs_App/src/img/main.png")}/>
      <View>

      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  
  linearGradient:{
    
    width: 428,
    height: 420,
   
  },
  img:{
    position: "absolute",
    top:25,
    right:-14

  }
});
