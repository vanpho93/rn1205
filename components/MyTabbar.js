import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Home Component
                </Text>
            </View>
        );
    }
}

class About extends Component {
    render() {
        return (
            <View style={[styles.container, { backgroundColor: '#2185FD' }]}>
                <Text style={styles.title}>
                    About Component
                </Text>
            </View>
        );
    }
}

const MyTabbar = createBottomTabNavigator({
    Home: { screen: Home },
    About: { screen: About },
});

export default MyTabbar;

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
    }
}
