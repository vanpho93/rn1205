import React, { Component } from 'react';
import Profile from './Profile';
import SignIn from './SignIn';
import Hello from './Hello';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

const Stack = createStackNavigator({
    Hello: { screen: Hello },
    SignIn: { screen: SignIn },
    Profile: { screen: Profile },
}, { headerMode: 'none' });

export default Stack;
