import React, {Component} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert } from 'react-native';
import validateZipcode from '../helpers/ZipcodeValidation.js'
import stationService from '../helpers/StationService.js'
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'

function Home() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);

  return (
    <View
      style={styles.background}>
      <View style={styles.loginButton}>
        <Button
          alignSelf='center'
          title="Login"
          color='white'
          onPress={() => Alert.prompt("Enter email and password",
          "Please enter your credentials to login to ShoreCasts.",
          text => console.log(text))}
        />
      </View>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>Or
        </Text>
      </View>
       <View style={styles.registerButton}>
        <Button
          alignSelf='center'
          title="Register"
          color='white'
          onPress={() => console.log("About Pressed")}
        />
        </View>
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
  navBar: {
    marginTop: 75,
    position: 'absolute',
    top: 55,
    flexDirection: "row",
    marginBottom: 200,
    height: 50,
    width: "90%",
    justifyContent: 'space-around',
  },
  logoContainer:{
    marginTop: 10,
    position: 'absolute',
    top: 55,
    alignItems: 'center',
    width: 200,
    height: 38,
    backgroundColor: "rgba(165, 168, 176, 0.64)",
    borderRadius: 10,
    borderWidth: 1,
    },
  logoText:{
    fontSize: 25,
    color: 'white'
  },
  forecastButton:{
    width: "40%",
    height: 40,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 50
  },
  loginButton:{
    width: "40%",
    height: 40,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 25
  },
  registerButton:{
    width: "40%",
    height: 40,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 250
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
  Button: {
    borderRadius:10,
    borderWidth: 1,
  },
  navContainer: {
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: 'rgba(51, 52, 56, 0.64)'
  }

})

export default Home;
