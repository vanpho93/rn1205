import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Buoi1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Buoi1 Component</Text>
                <TouchableOpacity
                    style={styles.buttonContainer} onPress={() => alert('Hello')}
                >
                    <Text style={styles.buttonText}>SHOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        padding: 20,
        backgroundColor: 'green',
        flex: 1
    },
    title: {
        fontSize: 30,
        color: 'white'
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
