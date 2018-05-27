import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Word from './Word';
import MyInput from './MyInput';

export default class Buoi1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Buoi1 Component</Text>
                <Word />
                <MyInput />
            </View>
        );
    }
}

const styles = {
    container: {
        padding: 20,
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 30,
        color: 'orange'
    },
    buttonContainer: {
        backgroundColor: '#6F5591',
        padding: 10,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#A08FB8',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
}
