import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import {  useNavigation, useRoute, useNavigationState } from '@react-navigation/native'

function About({route, navigation}) {
  const state = useNavigationState(state => state);

  return (
    <View
        style={styles.background}>
        <Image source={require('../images/default.png')}
          style={styles.logo}
          />
      <View style={styles.aboutContainer}>
        <Text style={styles.mainText}>
          Shorecast weather application was designed to help recreational boaters, fisherman and
          other outdoor enthusiasts plan their days on the water in one place. Centralizing the NOAA tides chart, National Weather Service weather forecast
          and providing a place to rate your local tackle shops, fly shops and guides were my 3 main goals while building out the MVP of this product. Future iterations
          will include a map of the weather radar as well as wind radar and a profile page for logged in users to modify their information reviews they have left for shops.

        </Text>
        <Text style={[styles.mainText, {marginTop: 10}]}>
          If you are having any performance issues, experience any bugs or have any other questions or feedback you can reach out to me at
          cgaddis36@gmail.com
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "rgb(30, 94, 238)",
    flexDirection: 'column'
  },
  aboutContainer:{
    position: 'absolute',
    top: "10%",
    alignItems: 'center',
    height: "60%",
    width: "90%",
    backgroundColor: 'rgba(165, 168, 176, 0.64)',
    borderRadius: 20
    },
  mainText:{
    color: 'white',
    paddingTop: "5%",
    paddingHorizontal: "4%",
    fontSize: 15,
    fontWeight: 'bold'
  },
  logo:{
    height:"30%",
    width: "70%",
  },

});

export default About;
