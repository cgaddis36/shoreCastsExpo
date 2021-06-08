import tideService from './TideService.js'
import forecastService from './ForecastService.js'
import { useFocusEffect } from '@react-navigation/native'
import React, {useState} from 'react';


const rootURL = "http://www.shorecasts.com/graphql"

export default async function stationService(zipcode,
                                            setForecastData,
                                            forecastData,
                                            setTidesData,
                                            tidesData,
                                            waterLevelsToday,
                                            updateWaterLevelsToday,
                                            waterLevelsTomorrow,
                                            updateWaterLevelsTomorrow,
                                            handleChange,
                                            isLoading,
                                            beginDate,
                                            navigation) {
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
           closestStation(zip: "${zipcode}"){
             id
             stationId
             lat
             lon
           }}`,
         }),
       })
       .then(response => {
         response.json().then((data) => {

         })
       })
       return () => console.log("lost focus")
    })
  )
};
//   try {
//    let response = await fetch(`${rootURL}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `
//       query{
//         closestStation(zip: "${zipcode}"){
//           id
//           stationId
//           lat
//           lon
//         }}`,
//       }),
//     });
//     let responseJSON = await response.json();
//       setStationData(responseJSON)
//
//       updateWaterLevelsToday([])
//       updateWaterLevelsTomorrow([])
//
//       tideService(responseJSON["data"]["closestStation"]["stationId"],
//                   setTidesData,
//                   waterLevelsToday,
//                   updateWaterLevelsToday,
//                   waterLevelsTomorrow,
//                   updateWaterLevelsTomorrow,
//                   beginDate)
//
//       forecastService(responseJSON["data"]["closestStation"]["lat"],
//                       responseJSON["data"]["closestStation"]["lon"],
//                       setForecastData,
//                       forecastData,
//                       isLoading)
//
//       handleChange(zipcode, navigation)
//     return responseJSON;
//     } catch (error) {
//       console.error(error)
//   }
// }
