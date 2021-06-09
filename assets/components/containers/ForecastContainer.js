import React, {Component} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useNavigationState } from '@react-navigation/native';
function ForecastContainer({image, text, temp, time, speed, direction, name, hourly, containerWidth, containerHeight}) {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);

  return (
    <View style={{height:containerHeight,width:containerWidth, marginLeft: 10, borderRadius:5,borderWidth: 1, alignItems: "center"}}>
      <View style={{flex:.8, flexDirection: "row"}}>
        <Image source={{uri: image}}
               style={{ flex: .8, width: 40, height: 40, borderRadius:5,borderWidth: .3, borderColor: 'rgba(37, 35, 35, 0.84)', marginLeft:1, marginTop:1}}
          />
        <Text style={{color: "lightgrey", marginLeft: 3}}>
          {(hourly == false) ? (temp + "\u00b0" + "F") : (temp + "\u00b0" + "F" + " " + time )}
        </Text>
      </View>
      <View style={{flex:2, paddingLeft: 2.5, paddingTop: 5, paddingRight: 2.5, marginTop: 10}}>
        <Text style={{color: "lightgrey", fontSize: 10, textAlign: 'center'}}>
          {(hourly == false) ? (name + " " + text) : text}
        </Text>
      </View>
      <View style={{flex:.5, paddingLeft: 2.5, paddingTop: 5, paddingRight: 2.5}}>
        <Text style={{color: "lightgrey", fontSize: 10}}>
          Winds {speed} {direction}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ForecastContainer;
