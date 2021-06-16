
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
        }}`,
      }),
    })
    .then(response => {
      response.json().then((data) => {
        if(route.params.loading == true){
          setBusinessData(data["data"]["getBusinessesByLocation"])
          console.log(data)
          route.params.loading = false
        }
        })
      })
}
