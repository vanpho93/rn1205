import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import UserService from '../services/user.service';

export default class Hello extends Component {
    componentDidMount() {
        const { navigate } = this.props.navigation;
        // setTimeout(() => navigate('SignIn'), 1000);
        UserService.check()
        .then(user => navigate('Profile', { user }))
        .catch(error => {
            alert(error.message);
            navigate('SignIn');
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Hello Component
                </Text>
                <ActivityIndicator />
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
    }
}
