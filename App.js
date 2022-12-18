import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View,Text } from 'react-native';
import  Routers from './src/Routers';

const App = () => {
  return (
    <View style={{flex:1}}>
  
    <Routers/>
  
    </View>
  );
};

export default App;