import React, {Component} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert } from 'react-native';
import validateZipcode from '../helpers/ZipcodeValidation.js'
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'

function Home() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);

  return (
    <View
      style={styles.background}>
      <Image
        style={styles.images}
        source={require("../images/telluride.jpeg")}/>
        <View style={styles.forecastButton}>
        <Button
        alignSelf='center'
        title="Get Forecast"
        color='white'
        onPress={() => Alert.prompt(
          "Enter Zipcode",
          "Retrieve next 72 hour hourly weather forecast. NOAA tides predictions for next 48 Hours",
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed')
            },
            {
              text: 'Get Forecast',
              onPress: (text) => navigation.navigate("Loading", {
                zipcode: text,
                waterLevelsToday: [],
                loading: true
              })
            }
          ]
        )
        }
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "rgb(30, 94, 238)"
  },
  forecastButton:{
    width: "40%",
    height: 40,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 50
  },
  images:{
    height: 350,
    width: 350,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 25
  },
  button:{
    width: "40%",
    height: 40,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 25
  },
  orContainer:{
    width: "10%",
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 25,
    backgroundColor: "rgba(165, 168, 176, 0.64)",
    justifyContent: 'center'
  },
  orText:{
    textAlign: "center",
    color: 'white'
  },

})

export default Home;
