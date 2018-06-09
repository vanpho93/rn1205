import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default class Buoi3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Buoi3</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Click here</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter your email"
                />
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BFB6D3'
    },
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
    },
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
