import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './shared/Button';
import Input from './shared/Input';

export default class Chat extends Component {
    state = { txtMessage: '', lastMessage: '' }
    render() {
        const { txtMessage, lastMessage } = this.state;
        return (
            <View style={styles.container}>
                <Text>{ lastMessage? lastMessage : 'Waiting for messages' }</Text>
                <Input
                    placeholder="Enter your message here"
                    value={txtMessage}
                    onChangeText={text => this.setState({ txtMessage: text })}
                />
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
