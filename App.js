/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import View from "react-native";
import {NativeRouter, Route, Switch} from 'react-router-native';
import Home from './assets/screens/Home.js';
import Forecast from './assets/screens/Forecast.js';
import Tides from './assets/screens/Tides.js';
import Guides from './assets/screens/Guides.js';
import FlyShops from './assets/screens/FlyShops.js';
import BaitShops from './assets/screens/BaitShops.js';
import About from './assets/screens/About.js';

export default function App() {
  const [zipcode, setZipcode] = useState("");
  const handleChange = (event) => {
    setZipcode(event.value)
  }
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/forecast" component={Forecast} />
        <Route exact path="/tides" component={Tides} />
        <Route exact path="/guides" component={Guides} />
        <Route exact path="/flyshops" component={FlyShops} />
        <Route exact path="/baitshops" component={BaitShops} />
      </Switch>
    </NativeRouter>
  );
}
