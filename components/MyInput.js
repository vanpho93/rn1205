import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default class MyInput extends Component {
    constructor(props) {
        super(props);
        this.state = { txtEmail: 'teo@gmail.com' };
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter your email"
                    style={styles.textInput}
                    value={this.state.txtEmail}
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ txtEmail: text })}
                />
                <Text>{ JSON.stringify(this.state) }</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        margin: 10,
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: '#E6E4E6',
        height: 40,
        width: 300,
        paddingLeft: 20,
        borderRadius: 5
    }
};
