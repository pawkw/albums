import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentDidMount() {
        console.log('componentDidMount for AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} />);
        // This key would be better with an id from the database.
        // This api does not have an id field.
    }

    render() {
        console.log('AlbumList state: ', this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
