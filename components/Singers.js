import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl } from 'react-native';
import axios from 'axios';

export default class Singers extends Component {
    state = {
        singers: [],
        loading: false
    }

    componentDidMount() {
        this.getMoreSinger();
    }

    getMoreSinger = async () => {
        this.setState({ loading: true });
        const { data } = await axios.get('https://user1205.herokuapp.com/singer');
        this.setState({
            singers: data.singers.concat(this.state.singers),
            loading: false
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Singers Component</Text>
                <FlatList
                    style={{ width: 400 }}
                    data={this.state.singers}
                    keyExtractor={item => item._id}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.loading}
                            onRefresh={this.getMoreSinger}
                        />
                    }
                    renderItem={param => (
                        <View style={styles.singer}>
                            <View style={styles.singerLeft}>
                                <Image source={{ uri: param.item.avatar }} style={styles.avatar}/>
                            </View>
                            <View style={styles.singerRight}>
                                <Text style={styles.name}>{param.item.name}</Text>
                                <Text style={styles.text}>{param.item.email}</Text>
                            </View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    singer: {
        flexDirection: 'row',
        padding: 10,
        margin: 15,
        backgroundColor: '#EDEBF5',
        borderRadius: 5
    },
    singerRight: {
        padding: 10,
        justifyContent: 'space-around'
    },
    text: {
        color: '#C7CBD4',
        fontWeight: 'bold'
    },
    name: {
        color: '#A7A7A7',
        fontWeight: 'bold'
    },
    avatar: { width: 100, height: 100 }
}
