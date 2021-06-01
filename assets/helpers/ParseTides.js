const parseTides = (tidesData, timeLabels, updateTimeLabels, waterLevels, updateWaterLevels) => {

  tidesData["data"].forEach(function(tide) {
    if(tide["t"].slice(-2) == "00") {
      updateTimeLabels( timeLabels => [...timeLabels, tide["t"]])
    }
    updateWaterLevels( waterLevels => [...waterLevels, tide["v"]])
  })
  console.log(timeLabels)
  console.log(waterLevels)
};
export default parseTides
