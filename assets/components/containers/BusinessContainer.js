import React, {Component} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useNavigationState } from '@react-navigation/native';
function BusinessContainer({name, address, city, state, description, phoneNumber}) {
  return (
    <View style={{height:196,width:196, borderColor: 'rgba(51, 52, 56, 0.64)',marginBottom: 10, borderRadius:20,borderWidth: 1, alignItems: "center", backgroundColor: 'rgba(51, 52, 56, 0.64)'}}>
      <View style={{flexDirection: "column"}}>
        <Text style={{color: "lightgrey", marginLeft: 3, textAlign: 'center'}}>
          {name}
        </Text>
        <Text style={{color: "lightgrey", fontSize: 10, textAlign: 'center', paddingTop: 5}}>
        {address}
        </Text>
        <Text style={{color: "lightgrey", fontSize: 10, textAlign: 'center'}}>
        {city} {state}
        </Text>
        <Text style={{color: "lightgrey", fontSize: 10, textAlign: 'center'}}>
          {phoneNumber}
        </Text>
        <Text style={{color: "lightgrey", fontSize: 10, marginLeft: 10, marginRight: 10, paddingTop: 5}}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default BusinessContainer;
