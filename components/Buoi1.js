import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Word from './Word';
import MyInput from './MyInput';

export default class Buoi1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Buoi1 Component</Text>
                <Word />
                <MyInput />
                <Image source={require('../images/a.png')} />
                <Image
                    source={{ uri: 'https://zmp3-photo.zadn.vn/banner/1/3/0/2/13022cd8a45de1c3e5bbce053f436254.jpg' }}
                    style={{ width: 300, height: 100 }}
                />
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
