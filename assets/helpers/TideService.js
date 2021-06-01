import parseTides from './ParseTides.js'

export default async function tideService(stationId, setTidesData, tidesData, timeLabels, updateTimeLabels, waterLevels, updateWaterLevels) {
  try {
   let response = await fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=today&station=${stationId}&product=water_level&units=english&time_zone=gmt&application=ports_screen&datum=MLLW&format=json`);
    let responseJSON = await response.json();
    setTidesData(responseJSON)
    parseTides(tidesData, timeLabels, updateTimeLabels, waterLevels, updateWaterLevels)

    return responseJSON;
    } catch (error) {
      console.error(error)
  }
}
