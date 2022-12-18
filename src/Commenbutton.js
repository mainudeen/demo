import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Commenbutton() {
  return (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
          <Text style={styles.Button}>Loing Now</Text>
        </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({})