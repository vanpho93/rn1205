import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Stacks from './components/stacks/Stacks';
import MyDrawer from './components/MyDrawer';
import MyTabbar from './components/MyTabbar';
import Singers from './components/Singers';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return <Singers />;
  }
}
