import parseTides from './ParseTides.js'

export default async function tideService(stationId,
                                          setTidesData,
                                          waterLevelsToday,
                                          updateWaterLevelsToday,
                                          waterLevelsTomorrow,
                                          updateWaterLevelsTomorrow,
                                          beginDate,
                                        tidesData) {
  try {
    let endDate = (parseInt(beginDate) + 1)

   let response = await fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=${beginDate}&end_date=${endDate}&station=${stationId}&product=predictions&units=english&time_zone=gmt&application=ports_screen&datum=MLLW&format=json`);
    let responseJSON = await response.json();
    parseTides(responseJSON,
                waterLevelsToday,
                updateWaterLevelsToday,
                waterLevelsTomorrow,
                updateWaterLevelsTomorrow,
                beginDate)
    setTidesData(responseJSON)

    console.log("TIDESERVICE TIDES DATA", tidesData)
    return responseJSON;
    } catch (error) {
      console.error(error)
  }
}
