import tideService from './TideService.js'
import forecastService from './ForecastService.js'

const rootURL = "http://www.shorecasts.com/graphql"

export default async function stationService(zipcode, setForecastData, setTidesData, setStationData, tidesData, timeLabels, updateTimeLabels, waterLevels, updateWaterLevels, handleChange, props, isLoading) {
  isLoading(true)
  try {
   let response = await fetch(`${rootURL}`, {
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
    });
    let responseJSON = await response.json();
      setStationData(responseJSON)

      // console.log("Your Data", responseJSON)
      // console.log("stationId",responseJSON["data"]["closestStation"]["stationId"]);
      tideService(responseJSON["data"]["closestStation"]["stationId"], setTidesData, tidesData, timeLabels, updateTimeLabels, waterLevels, updateWaterLevels)
      forecastService(responseJSON["data"]["closestStation"]["lat"], responseJSON["data"]["closestStation"]["lon"], setForecastData, isLoading)
      handleChange(zipcode, props)
    return responseJSON;
    } catch (error) {
      console.error(error)
  }
}
