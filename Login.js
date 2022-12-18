import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';


const Login = ({navigation}) => {
function TextInput() {
  
  onPress={ }
  if  (TextInput){
    TextInput= ("mainu");
  }
  else {
    alert.alert("ghhg");
  }
}
  return (
    <View>
      <LinearGradient
        colors={['#FF0059', '#FF0059']}
        style={styles.linearGradient}>
        <Image
          style={styles.loginimg}
          source={require('.//src/img/login.png')}
        />
      </LinearGradient>
      <View style={styles.login}>
        <Text style={styles.Text}>Login</Text>

        <TextInput style={styles.inp} placeholder="Email"  />
        <TextInput
          style={styles.inp}
          value="mainu"
          placeholder="Password"
           
          secureTextEntry={true}
        />
        {/* <Image style={styles.lock} source={require('.//src/img/Vector.png')} /> */}

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password</Text>
        </TouchableOpacity>
       
        <Text>or</Text>
        <View style={styles.boder}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
          <Text style={styles.Button}>Loing Now</Text>
        </TouchableOpacity>
       <TouchableOpacity>
        <Text>Sing Up</Text>
       </TouchableOpacity>
       
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  linearGradient: {
    width: 392,
    height: 500,
  },
  loginimg: {
    position: 'absolute',
    right: 27.5,
    top: 25,
    width: 330,
  },
  login: {
    backgroundColor: 'white',
    height: 350,
    position: 'absolute',
    top: 350,
    width: 350,
    marginLeft: 19,
    alignSelf: 'center',
    alignItems: 'center',
  },
  inp: {
    padding: 8,
    marginTop: 20,
    width: 300,
    borderRadius: 15,
    backgroundColor: 'lavenderblush',
    borderWidth:0.3
  },
  Text: {
    fontSize: 30,
    alignSelf: 'flex-start',
    marginLeft: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 12,
  },

  lock: {
    position: 'absolute',
    bottom: 175,
    right: 45,
    backgroundColor: 'white',
    color: 'black',
  },
  forgot: {
    position: 'absolute',
    left: 42,
    marginTop: 5,
  },
  Button: {
    backgroundColor: '#FF0059',
    color: 'white',
    width: 310,
    marginHorizontal: 20,
    textAlign: 'center',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    marginTop: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
  },
  boder: {
   height:1,
   width:250,
 
   backgroundColor:"grey"
  },
});
