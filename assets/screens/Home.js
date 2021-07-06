import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Button, Alert, Modal } from 'react-native';
import validateZipcode from '../helpers/ZipcodeValidation.js'
import LoginModal from '../components/modals/LoginModal.js';
import Button0 from '../components/buttons/Button0.js';

function Home({navigation, route}) {
  const [modalToggle, setModalToggle] = useState(false)
  const alert = () => {
    Alert.prompt(
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
  const handlePress = () => {
    setModalToggle(true)
    route.params.error = null
  }

  return (
    <View style={styles.background}>
      <Image source={require('../images/default.png')}
        style={styles.logo}
        />
        {route.params.error == null ?
          null :
          <View>
            <Text style={styles.errorText}>
              {route.params.error}
            </Text>
          </View>
          }
      <Modal visible={modalToggle}>
        <LoginModal
          setModalToggle={setModalToggle}
          />
      </Modal>
      {(route.params.user > 0) ?
        <View style={{backgroundColor: "rgb(30, 94, 238)", borderColor: "rgb(30, 94, 238)", height: 40, marginBottom: 50}}>
        </View>
        :
        <View style={{flexDirection: 'row'}}>
            <Button0
              title={"Login"}
              presser={handlePress}
              />
        </View>}
      <Image
        style={styles.images}
        source={require("../images/oceanWater.jpg")}
        />
        <Button0
          title={"Get Forecast"}
          presser={alert}
          />
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
  logo:{
    height:250,
    width: 250
  },
  images:{
    height: 350,
    width: 350,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 50
  },
  errorText:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    paddingBottom: 25
  }
})

export default Home;
