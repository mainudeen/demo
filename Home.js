import { StyleSheet, Text, TouchableOpacity, View,Image, TextInput, Alert} from 'react-native';
import React from 'react';
import Login from './Login';
import Homes from './Homes';
import LinearGradient from 'react-native-linear-gradient';


const Home = ({navigation}) => {
  
  return (
    <View>
    <View>
      <LinearGradient colors={['#FF0059', '#F4C210']} style={styles.linearGradient}>
  
</LinearGradient>
      <Image style={styles.img} source={require("../Fjs_App/src/img/main.png")}/>
      <View>
<Text style={styles.text}>Order from a wide range of restaurants </Text>
<Text style={styles.text2}>Ready from a wide range of resturants</Text>

      </View>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
    <Text style={styles.buttoncolor}>GET STARTED</Text>
       

       </TouchableOpacity>
    
       
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient:{
    
    width: 428,
    height: 420,
   
  },
  img:{
    position: "absolute",
    top:25,
    right:-14,

  },
  text:{
    fontSize:26,
    textAlign:"center",
    color:"black",
    fontWeight:"900",
    padding:10,
    marginHorizontal:40,
  
    
    marginTop:20,
  
  },
  text2:{
    textAlign:"center",
    fontSize:14,
    margin:30,
    padding:10,
    
  },
  button:{
    backgroundColor:"#FF0059",
    width:310,
    marginHorizontal:47,
    textAlign:"center",
    height:55,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
   
   

  },
  buttoncolor:{
    color:"whate",
    fontSize:26,
    fontWeight:"600"
  }

});
