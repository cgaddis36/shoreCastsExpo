import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import {  useNavigation, useRoute, useNavigationState } from '@react-navigation/native'

function About({route, navigation}) {
  const state = useNavigationState(state => state);

  return (
    <View
        style={styles.background}>
      <View style={styles.aboutContainer}>
        <Image source={require('../images/default.png')}
          style={styles.logo}
          />
        <Text style={styles.mainText}>
          Shorecasts weather application is designed to help recreational boaters, fisherman and
          other outdoor enthusiasts plan their days on the water by centralizing the NOAA tidal predictions chart,
          weather forecasts from the National Weather Service & displaying the water temperatures for their area.

          Be on the lookout for more to come in future updates!
        </Text>
        <Text style={[styles.mainText, {marginTop: '5%'}]}>
          If you are having any performance issues, experience any bugs or have any other questions or feedback, please send them to
          shorecasts@gmail.com
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
    top: "1%",
    alignItems: 'center',
    height: "90%",
    width: "90%",
    backgroundColor: 'rgba(165, 168, 176, 0.64)',
    borderRadius: 20
    },
  mainText:{
    color: 'white',
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
