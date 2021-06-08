import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, Button, useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'

function Forecast() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);
console.log("SUMMARY", route.params.forecastHourlyData)
// console.log("Water Temp Tmorrow Hourly params", route.params.forecastSummary)

  const lineDataToday = {
    labels: route.params.timeLabels,
    datasets: [
      {
        data: route.params.tidesToday,
        // strokeWidth: .5, // optional
      },
    ],
  };
  const lineDataTomorrow = {
    labels: route.params.timeLabels,
    datasets: [
      {
        data: route.params.tidesTomorrow,
        // strokeWidth: .5, // optional
      },
    ],
  };

  return (
    <View
      style={styles.background}>

      <View style={styles.charts}>
      <View style={styles.navContainer}>
      <Text style={styles.Button}>Tide Predictions for {route.params.beginDate}</Text>
      </View>
        <LineChart
          data={lineDataToday}
          width={400} // from react-native
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

// const [zipcode, setZipcode] = useState("default Zipcode");
// const [forecastData, setForecastData] = useState("default Forecast Data");
// const [stationData, setStationData] = useState("default Station Data");
// const [waterLevelsToday, updateWaterLevelsToday] = useState([]);
// const [waterLevelsTomorrow, updateWaterLevelsTomorrow] = useState([]);
// const [loading, isLoading] = useState(false);
// const [today, setToday] = useState(new Date());
// const beginDate = today.toISOString().slice(0, 10).replace(/[-]/g,'');
// const [tidesData, setTidesData] = useState("default Tides Data");
