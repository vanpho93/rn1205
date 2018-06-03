import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default class SignIn extends Component {
    state = { txtEmail: 'teo@gmail.com', txtPassword: '123' };
    render() {
        const { navigate } = this.props.navigation;
        const { txtEmail, txtPassword } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Sign In Component
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email"
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ txtEmail: text })}
                    value={txtEmail}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your password"
                    secureTextEntry
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ txtPassword: text })}
                    value={txtPassword}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigate('Profile')}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        padding: 20,
        backgroundColor: '#3AB902',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: 'white',
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#FFBF34',
        padding: 10,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: '#E6E4E6',
        height: 40,
        width: 300,
        paddingLeft: 20,
        borderRadius: 5,
        marginBottom: 30
    }
}
