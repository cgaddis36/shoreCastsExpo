
export default function CreateUser({ email, password, route }) {
  return fetch("http://www.shorecasts.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {
        createUser(input: {
        email: "${email}"
        password: "${password}"

    }){ user {
          email,
          id
    }
    }
}`,
    }),
  })
  .then(response => {
    response.json().then((data) => {
        route.params.user = parseInt(data.data.createUser.user.id)
        navigation.navigate("Home")
        })
      })
}
