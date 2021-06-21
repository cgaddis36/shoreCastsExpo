import { ROOT_URL } from "@env"

export default function CreateReview({ title, comment, rating, businessServiceId, navigation }) {
  return fetch(`${ROOT_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation{
        createReview(input: {title: "${title}",
                              comment: "${comment}",
                              businessServiceId: "${businessServiceId}",
                              userId: "1",
                              rating: "${rating}"
        }) {
         review {
           id
           title
           rating
           comment
           userId
           businessServiceId
         }
        }}`,
    }),
  })
  .then(response => {
    response.json().then((data) => {
        console.log(data)
        navigation.navigate("Services")
        })
        .catch((error) => {
        console.log("error", error),
        navigation.navigate("Home", {error: "Please enter all fields and try again!"})
      })
      })
}
