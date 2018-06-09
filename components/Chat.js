import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';
import Button from './shared/Button';
import Input from './shared/Input';

const socket = io('https://realtime1205.herokuapp.com/');

export default class Chat extends Component {
    state = { txtMessage: '', messages: [] }

    componentDidMount() {
        socket.on('SERVER_SEND_MESSAGE', data => {
            this.setState({ messages: [data, ...this.state.messages] });
        });
    }

    sendMessage = () => {
        socket.emit('CLIENT_SEND_MESSAGE', this.state.txtMessage);
        this.setState({ txtMessage: '' });
    }

    render() {
        const { txtMessage, messages } = this.state;
        return (
            <View style={styles.container}>
                {messages.map((message, index) => <Text key={index}>{message}</Text>)}
                <Input
                    placeholder="Enter your message here"
                    value={txtMessage}
                    onChangeText={text => this.setState({ txtMessage: text })}
                />
                <Button
                    title="Send Message"
                    type="success"
                    onPress={this.sendMessage}
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
