/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useNavigation, useRoute, useNavigationState } from '@react-navigation/native'
import { Ionicons, Entypo, MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import ReactDOM from "react-dom";
import Home from './assets/screens/Home.js';
import Forecast from './assets/screens/Forecast.js';
import Services from './assets/screens/Services.js';
import About from './assets/screens/About.js';
import Loading from './assets/screens/Loading.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const topTab = createTopTabNavigator();

export default function App() {
  createHomeStack = () => {
    return(
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: 'rgb(30, 94, 238)' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{
                user: 0,
                zipcode: "",
                  }}
        options={{ title: 'ShoreCast'}}
         />
      <Stack.Screen
         name="Forecast"
         component={Forecast}
         initialParams={{

           }}
         options={{ title: 'Forecast'}}
         initialParams={{
           beginDate: new Date().toISOString().slice(0, 10),
           endDate: (parseInt(new Date().toISOString().slice(0, 10) + 1))
           }}
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
  createServicesStack = () => {
    return(
      <Stack.Navigator
        initialRouteName="Services"
        screenOptions={{
          headerStyle: { backgroundColor: 'rgb(30, 94, 238)' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Services"
          component={Services}
          initialParams={{
            zipcode: "32541",
            serviceId: "1",
            distance: "50",
            loading: true,
            error: null
            }}
          options={{ title: 'Services' }}/>
      </Stack.Navigator>
      )
    };

  createAboutStack = () => {
    return(
     <Stack.Navigator
       initialRouteName="About"
       screenOptions={{
         headerStyle: { backgroundColor: 'rgb(30, 94, 238)' },
         headerTintColor: '#fff',
         headerTitleStyle: { fontWeight: 'bold' }
       }}>
       <Stack.Screen
         name="About"
         component={About}
         initialParams={{
           }}
         options={{ title: 'About' }}/>
     </Stack.Navigator>
     )
   };


  return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      zipcode={"32541"}
      tabBarOptions={{
        activeTintColor: 'teal',
      }}>
      <Tab.Screen
        name="Forecast"
        component={createHomeStack}
        options={{
          tabBarLabel: 'Forecast',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="weather-partly-lightning" size={size} color={color}/>
            )
        }}  />
      <Tab.Screen
        name="Services"
        component={createServicesStack}
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="fish" size={size} color={color}/>
            )
        }} />

      <Tab.Screen
        name="About"
        component={createAboutStack}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="questioncircleo" size={size} color={color}/>
            )
        }}  />
    </Tab.Navigator>
  </NavigationContainer>
    )
  }
