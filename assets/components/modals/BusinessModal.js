import React, {Component, useState} from 'react';
import {AirbnbRating} from "react-native-ratings";
import { ImageBackground, StyleSheet, View, Picker, Image, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useWindowDimensions,
         useNavigationState } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import CreateBusiness from '../../helpers/apiCalls/CreateBusiness.js'

function BusinessModal({setBusinessModalToggle}) {


  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [businessState, setBusinessState] = useState("")
  const [zip, setZip] = useState("")

  const nameInputChange = (text) => {
    setName(text)
  }
  const descriptionInputChange = (text) => {
    setDescription(text)
  }
  const addressInputChange = (text) => {
    setAddress(text)
  }
  const cityInputChange = (text) => {
    setCity(text)
  }
  const stateInputChange = (text) => {
    setBusinessState(text)
  }
  const zipInputChange = (text) => {
    setZip(text)
  }
  const handleBusiness = () => {
    CreateBusiness({name, description, address, city, businessState, zip, navigation})
    setBusinessModalToggle(false)
  }

  return (
    <View style={styles.modalContainer}>
      <View style={styles.header}>

        <Text style={[styles.headerText, {fontSize:30}]}>
        New Bait Shop, Fly Shop or Guided Service
        </Text>
        <Text style={styles.headerSubtext}>
          Enter the information for a new business below to help other users in the fishing community find out about this store!
        </Text>
        <View style={styles.loginButtonContainer}>
           <View style={styles.Button}>
           <Button
           alignSelf='center'
           title="Add Shop"
           color='white'
           onPress={() => handleBusiness()
           }
           />
           </View>
           <View style={styles.Button}>
           <Button
           alignSelf='center'
           title="Cancel"
           color='white'
           onPress={() => setBusinessModalToggle(false)
           }
           />
           </View>
        </View>
      </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Name
          </Text>
          <View style={styles.footerAction}>
            <TextInput
              placeholder="Enter a Name for your shop here."
            autoCapitalize="none"
            placeholderTextColor="#666666"
            onChangeText={(text) => nameInputChange(text)}
            style={styles.footerTextInput}/>
          </View>
          <Text style={[styles.footerText, {marginTop: '5%'}]}>
            Description
          </Text>
          <View style={styles.footerAction}>
             <TextInput
               placeholder="Enter description here."
             autoCapitalize="none"
             style={styles.footerTextInput}
             placeholderTextColor="#666666"
             onChangeText={(text) => descriptionInputChange(text)}
             />
           </View>
           <Text style={[styles.footerText, {marginTop: '5%'}]}>
             Address
           </Text>
           <View style={styles.footerAction}>
              <TextInput
                placeholder="Enter street address here."
              autoCapitalize="none"
              style={styles.footerTextInput}
              placeholderTextColor="#666666"
              onChangeText={(text) => addressInputChange(text)}
              />
            </View>
            <Text style={[styles.footerText, {marginTop: '5%'}]}>
              City
            </Text>
            <View style={styles.footerAction}>
               <TextInput
                 placeholder="Enter city here."
               autoCapitalize="none"
               style={styles.footerTextInput}
               placeholderTextColor="#666666"
               onChangeText={(text) => cityInputChange(text)}
               />
             </View>
             <Text style={[styles.footerText, {marginTop: '5%'}]}>
               State
             </Text>
             <View style={styles.footerAction}>
                <TextInput
                  placeholder="Enter state here."
                autoCapitalize="none"
                style={styles.footerTextInput}
                placeholderTextColor="#666666"
                onChangeText={(text) => stateInputChange(text)}
                />
              </View>
              <Text style={[styles.footerText, {marginTop: '5%'}]}>
                Zipcode
              </Text>
              <View style={styles.footerAction}>
                 <TextInput
                   placeholder="Enter zipcode here."
                 autoCapitalize="none"
                 style={styles.footerTextInput}
                 placeholderTextColor="#666666"
                 onChangeText={(text) => zipInputChange(text)}
                 />
               </View>
          <View style={styles.lowerFooter}>

          </View>
        <View style={{marginTop:30}}>
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
       marginTop: "1%",
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
    marginBottom: 15
  },
header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: '5%'
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
    paddingLeft: '1%',
    color: 'black',
},
errorMsg: {
       color: 'rgba(51, 52, 56, 0.64)',
       fontSize: 14,
   },
   ratingSelector:{
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection: 'column',
     marginTop: 25
   },
  Button:{
    width: "40%",
    height: 40,
    borderRadius:20,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    justifyContent: 'center'
  },
  lowerFooter:{
    flexDirection: 'column'
  },
  ratingSelector:{
    marginBottom: 10,
    marginTop: 25
  },
  picker: {
    flexDirection: 'row'
  },
  loginButtonContainer:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

export default BusinessModal;
