import React from 'react';
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'

import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';

function Loading() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const rootURL = "http://www.shorecasts.com/graphql";

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
            fetch(`https://api.weather.gov/points/${data.data.closestStation.lat},${data.data.closestStation.lon}`)
              .then(response => {
                response.json().then((foreData) => {
                  fetch(foreData.properties.forecast)
                    .then(response => {
                      response.json().then((forecastingData) => {
                        fetch((`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${route.params.beginDate}&end_date=${route.params.endDate}&station=${data.data.closestStation.stationId}&product=predictions&units=english&time_zone=gmt&application=ports_screen&datum=MLLW&format=json`))
                          .then(response => {
                            response.json().then((tideData) => {
                              console.log(tideData)
                              var tidingsToday = []
                              var tidingsTomorrow = []
                              tideData["predictions"].forEach(function(tide) {
                                if(tide["t"].slice(0, 10).replace(/[-]/g,'') == route.params.beginDate){
                                  tidingsToday.push(tide["v"])
                                }
                                else {
                                  tidingsTomorrow.push(tide["v"])
                                }
                              })
                              navigation.navigate("Forecast", {
                                                      tidesToday: tidingsToday,
                                                      tidesTomorrow: tidingsTomorrow,
                                                      loading: false
                              })
                            })
                          })
                        // navigation.setParams({forecastData: forecastingData,
                        //                       loading: false
                        //                         })
                        // navigation.navigate("Forecast")
                      })
                    })
                  })
              })
            })
          })
        }))
  return (
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
