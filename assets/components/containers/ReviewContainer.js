import React, {Component} from 'react';
import {AirbnbRating} from "react-native-ratings";
import { ImageBackground, StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useNavigationState } from '@react-navigation/native';

function ReviewContainer({title, comment, rating, serviceId, navigation}) {
  console.log("Review container rating", rating)
  return (
    <View style={styles.reviewContainer}>
      <View style={{flexDirection: "column"}}>
        <Text style={{color: "white", marginTop: 5, fontWeight: 'bold', marginLeft: 3, textAlign: 'center'}}>
          {title}
        </Text>
        <AirbnbRating
        showRating={false}
        defaultRating={rating}
        fractions={1}
        ratingColor={'teal'}
        isDisabled={true}
        size={10}/>
        <Text style={{color: "white", fontSize: 10, fontWeight: 'bold', marginLeft: 10, marginRight: 10, paddingTop: 5}}>
        {comment}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    height:196,
    width:196,
    paddingBottom: 5,
    borderColor: 'rgba(51, 52, 56, 0.64)',
    marginBottom: 10,
    marginTop: 10,
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

export default ReviewContainer;
