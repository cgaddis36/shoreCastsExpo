import { ROOT_URL } from "@env"
export default function getBusinessesByLocation({ route, navigation, setBusinessData }) {
  return fetch(`${ROOT_URL}`, {
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
          zip
          averageRating
          description
          reviews {
              title
              comment
              rating
              userId
              createdAt
          }
          services {
            id
            name
          }
          businessServices {
            id
            businessId
            serviceId
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
              route.params.error = "No stores for this category currently in our database, try submitting one above.",
              route.params.loading = false
              navigation.navigate("Services")
          })
        })
}
