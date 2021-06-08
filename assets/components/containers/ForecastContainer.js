import React, {Component} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useNavigationState } from '@react-navigation/native';
function ForecastContainer({image, text}) {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  console.log("ForecastContainer image", image)
  return (
    <View style={{height:130,width:130, marginLeft: 10, borderWidth: 0.5}}>
      <View style={{flex:2}}>
        <Image source={{uri: image}}
               style={{ flex: 1, width: null, height: null, resizeMode: 'cover'}}
          />
      </View>
      <View style={{flex:1, paddingLeft: 2.5, paddingTop: 5, paddingRight: 2.5}}>
        <Text>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ForecastContainer;
