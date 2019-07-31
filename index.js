// Import a library to help create a component.
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
    return (
        // The style allows components to fill properly.
        <View style={{ flex: 1 }} >
            <Header headerText='Albums' />
            <AlbumList />
        </View>
    );
};

// Render it to the device.
AppRegistry.registerComponent('albums', () => App);
