import React from 'react';
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'

import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';

function Loading() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const rootURL = "http://www.shorecasts.com/graphql"

  console.log("1 Loading Boolean", route)

  return (
    useFocusEffect(
      React.useCallback(() => {
        fetch(`${rootURL}`, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           query: `
           query{
             closestStation(zip: "${route.params.zipcode}"){
               id
               stationId
               lat
               lon
             }}`,
           }),
         })
         .then(response => {
           response.json().then((data) => {
             navigation.setParams({stationData: data})
           })
         }),
       fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${route.params.stationData.data.closestStation.lat}&lon=${route.params.stationData.data.closestStation.lon}&exclude=minutely&units=imperial&appid=74487dc686eb52026cec8112d8fe98f5`)
         .then(response => {
           response.json().then((foreData) => {
             navigation.setParams({forecastData: foreData})
           })
         }),
       fetch((`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${beginDate}&end_date=${endDate}&station=${route.params.stationData.data.closestStation.stationId}&product=predictions&units=english&time_zone=gmt&application=ports_screen&datum=MLLW&format=json`))
         .then(response => {
           response.json().then((tidesData) => {
             navigation.setParams({tidesData: tidesData})
           })
         }),
         console.log("Tides", route.params.tidesData)
      })
    ),
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Loading...</Text>
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
    alignItems: 'center'
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

export default Loading;
