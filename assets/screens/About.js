import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import {  useNavigation, useRoute, useNavigationState } from '@react-navigation/native'

function About({route, navigation}) {

  const state = useNavigationState(state => state);
  console.log("About Navigation", state)

  return (
    <View
        style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>About Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "rgb(30, 94, 238)"
  },
  logoContainer:{
    position: 'absolute',
    top: 70,
    alignItems: 'center',
    marginTop: 200
    },
  logoText:{
    color: 'white'
  },
  button1:{
    width: "100%",
    height: 70,
    backgroundColor: "rgb(31, 112, 219)"
  },
  button2:{
    width: "100%",
    height: 70,
    backgroundColor: "rgb(31, 219, 78)"
  }

});

export default About;
