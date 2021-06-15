import React, {useState} from 'react';
import { ImageBackground, ScrollView, StyleSheet, View, Image, Text, Button } from 'react-native';
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'
import BusinessContainer from '../components/containers/BusinessContainer.js';

function Services() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const rootURL = "http://www.shorecasts.com/graphql";
  const [businessData, setBusinessData] = useState([])


  useFocusEffect(
    React.useCallback(() => {
      fetch(`${rootURL}`, {
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
            setBusinessData(data["data"]["getBusinessesByLocation"])
            console.log(businessData)

            })
          })
        }))
    return (
        <View
          style={styles.background}>
          {businessData == "" ?
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SHOPS LOADING...</Text>
        </View>:
        <View style={styles.logoContainer}>

        </View>}
        <View style={{marginTop: 10}}>
          <ScrollView>
            {
              businessData.map((business, index) =>
              <BusinessContainer
                key={index}
                name={business["name"]}
                address={business["address"]}
                city={business["city"]}
                state={business["state"]}
                description={business["description"]}
                phoneNumber={business["phoneNumber"]}
                />
            )
            }
          </ScrollView>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: "rgb(30, 94, 238)"
    },
    logoContainer:{
      position: 'absolute',
      top: 70,
      alignItems: 'center'
      },
    logoText:{
      color: 'white'
    },
    button1:{
      width: "100%",
      height: 70,
      backgroundColor: "rgb(31, 112, 219)"
    },
    button2:{
      width: "100%",
      height: 70,
      backgroundColor: "rgb(31, 219, 78)"
    }

});

export default Services;
