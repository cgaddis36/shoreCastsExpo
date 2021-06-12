import React, {Component, useState} from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, Alert, Modal } from 'react-native';
import validateZipcode from '../helpers/ZipcodeValidation.js'
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'
import LoginModal from '../components/containers/LoginModal.js';

function Home() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
  const [modalToggle, setModalToggle] = useState(false)

  return (
    <View
      style={styles.background}>
      <Modal visible={modalToggle}>
        <LoginModal
          setModalToggle={setModalToggle}
          />
      </Modal>
      <Image
        style={styles.images}
        source={require("../images/telluride.jpeg")}/>
      {(route.params.user > 0) ? null:
      <View style={{flexDirection: 'row'}}>
        <View style={styles.loginRegisterButton}>
            <Button
            alignSelf='center'
            title="Login"
            color='white'
            onPress={() => setModalToggle(true)
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
                onPress: (text) => navigation.navigate("Loading", {
                  zipcode: text,
                  waterLevelsToday: [],
                  loading: true
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
