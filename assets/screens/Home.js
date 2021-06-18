import React, {Component, useState} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, Modal } from 'react-native';
import validateZipcode from '../helpers/ZipcodeValidation.js'
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'
import LoginModal from '../components/modals/LoginModal.js';

function Home({navigation, route}) {
  // const route = useRoute();
  const state = useNavigationState(state => state);
  const [modalToggle, setModalToggle] = useState(false)
  const handlePress = () => {
    setModalToggle(true)
    route.params.error = null
  }

  return (
    <View
      style={styles.background}>
      {route.params.error == null ?
        null :
        <View>
          <Text style={{fontSize: 20, textAlign: 'center', color: 'white', paddingBottom: 25}}>
            {route.params.error}
          </Text>
        </View>
      }
      <Modal visible={modalToggle}>
        <LoginModal
          setModalToggle={setModalToggle}
          />
      </Modal>
      <Image
        style={styles.images}
        source={require("../images/oceanWater.jpg")}/>
      {(route.params.user > 0) ?
        <View style={[styles.loginRegisterButton, {backgroundColor: "rgb(30, 94, 238)", borderColor: "rgb(30, 94, 238)"}]}>
        </View>
        :
      <View style={{flexDirection: 'row'}}>
        <View style={styles.loginRegisterButton}>
            <Button
            alignSelf='center'
            title="Login"
            color='white'
            onPress={() => handlePress()
            }
            />
          </View>
        </View>}
        <View style={styles.forecastButton}>
          <Button
          alignSelf='center'
          title="Get Forecast"
          color='white'
          onPress={() => Alert.prompt(
            "Enter Zipcode",
            "Retrieve next 72 hour hourly weather forecast. NOAA tides predictions for next 48 Hours",
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed')
              },
              {
                text: 'Get Forecast',
                onPress: (text) =>
                navigation.navigate("Loading", {
                  zipcode: text,
                  waterLevelsToday: [],
                  loading: true,
                  error: null
                })
              }
            ]
          )
          }
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "rgb(30, 94, 238)"
  },
  forecastButton:{
    width: "40%",
    height: 40,
    borderRadius:20,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 50
  },
  loginRegisterButton:{
    width: "40%",
    height: 40,
    borderRadius:20,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 50,
  },
  modal:{
    height: 400,
    marginTop: 200,
    backgroundColor: "rgb(30, 94, 238)"

  },
  images:{
    height: 350,
    width: 350,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 25
  },
  button:{
    width: "40%",
    height: 40,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: "rgba(51, 52, 56, 0.64)",
    marginBottom: 25
  },
})

export default Home;
