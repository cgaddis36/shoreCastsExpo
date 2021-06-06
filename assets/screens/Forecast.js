import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
function Forecast({zipcode,
                    props,
                    stationData,
                    tidesData,
                    forecastData,
                    timeLabels,
                    waterLevelsToday,
                    loading}) {
  const lineData = {
    labels: timeLabels,
    datasets: [
      {
        data: waterLevelsToday,
        // strokeWidth: .5, // optional
      },
    ],
  };
  // console.log(timeLabels)
  console.log("FORECAST DATA***", forecastData["hourly"]);
  // console.log("STATION DATA***", stationData);
  if(loading)
    return (
    <View style={styles.background}>
      <Text style={styles.loadingText}>
        Loading ...
      </Text>
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
      <View style={styles.charts}>
      <View style={styles.navContainer}>
      <Text style={styles.Button}>Tide Predictions for {zipcode}</Text>
      </View>
        <LineChart
          data={lineData}
          width={useWindowDimensions().width} // from react-native
          height={300}
          yAxisSuffix={'ft'}
          verticalLabelRotation={90}
          chartConfig={{
            backgroundColor: 'rgba(165, 168, 176, 0.64)',
            backgroundGradientFrom: 'rgba(165, 168, 176, 0.64)',
            backgroundGradientTo: 'rgba(165, 168, 176, 0.64)',
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
        <View style={styles.button2}>
        <Button
        title="Home"
        onPress={() => props.history.push("/")}
        />
        </View>
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
  charts: {
    marginTop: 150,
    position: 'absolute',
    // top: 55,
    flexDirection: "column",
    marginBottom: 200,
    // height: 50,
    // width: "90%",
    justifyContent: 'space-around',
  },
  forecastContainer:{
    position: 'absolute',
    top: 55,
    alignItems: 'center',
    width: 200,
    height: 38,
    backgroundColor: "rgba(165, 168, 176, 0.64)",
    borderRadius: 10,
    borderWidth: 1,
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
    loadingText:{
      fontSize: 30,
      marginBottom: 500
    },
  button1:{
    width: "100%",
    height: 70,
    backgroundColor: "rgb(31, 112, 219)"
  },
  button2:{
    width: "100%",
    height: 70,
    backgroundColor: "rgba(165, 168, 176, 0.64)"
  }
});

export default Forecast;
