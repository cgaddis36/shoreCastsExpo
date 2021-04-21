const rootURL = "http://www.shorecasts.com/graphql"

export default function forecastService(zipcode) {
     return fetch(`${rootURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query{
          closestStation(zipcode: ${zipcode}){
            id
            stationId
            location
          }}`,
        }),
      })
      .then(response => {
        if (response.ok) {
          console.log(response.json)
          return response.json()
        }
      })
    }
