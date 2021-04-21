import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert } from 'react-native';
import validateZipcode from '../helpers/ZipcodeValidation.js'
import forecastService from '../helpers/ForecastService.js'


function Home({history}) {
  return (
    <View
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>ShoreCasts</Text>
      </View>
      <View style={styles.navBar}>
        <View style={styles.navContainer}>
          <Button
          color='white'
          style={styles.Button}
          title="Guides"/>
        </View>
        <View style={styles.navContainer}>
          <Button
          color='white'
          style={styles.Button}
          title="FlyShops"/>
        </View>
        <View style={styles.navContainer}>
          <Button
          color='white'
          style={styles.Button}
          title="BaitShops"/>
        </View>
        <View style={styles.navContainer}>
          <Button
          color='white'
          style={styles.Button}
          title="About"/>
        </View>
      </View>
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
          onPress={() => Alert.prompt("Enter Zipcode",
          "Retrieve next 72 hour hourly weather forecast.",
          text => console.log(text))}
        />
        </View>
        <View style={styles.forecastButton}>
        <Button
        alignSelf='center'
        title="Get Forecast"
        color='white'
        onPress={() => Alert.prompt("Enter Zipcode",
        "Retrieve next 72 hour hourly weather forecast.",
        text => {
        if (validateZipcode(text) === true) {
          forecastService(text);
        };
      }
      )}
        />
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

});

export default Home;
