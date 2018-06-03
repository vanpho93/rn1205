import React, { Component } from 'react';
import { AsyncStorage, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class TokenDebugger extends Component {
    state = { token: '' }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('token');
        this.setState({ token });
    }

    saveToken = async () => {
        const { token } = this.state;
        alert(token);
        await AsyncStorage.setItem('token', token);
    }

    render() {
        const { token } = this.state;
        return (
            <View style={styles.container}>
                <Text>Token: {token}</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your token"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={text => this.setState({ token: text })}
                    value={token}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.saveToken}
                >
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 100,
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
        marginBottom: 10
    }
}
