import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';

export default class Buoi2 extends Component {
    state = {
        words: [
            { _id: 'a1', en: 'One', vn: 'Mot' },
            { _id: 'a2', en: 'Two', vn: 'Hai' },
            { _id: 'a3', en: 'Three', vn: 'Ba' },
            { _id: 'a4', en: 'Four', vn: 'Bon' },
        ]
    }

    removeWord = (_id) => {
        const words = this.state.words.filter(word => word._id !== _id);
        this.setState({ words });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Buoi 2 Component</Text>
                <FlatList
                    data={this.state.words}
                    keyExtractor={item => item._id}
                    renderItem={param => (
                        <View>
                            <Text>{param.item.en}</Text>
                            <TouchableOpacity
                                onPress={() => this.removeWord(param.item._id)}
                            >
                                <Text>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    )}
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
    }
}
