import React, { Component } from 'react';
import { AirbnbRating } from "react-native-ratings";
import { ImageBackground, StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useNavigationState } from '@react-navigation/native';
function BusinessContainer({id, name, address, city, state, zip, description, phoneNumber, reviews, navigation, businessServices, services, averageRating}) {
  const parsed = parseInt(averageRating)
  return (
    <View style={styles.businessContainer}>
      <View style={{flexDirection: "column"}}>
        <Text style={{color: "white", fontWeight: 'bold', marginLeft: 3, textAlign: 'center'}}>
          {name}
        </Text>
        <Text style={[styles.businessText, {paddingTop: 5, fontWeight: 'bold', }]}>
        {address}
        </Text>
        <Text style={[styles.businessText, {fontWeight: 'bold'}]}>
        {city}, {state} {zip}
        </Text>
        <Text style={[styles.businessText, {fontWeight: 'bold'}]}>
          {phoneNumber}
        </Text>
        <Text style={{color: "white", fontSize: 10, fontWeight: 'bold', marginLeft: 10, marginRight: 10, paddingTop: 5}}>
          {description}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Reviews", {
              businessId: {id},
              name: {name},
              address: {address},
              city: {city},
              state: {state},
              description: {description},
              phoneNumber: {phoneNumber},
              reviews: {reviews},
              businessServices: {businessServices},
              services: {services},
              error: null
            }) }
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}> Reviews: {reviews.length} </Text>

                    <AirbnbRating
                            showRating={false}
                            defaultRating={parsed}
                            fractions={1}
                            ratingColor={'teal'}
                            isDisabled={true}
                            size={10}/>
                        
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  businessContainer: {
    height:196,
    width:196,
    paddingBottom: 5,
    borderColor: 'rgba(51, 52, 56, 0.64)',
    marginBottom: 10,
    borderRadius:20,
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: 'rgba(51, 52, 56, 0.64)'
  },
  buttonContainer: {
     elevation: 8,
     backgroundColor: "teal",
     borderRadius: 20,
     paddingVertical: 2,
     marginBottom: 5,
     marginTop: 5,
     width: 150,
     alignSelf: 'center'
   },
   businessText: {
     color: "white",
     fontSize: 10,
     textAlign: 'center'
   },
   buttonText: {
     fontSize: 10,
     color: "#fff",
     fontWeight: "bold",
     alignSelf: "center",
     textTransform: "uppercase"
   },
});

export default BusinessContainer;
