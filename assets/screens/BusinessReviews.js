import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View, Image, Text, Button, ScrollView } from 'react-native';
import ReviewContainer from '../components/containers/ReviewContainer.js'
import { AntDesign } from '@expo/vector-icons';
import {  useNavigation, useRoute, useNavigationState } from '@react-navigation/native'

function BusinessReviews({route, navigation}) {

  const state = useNavigationState(state => state);
  console.log("BusinessReviews Navigation", route.params.reviews)
  console.log("BusinessReviews Navigation", route.params.businessServices.businessServices)

  return (
    <View style={styles.background}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.logo}>



        <TouchableOpacity
          onPress={() =>

            console.log("add review pressed.")
            }
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>

        </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
              {route.params.name["name"]}
              </Text>
            </View>
            <View style={{flex: 1}}>
            </View>
      </View>
      {route.params.reviews.reviews.length > 0 ?
        <View style={styles.aboutContainer}>
        <View style={styles.sidebar}>
        </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            {
            route.params.reviews.reviews.map((review, index) =>
              <ReviewContainer
                key={index}
                id={review["id"]}
                title={review["title"]}
                comment={review["comment"]}
                rating={review["rating"]}
                serviceId={review["serviceId"]}
              />
          )
        }
          </ScrollView>
          <View style={styles.sidebar}>
          </View>
        </View>
        :
        <Image source={require('../images/default.png')}
        style={styles.logo}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "rgb(30, 94, 238)",
    flexDirection: 'column'
  },
  aboutContainer:{
    flex: 2,
    alignItems: 'center',
    height: 675,
    width: 350,
    backgroundColor: 'rgba(165, 168, 176, 0.64)',
    borderRadius: 20
    },
  titleText:{
    color: 'white',
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    width: 200,
    backgroundColor: 'teal',
    borderRadius: 20,
    borderWidth: .1,
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
    flex: 2
  },
  logo:{
    height:250,
    width: 250,
  },
  sidebar:{
    flex: .8
  },
  logo:{
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  buttonContainer: {
     elevation: 8,
     backgroundColor: "teal",
     borderRadius: 20,
     paddingVertical: 10,
     paddingHorizontal: 12,
     marginBottom: 10
   },
   buttonText: {
     fontSize: 12,
     color: "#fff",
     fontWeight: "bold",
     alignSelf: "center",
     textTransform: "uppercase"
   },
});

export default BusinessReviews;
