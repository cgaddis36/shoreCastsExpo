import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';

function Forecast({zipcode, props, stationData, tidesData, forecastData}) {
  console.log("TIDES DATA***", tidesData);
  console.log("FORECAST DATA***", forecastData);
  console.log("STATION DATA***", stationData);

  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/jack_mcgeezer.jpg')}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Forecast for {zipcode}</Text>
      </View>
      <View style={styles.button1}>
        <Button
        title="Home"
        onPress={() => props.history.push("/")}
      />
      </View>
      <View style={styles.button2}>
        <Button
        title="Fly Shops"
        onPress={() => props.history.push("/flyshops")}
        />
      </View>
    </ImageBackground>
  );

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoContainer:{
    position: 'absolute',
    top: 70,
    alignItems: 'center'
    },
  logoText:{
    color: 'orange'
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

export default Forecast;
