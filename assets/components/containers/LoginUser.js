export default function LoginUser({ email, password, route, navigation }) {
  return fetch("http://www.shorecasts.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation {
        loginUser(input: {
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
        route.params.user = parseInt(data.data.loginUser.user.id)
        navigation.navigate("Home")
        })
      })
}
