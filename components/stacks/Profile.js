import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class Profile extends Component {
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Profile Component
                </Text>
                <Text>Name: Teo Nguyen</Text>
                <Text>Email: teo@gmail.com</Text>
                <Image style={styles.image} source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kijanmaharjan/128.jpg' }} />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => goBack()}
                >
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        padding: 20,
        backgroundColor: '#C2B5D4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: 'white',
        marginBottom: 50
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
    },
    image: { width: 100, height: 100 }
}
