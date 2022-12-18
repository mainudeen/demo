import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
const Stack = createNativeStackNavigator();
import Login from '../Login';
import Homes from '../Homes';
const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Navigator initialRouteName="Home"> */}
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen  name="Login" component={Login} />
       
        <Stack.Screen name="Homes" component={Homes} />
      </Stack.Navigator>
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Routers;

const styles = StyleSheet.create({});
