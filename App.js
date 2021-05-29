/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
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

export default function App() {
  const [zipcode, setZipcode] = useState("default Zipcode");

  const [forecastData, setForecastData] = useState("default Forecast Data");

  const [tidesData, setTidesData] = useState("default Tides Data");

  const [stationData, setStationData] = useState("default Station Data");

  const handleChange = (event, props) => {
    setZipcode(event)
    props.history.push("/forecast")
  }
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" render={props => <Home zipcode={zipcode} props={props} handleChange={handleChange} setTidesData={setTidesData} setForecastData={setForecastData} setStationData={setStationData} />} />
        <Route exact path="/about" component={About} />
        <Route exact path="/forecast" render={props => <Forecast zipcode={zipcode} props={props} stationData={stationData} tidesData={tidesData} forecastData={forecastData}/>} />
        <Route exact path="/tides" component={Tides} />
        <Route exact path="/guides" component={Guides} />
        <Route exact path="/flyshops" component={FlyShops} />
        <Route exact path="/baitshops" component={BaitShops} />
      </Switch>
    </NativeRouter>
  );
}
