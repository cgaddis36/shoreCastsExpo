export default async function forecastService(lat, lon) {
  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=74487dc686eb52026cec8112d8fe98f5`);
    let responseJSON = await response.json();
      console.log("Your Data", responseJSON)

    return responseJSON;
    } catch (error) {
      console.error(error)
  }
}
