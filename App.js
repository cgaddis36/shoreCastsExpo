/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';

import {
 Icon
} from 'react-native-vector-icons/FontAwesome';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import View from "react-native";
import ReactDOM from "react-dom";
import {NativeRouter, Route, Switch} from 'react-router-native';
import Home from './assets/screens/Home.js';
import Forecast from './assets/screens/Forecast.js';
import Tides from './assets/screens/Tides.js';
import Guides from './assets/screens/Guides.js';
import FlyShops from './assets/screens/FlyShops.js';
import BaitShops from './assets/screens/BaitShops.js';
import About from './assets/screens/About.js';
import Loading from './assets/screens/Loading.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  createHomeStack = () => {
    return(
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: 'rgba(165, 168, 176, 0.64)' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{
                  }}
        options={{ title: 'ShoreCasts'}}
         />
      <Stack.Screen
         name="Forecast"
         component={Forecast}
         initialParams={{
           timeLabels: ["1am", "2am", "3am", "4am", "5am", "6am",
           "7am", "8am", "9am", "10am", "11am", "12pm",
           "1pm", "2pm", "3pm", "4pm", "5pm", "6pm",
           "7pm", "8pm", "9pm", "10pm", "11pm"]
           }}
         options={{ title: 'Tide and Weather Forecast'}}
          />
      <Stack.Screen
         name="Loading"
         component={Loading}
         initialParams={{
           beginDate: new Date().toISOString().slice(0, 10).replace(/[-]/g,''),
           endDate: (parseInt(new Date().toISOString().slice(0, 10).replace(/[-]/g,'')) + 1)
           }}
         options={{ title: 'Loading Water Levels'}}
          />
        </Stack.Navigator>
        )
      };
  createFlyShopsStack = () => {
    return(
      <Stack.Navigator
        initialRouteName="FlyShops"
        screenOptions={{
          headerStyle: { backgroundColor: 'rgba(165, 168, 176, 0.64)' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="FlyShops"
          component={FlyShops}
          options={{ title: 'FlyShops' }}/>
      </Stack.Navigator>
      )
    };
   createBaitShopsStack = () => {
     return(
      <Stack.Navigator
        initialRouteName="BaitShops"
        screenOptions={{
          headerStyle: { backgroundColor: 'rgba(165, 168, 176, 0.64)' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="BaitShops"
          component={BaitShops}
          options={{ title: 'BaitShops' }}/>
      </Stack.Navigator>
      )
      };
   createGuidesStack = () => {
     return(
      <Stack.Navigator
        initialRouteName="Guides"
        screenOptions={{
          headerStyle: { backgroundColor: 'rgba(165, 168, 176, 0.64)' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Guides"
          component={Guides}
          options={{ title: 'Guides' }}/>
      </Stack.Navigator>
      )
  };
   createAboutStack = () => {
     return(
      <Stack.Navigator
        initialRouteName="About"
        screenOptions={{
          headerStyle: { backgroundColor: 'rgba(165, 168, 176, 0.64)' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: 'About' }}/>
      </Stack.Navigator>
      )
    };
  return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'teal',
      }}>
      <Tab.Screen
        name="Home"
        component={createHomeStack}
        options={{
          tabBarLabel: 'Home',
        }}  />
      <Tab.Screen
        name="Fly Shops"
        component={createFlyShopsStack}
        options={{
          tabBarLabel: 'FlyShops'
        }} />
      <Tab.Screen
        name="Bait Shops"
        component={createBaitShopsStack}
        options={{
          tabBarLabel: 'BaitShops'
        }}  />
      <Tab.Screen
        name="Guides"
        component={createGuidesStack}
        options={{
          tabBarLabel: 'Guides'
        }} />
      <Tab.Screen
        name="About"
        component={createAboutStack}
        options={{
          tabBarLabel: 'About'
        }}  />
    </Tab.Navigator>
  </NavigationContainer>
    )
  }
// <Route exact path="/" render={props => <Home
//   <Route exact path="/about" component={About} />
//   <Route exact path="/forecast" render={props => <Forecast
//     zipcode={zipcode}
//     props={props}
//     stationData={stationData}
//     tidesData={tidesData}
//     forecastData={forecastData}
//     timeLabels={timeLabels}
//     waterLevelsToday={waterLevelsToday}
//     loading={loading}
//     />} />
//     <Route exact path="/tides" component={Tides} />
//     <Route exact path="/guides" component={Guides} />
//     <Route exact path="/flyshops" component={FlyShops} />
//     <Route exact path="/baitshops" component={BaitShops} />
