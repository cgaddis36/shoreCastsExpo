import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
function Forecast({zipcode, props, stationData, tidesData, forecastData, timeLabels, waterLevels, loading}) {
  const lineData = {
    labels: timeLabels,
    datasets: [
      {
        data: waterLevels,
        strokeWidth: 2, // optional
      },
    ],
  };
  // console.log("FORECAST DATA***", forecastData);
  // console.log("STATION DATA***", stationData);
  if(loading)
    return (
    <View>
     <Text style={styles.logoText}>Loading ...</Text>
    </View>);
  else if(!loading)
  return (
    <View
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>ShoreCasts</Text>
      </View>
      <View style={styles.navBar}>
        <View style={styles.navContainer}>
          <Button
          color='white'
          style={styles.Button}
          title="Guides"/>
        </View>
        <View style={styles.navContainer}>
          <Button
          color='white'
          style={styles.Button}
          title="FlyShops"/>
        </View>
        <View style={styles.navContainer}>
          <Button
          color='white'
          style={styles.Button}
          title="BaitShops"/>
        </View>
        <View style={styles.navContainer}>
          <Button
          color='white'
          style={styles.Button}
          title="About"/>
        </View>
      </View>
      <View>
  <Text>
    Bezier Line Chart
  </Text>
  <LineChart
    data={lineData}
    width={useWindowDimensions().width} // from react-native
    height={220}
    yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
        <Text style={styles.logoText}>{zipcode} Forecast</Text>
      <View style={styles.button1}>
        <Button
        title="Home"
        onPress={() => props.history.push("/")}
      />
      </View>
      <View style={styles.button2}>
        <Button
        title="Fly Shops"
        onPress={() => props.history.push("/flyshops")}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: "rgb(30, 94, 238)"
  },
  Button: {
    borderRadius:10,
    borderWidth: 1,
  },
  navContainer: {
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: 'rgba(51, 52, 56, 0.64)'
  },
  navBar: {
    marginTop: 75,
    position: 'absolute',
    top: 55,
    flexDirection: "row",
    marginBottom: 200,
    height: 50,
    width: "90%",
    justifyContent: 'space-around',
  },
  logoContainer:{
    marginTop: 10,
    position: 'absolute',
    top: 55,
    alignItems: 'center',
    width: 200,
    height: 38,
    backgroundColor: "rgba(165, 168, 176, 0.64)",
    borderRadius: 10,
    borderWidth: 1,
    },
    logoText:{
      fontSize: 25,
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

export default Forecast;
