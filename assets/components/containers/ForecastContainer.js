import React, {Component} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useNavigationState } from '@react-navigation/native';
function ForecastContainer({image, text, temp, time, speed, direction, name, hourly}) {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);

  return (
    <View style={{height:130,width:130, marginLeft: 10, borderWidth: 0.5}}>
      <View style={{flex:1}}>
        <Image source={{uri: image}}
               style={{ flex: 1, width: 50, height: 20}}
          />
      </View>
      <View style={{flex:1, paddingLeft: 2.5, paddingTop: 5, paddingRight: 2.5}}>
        <Text>
          {(hourly == false) ? name : text}
        </Text>
      </View>
      <View style={{flex:1, paddingLeft: 2.5, paddingTop: 5, paddingRight: 2.5}}>
        <Text>
        {(hourly == false) ? (temp + "\u00b0" + "F") : (time + " " + temp + "\u00b0" + "F")}

        </Text>
      </View>
      <View style={{flex:1, paddingLeft: 2.5, paddingTop: 5, paddingRight: 2.5}}>
        <Text>
          Winds {speed} {direction}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ForecastContainer;
