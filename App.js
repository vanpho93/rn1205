import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Buoi1 from './components/Buoi1';
import Buoi2 from './components/Buoi2';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <Buoi2 />;
  }
}
