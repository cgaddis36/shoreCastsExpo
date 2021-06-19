export default function CreateReview({ title, comment, rating, navigation, businessServiceId, userId }) {
  return fetch("http://www.shorecasts.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation{
        createReview(input: {title: "${title}",
                              comment: "${comment}",
                              businessServiceId: "${businessServiceId}",
                              userId: "${userId}",
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
        route.params.user = parseInt(data.data.createUser.user.id)
        navigation.navigate("Home")
        })
        .catch((error) => {
        console.log("error", error),
        navigation.navigate("Home", {error: "Invalid login Credentials. Please Try Again or Sign Up!"})
      })
      })
}
