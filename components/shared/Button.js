import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Click here</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        margin: 10,
        backgroundColor: '#3AB902',
        borderRadius: 5,
        borderColor: '#339136',
        borderWidth: 1
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

