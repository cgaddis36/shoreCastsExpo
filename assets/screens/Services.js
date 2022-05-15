import React, {useState, useEffect} from 'react';
import { ImageBackground, ScrollView, StyleSheet, View, Image, Text, Button, Alert, TouchableOpacity, Modal } from 'react-native';
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'
import getBusinessesByLocation from '../helpers/apiCalls/GetBusinessesByLocation.js';
import BusinessContainer from '../components/containers/BusinessContainer.js';
import BusinessModal from '../components/modals/BusinessModal.js'

function Services() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const [businessData, setBusinessData] = useState([])
  const [businessModalToggle, setBusinessModalToggle] = useState(false)

  useFocusEffect(
    React.useCallback(() => {
      getBusinessesByLocation({route, navigation, setBusinessData})
    }))
    return (
        <View
          style={[styles.background, {alignItems: 'top', justifyContent: 'top'}]}>
          <Modal visible={businessModalToggle}>
            <BusinessModal
              setBusinessModalToggle={setBusinessModalToggle}
              />
          </Modal>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
          {businessData == "" ?
            <View style={[styles.buttonContainer, {marginHorizontal: "32%", marginTop: "50%"}]}>
              <Text style={styles.buttonText}>SHOPS LOADING...</Text>
            </View>
            :
            <View style={{flexDirection: 'column', flex: 1, marginLeft: "2%"}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Services", {
                    serviceId: "1",
                    loading: true,
                    error: null
                  }) }
                style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Fly Shops</Text>
                </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Services", {
                    serviceId: "2",
                    loading: true,
                    error: null
                  }) }
                style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Bait Shops</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Services", {
                      serviceId: "3",
                      loading: true,
                      error: null
                    }) }
                  style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Guides</Text>
                  </TouchableOpacity>
            </View>
          }
        <View style={{flex: 2, marginHorizontal: "1%"}}>
          <ScrollView showsVerticalScrollIndicator={false} scrollToOverflowEnabled={true}>
            <View style={{height: "100%"}}>
              {
                businessData.map((business, index) =>
                <BusinessContainer
                  key={index}
                  id={business["id"]}
                  name={business["name"]}
                  address={business["address"]}
                  city={business["city"]}
                  state={business["state"]}
                  zip={business["zip"]}
                  description={business["description"]}
                  phoneNumber={business["phoneNumber"]}
                  reviews={business["reviews"]}
                  navigation={navigation}
                  businessServices={business["businessServices"]}
                  services={business["services"]}
                  averageRating={business["averageRating"]}
                  />
                )
              }
            </View>
          </ScrollView>
        </View>
        {businessData == "" ?
          null
          :
          <View style={{flexDirection: 'column', flex: 1, marginRight: "1%"}}>
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
                      loading: true,
                      error: null
                    })
                  }]
                )}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Zipcode</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>{
                setBusinessModalToggle(true)
              }

               }
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Add Shop</Text>
            </TouchableOpacity>
            {route.params.error == null ? null :
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                  {route.params.error}
                </Text>
              </View>
            }
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
       backgroundColor: "teal",
       borderRadius: 20,
       paddingVertical: "15%",
       paddingHorizontal: "10%",
       marginBottom: "25%"
     },
     buttonText: {
       fontSize: 12,
       color: "#fff",
       fontWeight: "bold",
       alignSelf: "center",
       textTransform: "uppercase"
     },
     errorContainer: {
        backgroundColor: "lightgrey",
        borderRadius: 20,
        paddingVertical: "10%",
        marginTop: "10%"
      },
      errorText: {
        fontSize: 10,
        color: "red",
        alignSelf: "center",
        paddingHorizontal: "3%"
      }
});

export default Services;
