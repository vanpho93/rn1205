import React, { Component } from 'react';
import Profile from './Profile';
import SignIn from './SignIn';
import { StackNavigator } from 'react-navigation';

const Stack = StackNavigator({
    SignIn: { screen: SignIn },
    Profile: { screen: Profile },
});

export default Stack;
