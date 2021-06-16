import React, {useState, useEffect} from 'react';
import { ImageBackground, ScrollView, StyleSheet, View, Image, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'
import getBusinessesByLocation from '../helpers/apiCalls/GetBusinessesByLocation.js';
import BusinessContainer from '../components/containers/BusinessContainer.js';


function Services() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const rootURL = "http://www.shorecasts.com/graphql";
  const [businessData, setBusinessData] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      getBusinessesByLocation({route, navigation, setBusinessData})
    }))
    return (
        <View
          style={[styles.background, {alignItems: 'top', justifyContent: 'top'}]}>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
          {businessData == "" ?
        <View style={[styles.buttonContainer, {marginLeft: 150, marginTop: 50}]}>
          <Text style={styles.buttonText}>SHOPS LOADING...</Text>
        </View>:

        <View style={{flexDirection: 'column', flex: 1, marginLeft: 5}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Services", {
                serviceId: "1",
                loading: true
              }) }
            style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Fly Shops</Text>
            </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Services", {
                serviceId: "2",
                loading: true
              }) }
            style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Bait Shops</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Services", {
                  serviceId: "3",
                  loading: true
                }) }
              style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Guides</Text>
              </TouchableOpacity>
        </View>
      }
        <View style={{flex: 2, marginLeft: 5}}>
          <ScrollView showsVerticalScrollIndicator={false}>
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
        {businessData == "" ? null :
          <View style={{flexDirection: 'column', flex: 1, marginRight: 5}}>
            <TouchableOpacity
              onPress={() => Alert.prompt(
                "Enter Zipcode",
                "Retrieve Businesses for the area",
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed')
                  },
                  {
                    text: 'Get Shops',
                    onPress: (text) =>
                    navigation.navigate("Services", {
                      zipcode: text,
                      loading: true
                    })
                  }]
                )}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Zipcode</Text>
            </TouchableOpacity>




          </View>}
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
    buttonContainer: {
       elevation: 8,
       backgroundColor: "#009688",
       borderRadius: 20,
       paddingVertical: 10,
       paddingHorizontal: 12,
       marginBottom: 10
     },
     buttonText: {
       fontSize: 10,
       color: "#fff",
       fontWeight: "bold",
       alignSelf: "center",
       textTransform: "uppercase"
     }


});

export default Services;
