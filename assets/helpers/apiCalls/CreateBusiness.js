import { REACT_APP_ROOT_URL } from "@env"

export default function CreateBusiness({ name, description, address, city, businessState, zip, navigation }) {
  return fetch(`${REACT_APP_ROOT_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation{
        createBusiness(input: {name: "${name}",
                                address: "${address}",
                                city: "${city}",
                                state: "${businessState}",
                                zip: "${zip}",
                                description: "${description}",
                                phoneNumber: "1",
                                hours: "1",
                                url: "www"
        }) {
         business {
            id
            name
            address
            city
            zip
            state
            url
            description
            phoneNumber
            hours
         }
        }}`,
    }),
  })
  .then(response => {
    response.json().then((data) => {
        navigation.navigate("Services")
        })
        .catch((error) => {
        console.log("error", error),
        navigation.navigate("Home", {error: "There was an error! Try again."})
      })
      })
}
