import React, {Component, useState} from 'react';
import {AirbnbRating} from "react-native-ratings";
import { ImageBackground, StyleSheet, View, Image, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useWindowDimensions,
         useNavigationState } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import CreateReview from '../../helpers/apiCalls/CreateReview.js'

function ReviewModal({setReviewModalToggle, name}) {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(0)
  const [businessServiceId, setBusinessServiceId] = useState(route.params.businessServices.businessServices[0].id)
  const titleInputChange = (text) => {
    setTitle(text)
  }
  const commentInputChange = (text) => {
    setComment(text)
  }
  const handleReview = () => {
    CreateReview({title, comment, rating, businessServiceId, navigation})
    setReviewModalToggle(false)
  }
  return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../../images/default.png')}
            style={styles.logo}
            />
        </View>
          <Text style={styles.headerText}>
            {route.params.name.name}
          </Text>
          <Text style={[styles.headerText, {fontSize:30}]}>
            Reviews
          </Text>
          <Text style={styles.headerSubtext}>
            Enter a title, comment and rating to help other users in the fishing community find out about this store!
          </Text>
      </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Title
          </Text>
          <View style={styles.footerAction}>

            <TextInput
              placeholder="Enter a title for your review here."
            autoCapitalize="none"
            placeholderTextColor="#666666"
            onChangeText={(text) => titleInputChange(text)}
            style={styles.footerTextInput}/>

          </View>

          <Text style={[styles.footerText, {marginTop: 35}]}>
            Comment
          </Text>
          <View style={styles.footerAction}>

             <TextInput
               placeholder="Enter description here."
             autoCapitalize="none"
             style={styles.footerTextInput}
             placeholderTextColor="#666666"
             onChangeText={(text) => commentInputChange(text)}
             />

           </View>
          <View style={{marginTop:25}}>
           <AirbnbRating
                   showRating={false}
                   rating={3}
                   onFinishRating={setRating}
                   fractions={1}
                   ratingColor={'teal'}
                   isDisabled={false}
                   size={40}/>
          </View>
        <View style={{marginTop:30}}>
        </View>
        <View style={styles.loginButtonContainer}>
        <View style={styles.Button}>
          <Button
              alignSelf='center'
              title="Leave Review"
              color='white'
              onPress={() => handleReview()
              }
              />
        </View>
            <View style={styles.Button}>
              <Button
                  alignSelf='center'
                  title="Cancel"
                  color='white'
                  onPress={() => setReviewModalToggle(false)
                  }
                  />
            </View>
          </View>

        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  modalContainer:{
    height: 700,
    flex: 1,
    backgroundColor: "rgb(30, 94, 238)"
  },
  footerText:{
    color: 'rgba(51, 52, 56, 0.64)',
     fontSize: 18
  },
  footerAction: {
       flexDirection: 'row',
       marginTop: 10,
       borderBottomWidth: 1,
       borderBottomColor: '#f2f2f2',
       paddingBottom: 5
   },
   footerActionError: {
       flexDirection: 'row',
       marginTop: 10,
       borderBottomWidth: 1,
       borderBottomColor: '#FF0000',
       paddingBottom: 5
   },
  headerText: {
    color: '#fff',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 5
  },
  headerSubtext: {
    color: '#fff',
    alignItems: 'center',
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
  },
header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
},
logo:{
  height:250,
  width: 250,
},
logoContainer:{
  justifyContent: 'center',
  marginTop: 250,
  paddingLeft: 50,

},
footer: {
    flex: 2,
    backgroundColor: 'lightgrey',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
footerTextInput:{
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: 'black',
},
errorMsg: {
       color: 'rgba(51, 52, 56, 0.64)',
       fontSize: 14,
   },
  Button:{
    width: "40%",
    height: 40,
    borderRadius:20,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 20,
  },
  loginButtonContainer:{
    alignItems: 'center'
  }
});

export default ReviewModal;
