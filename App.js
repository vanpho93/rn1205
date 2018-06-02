import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Stacks from './components/stacks/Stacks';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <Stacks />;
  }
}
