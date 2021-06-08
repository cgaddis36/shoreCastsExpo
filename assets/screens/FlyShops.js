import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';

function FlyShops({history}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/splash.jpg')}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>FLY PAGE</Text>
      </View>
      <View style={styles.button1}>
      <Button
        title="Home"
        onPress={() => history.push("/")}
      />
      </View>
      <View style={styles.button2}>
        <Button
         title="Bait Shops"
         onPress={() => history.push("/baitshops")}
         />
      </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoContainer:{
    position: 'absolute',
    top: 70,
    alignItems: 'center'
    },
  logoText:{
    color: 'white'
  },
  button1:{
    width: "100%",
    height: 70,
    backgroundColor: "rgb(31, 112, 219)"
  },
  button2:{
    width: "100%",
    height: 70,
    backgroundColor: "rgb(31, 219, 78)"
  }

});

export default FlyShops;
