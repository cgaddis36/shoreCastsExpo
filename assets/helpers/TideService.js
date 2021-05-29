export default async function tideService(stationId, setTidesData) {
  try {
   let response = await fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=today&station=${stationId}&product=water_level&units=english&time_zone=gmt&application=ports_screen&datum=MLLW&format=json`);
    let responseJSON = await response.json();
    setTidesData(responseJSON)

    return responseJSON;
    } catch (error) {
      console.error(error)
  }
}
