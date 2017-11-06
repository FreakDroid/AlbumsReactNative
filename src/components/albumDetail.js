import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';


const AlbumDetail = ({ album }) => {
    const { artist, title, thumbnail_image, image } = album;
    const { thumbnailStyle,
            headerContentStyle, 
            thumbnailContainerStyle, 
            headerTextStyle, 
            imageStyle } = style;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={ { uri: thumbnail_image } } 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{uri: image}} />
            </CardSection>

            <CardSection>
                <Button />
            </CardSection>
        </Card>
    )
};

const style = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}


export default AlbumDetail;