import React from 'react';
import { ImageBackground,
         StyleSheet,
         View,
         Image,
         Text,
         Button,
         ScrollView,
         useWindowDimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useFocusEffect,
         useNavigation,
         useRoute,
         useNavigationState } from '@react-navigation/native';
import ForecastContainer from '../components/containers/ForecastContainer.js';

function Forecast() {
  const route = useRoute();
  const navigation = useNavigation();
  const state = useNavigationState(state => state);

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
      <ScrollView
      scrollEventThrottle={16}
      >
      <View style={styles.scrollTextContainer}>
        <Text style={{marginTop: 5, color: 'white'}}>
          Hourly Weather Forecast
        </Text>
        <View style={{ height: 130, marginTop: 5}}>
          <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}>
            {route.params.forecastHourlyData.map((component, index) =>
              <ForecastContainer
                key={index}
                image={component["icon"]}
                text={component["shortForecast"]}
                temp={component["temperature"]}
                time={component["endTime"].slice(11, 16)}
                speed={component["windSpeed"]}
                direction={component["windDirection"]}
                name={null}
                hourly={true}
                containerWidth={130}
                containerHeight={130}
                />
            )}

          </ScrollView>
        </View>

        <Text style={{marginTop: 5, color: 'white'}}>
         7-Day Weather Summary
        </Text>
        <View style={{ height: 150, marginTop: 5, marginBottom: 10}}>
          <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}>
            {route.params.forecastSummaryData.map((component, index) =>
              <ForecastContainer
                key={index}
                image={component["icon"]}
                text={component["detailedForecast"]}
                temp={component["temperature"]}
                time={component["endTime"].slice(11, 16)}
                speed={component["windSpeed"]}
                direction={component["windDirection"]}
                name={component["name"]}
                hourly={false}
                containerWidth={210}
                containerHeight={150}
                />
            )}

          </ScrollView>
        </View>

      </View>
    </ScrollView>
    <View style={styles.charts}>
      <View style={styles.navContainer}>
        <Text style={styles.bannerText}>Water Temperature: {Math.min.apply(Math, route.params.waterTempToday)} - {Math.max.apply(Math, route.params.waterTempToday)}{"\u00b0"+"F"}</Text>
      </View>
      <View style={styles.navContainer}>
        <Text style={styles.bannerText}>Tide Predictions for {route.params.beginDate}</Text>
      </View>
      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <View>
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
      <View style={{marginLeft: 10}}>
        <LineChart
          data={lineDataTomorrow}
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
    </ScrollView>
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
  navContainer: {
    marginTop: 5,
    borderRadius:5,
    borderWidth: 1,
    backgroundColor: 'rgba(51, 52, 56, 0.64)',
    paddingHorizontal: 5
  },
  scrollTextContainer: {
    marginTop: 2,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius:16,
    borderWidth: 1,
    backgroundColor: 'rgba(51, 52, 56, 0.64)',
    paddingHorizontal: 5,
    flex: 1,
    alignItems: 'center'
  },
  charts: {
    marginTop: 150,
    position: 'absolute',
    flexDirection: "column",
    marginBottom: 200,
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
    bannerText:{
      fontSize: 15,
      color: 'white',
      textAlign: 'center'
    },
});

export default Forecast;
