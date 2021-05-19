import tideService from './TideService.js'
import forecastService from './ForecastService.js'
const rootURL = "http://www.shorecasts.com/graphql"

export default async function stationService(zipcode) {
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
      console.log("Your Data", responseJSON)
      console.log("stationId",responseJSON["data"]["closestStation"]["stationId"]);
      tideService(responseJSON["data"]["closestStation"]["stationId"])
      forecastService(responseJSON["data"]["closestStation"]["lat"], responseJSON["data"]["closestStation"]["lon"])
    return responseJSON;
    } catch (error) {
      console.error(error)
  }
}
