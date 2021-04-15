import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button } from 'react-native';

function Tides({history}) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../images/splash.jpg')}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>ShoreCasts</Text>
      </View>
      <View style={styles.button1}>
      <Button
        title="Home"
        onPress={() => history.push("/")}
      />
      </View>
      <View style={styles.button2}>
        <Button
         title="About"
         onPress={() => history.push("/about")}
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

export default Tides;
