import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Button from './shared/Button';

export default class Buoi3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Buoi3</Text>
                <Button />
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
