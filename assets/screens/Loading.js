import React, { useState } from 'react';
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'
import { REACT_APP_ROOT_URL } from "@env"
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';

function Loading() {
  const route = useRoute();
  const navigation = useNavigation();
  const [failed, setFailed] = useState(false)
  const state = useNavigationState(state => state);
  const fetchPredictions = (data) => {
    fetch(`https://api.weather.gov/points/${data.data.closestStation.lat},${data.data.closestStation.lon}`)
      .then(response => {
        response.json().then((foreData) => {
          fetch(foreData.properties.forecast.concat("/hourly"))
            .then(response => {
              response.json().then((forecastingData) => {
                fetch((`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${route.params.beginDate}&end_date=${route.params.endDate}&station=${data.data.closestStation.stationId}&product=predictions&units=english&time_zone=gmt&application=ports_screen&datum=MLLW&format=json`))
                  .then(response => {
                    response.json().then((tideData) => {
                      fetch(foreData.properties.forecast)
                      .then(response => {
                        response.json().then((forecastSummary) => {
                          fetch((`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${route.params.beginDate}&end_date=${route.params.endDate}&station=${data.data.closestStation.stationId}&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&datum=MLLW&format=json`))
                            .then(response => {
                              response.json().then((waterTempData) => {
                                console.log("Water Temp Data", waterTempData["error"])
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
                                    var waterTempToday = []
                                    var waterTempTomorrow = []
                                    console.log("Forecast data", forecastingData)
                                    if (waterTempData["error"] ){
                                      null
                                    } else {
                                      waterTempData["data"].forEach(function(temp) {
                                        waterTempToday.push(parseFloat(temp["v"]))
                                      })
                                    }
                                    var periods = []
                                    if (forecastingData["properties"] && forecastingData["properties"]["periods"]){
                                      periods = forecastingData["properties"]["periods"]
                                    }
                                    var forecastPeriods = []
                                    if (forecastSummary["properties"] && forecastSummary["properties"]["periods"]){
                                      forecastPeriods = forecastSummary["properties"]["periods"]
                                    }
                                    navigation.navigate("Forecast", {
                                      tidesToday: tidingsToday,
                                      tidesTomorrow: tidingsTomorrow,
                                      loading: false,
                                      forecastHourlyData: periods,
                                      timeLabels: ["1am", "2am", "3am", "4am", "5am", "6am",
                                      "7am", "8am", "9am", "10am", "11am", "12pm",
                                      "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",
                                      "7pm", "8pm", "9pm", "10pm", "11pm"],
                                      forecastSummaryData: forecastPeriods,
                                      waterTempData: waterTempData,
                                      waterTempToday: waterTempToday,
                                      waterTempTomorrow: waterTempTomorrow
                                    })
                                  })
                                })
                        })
                      })
                    })
                  })
              })
            })
          })
      })
  }
  console.log("REACT APP ROOT URL", `${REACT_APP_ROOT_URL}`)
  useFocusEffect(
    React.useCallback(() => {
      fetch(`${REACT_APP_ROOT_URL}`, {
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
            if(data.data !== null){
              console.log("data", data)
              fetchPredictions(data)
            } else {
              setFailed(true)
            }
            })
          })
        }))
  return (
      <View style={styles.background}>
        {failed ?
          <View style={styles.loadingTextContainer}>
            <Text style={styles.loadingText}>Please try another Postal Code near the ocean</Text>
          </View>
          :
          <View style={styles.loadingTextContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        }
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
  loadingTextContainer:{
    position: 'absolute',
    top: "50%",
    alignItems: 'center'
    },
  loadingText:{
    color: 'white',
    fontSize: 20
  },


});

export default Loading;
