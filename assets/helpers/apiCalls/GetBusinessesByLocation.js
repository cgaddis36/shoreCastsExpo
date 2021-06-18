
export default function getBusinessesByLocation({ route, navigation, setBusinessData }) {
  return fetch("http://www.shorecasts.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query{
        getBusinessesByLocation(zip: "${route.params.zipcode}", distance: "${route.params.distance}", serviceId: "${route.params.serviceId}"){
          id
          name
          address
          phoneNumber
          city
          state
          description
          reviews {
              title
              comment
              rating
              userId
          }
        }}`,
      }),
    })
    .then(response => {
      response.json().then((data) => {
        if(route.params.loading == true) {
            setBusinessData(data["data"]["getBusinessesByLocation"])
            console.log(data)
              route.params.error = null
              route.params.loading = false
              navigation.navigate("Services")
            }
          })
          .catch((error) => {
            console.log("error", error)
              route.params.error = "No stores for this category currently in our database, try submitting one below.",
              route.params.loading = false
              navigation.navigate("Services")
          })
        })
}
