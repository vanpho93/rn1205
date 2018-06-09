import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Buoi3 from './components/Buoi3';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <Buoi3 />;
  }
}
