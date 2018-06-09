import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Input extends Component {
    render() {
        return (
            <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                placeholder="Enter your email"
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: 300,
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#CFCFCF',
        borderWidth: 1
    }
});

