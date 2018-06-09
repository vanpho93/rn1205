import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './shared/Button';
import Input from './shared/Input';

export default class Chat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Input placeholder="Enter your message here" />
                <Button
                    title="Send Message"
                    type="success"
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
    }
});
