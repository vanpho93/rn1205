import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, RefreshControl } from 'react-native';

export default class Singers extends Component {
    state = {
        singers: [
            {
                "_id": "bb05f770-6dd4-4d87-a3a4-22ed5221ff2a",
                "name": "Melyna",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg",
                "email": "Melyna.White@yahoo.com"
            },
            {
                "_id": "08217ad1-930e-45cf-8baf-2a6454259459",
                "name": "Olaf",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/the_winslet/128.jpg",
                "email": "Olaf.Bernhard@gmail.com"
            },
            {
                "_id": "1b2c8472-2490-411e-9257-3ac6cac386a2",
                "name": "Nash",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg",
                "email": "Nash_Altenwerth@gmail.com"
            },
            {
                "_id": "a039b7c5-04da-4ddb-a168-a0056b485be1",
                "name": "Jesus",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/artvavs/128.jpg",
                "email": "Jesus24@yahoo.com"
            }
        ],
        loading: false
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
                            onRefresh={() => {
                                this.setState({ loading: true });
                                setTimeout(() => {
                                    this.setState({ loading: false });
                                }, 3000);
                            }}
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
