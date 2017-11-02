//import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('albums', () => App);


import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

const App = () => {
    return(
        <View>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};


//render the component

AppRegistry.registerComponent('albums', () => App);







