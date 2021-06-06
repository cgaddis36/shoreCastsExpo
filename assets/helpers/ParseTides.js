const parseTides = (tidesJSONData,
                    waterLevelsToday,
                    updateWaterLevelsToday,
                    waterLevelsTomorrow,
                    updateWaterLevelsTomorrow,
                    beginDate) => {
  tidesJSONData["predictions"].forEach(function(tide) {
    if(tide["t"].slice(0, 10).replace(/[-]/g,'') == beginDate){
      updateWaterLevelsToday( waterLevelsToday => [...waterLevelsToday, tide["v"]])
    }
    else {
      updateWaterLevelsTomorrow( waterLevelsTomorrow => [...waterLevelsTomorrow, tide["v"]])
    }
  })
  // console.log(waterLevelsToday)
};
export default parseTides
