import { REACT_APP_ROOT_URL } from "@env"

export default function CreateUser({ email, password, route, navigation }) {
  return fetch(`${REACT_APP_ROOT_URL}`, {
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
        .catch((error) => {
        console.log("error", error),
        navigation.navigate("Home", {error: "Invalid login Credentials. Please Try Again or Sign Up!"})
      })
      })
}
