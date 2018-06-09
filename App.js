import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Chat from './components/Chat';
import OneSignal from 'react-native-onesignal';
StatusBar.setHidden(true);

export default class App extends Component {
  componentWillMount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    return <Chat />;
  }
}

/*
  Navigation
  API
  Sign In - Sign Up - Async storage
  Giao dien dep
  https://github.com/vanpho93/LiveCodeReactNative/blob/master/screens.pdf
  dung redux
  vanpho01@gmail.com
*/
