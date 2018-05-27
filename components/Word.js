import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Word extends Component {
    render() {
        return (
            <View style={styles.wordContainer}>
                <View style={styles.wordHeader}>
                    <Text style={styles.textEn}>One</Text>
                    <Text style={styles.textVn}>Mot</Text>
                </View>
                <View style={styles.wordFooter}>
                    <TouchableOpacity style={[styles.buttonConainer, styles.buttonForgotContainer]}>
                        <Text style={styles.buttonForgotText}>Forgot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonConainer, styles.buttonRemoveContainer]}>
                        <Text style={styles.buttonRemoveText}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    wordContainer: {
        backgroundColor: '#ECEBEC',
        padding: 10,
        borderRadius: 10
    },
    wordHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textEn: {
        color: '#2E602F',
        fontWeight: 'bold',
        fontSize: 30
    },
    textVn: {
        color: '#953433',
        fontWeight: 'bold',
        fontSize: 30
    },
    wordFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonConainer: {
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    buttonForgotContainer: {
        backgroundColor: '#49A548'
    },
    buttonRemoveContainer: {
        backgroundColor: '#EC983D'
    },
    buttonForgotText: {
        color: 'white',
        fontWeight: 'bold'
    },
    buttonRemoveText: {
        color: 'white',
        fontWeight: 'bold'
    },
};
