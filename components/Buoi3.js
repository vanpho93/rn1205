import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Button from './shared/Button';
import Input from './shared/Input';

export default class Buoi3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Buoi3</Text>
                <Button
                    title="Click here"
                    onPress={() => alert(123)}
                    type="success"
                />
                <Button title="Remove" onPress={() => alert('abcd')} type="danger" loading={true} />
                <Button title="Update" onPress={() => alert('efgh')} type="warning" />
                <Button title="Add" onPress={() => alert('efgh')} type="success" loading />
                <Button title="Show" onPress={() => alert('efgh')} />
                <Input />
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
