import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    componentDidMount() {
        console.log('componentDidMount for AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => this.setState({ albums: response.data }));
    }

    render() {
        console.log('AlbumList state: ', this.state);
        return (
            <View>
                <Text>Album list</Text>
            </View>
        );
    }
}

export default AlbumList;
