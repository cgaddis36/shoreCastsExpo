const rootURL = "http://www.shorecasts.com/graphql"

export default async function forecastService(zipcode) {
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
            location
          }}`,
        }),
      });
      let responseJSON = await response.json();
        console.log("your data", responseJSON);
        return responseJSON;
      } catch (error) {
        console.error(error)
      }
    }
