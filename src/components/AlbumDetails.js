import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';

import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = (props) => {
    // eslint-disable-next-line camelcase
    const { thumbnail_image, title, image, artist, url } = props.record;
    const {
        buttonStyle,
        imageContainer,
        thumbnailImg,
        headerContainerStyle,
        titleHeading,
        albumImage
             } = styles;
    return (
        <Card>
              <CardSection>
                  <View style={imageContainer}>
                      <Image style={thumbnailImg} source={{ uri: thumbnail_image }} />
                  </View>
                  <View style={headerContainerStyle}>
                  <Text style={titleHeading}> {title} </Text>
                  <Text> {artist} </Text>
                  </View>
                   </CardSection>
                <CardSection>
                    
                    <Image style={albumImage} source={{ uri: image }} />
                    
                </CardSection>
                <CardSection>
                    <Button style={buttonStyle} buttonClickEvent={() => Linking.openURL(url)} />
                </CardSection>
                  
        </Card>

    );
};
const styles = {
    imageContainer: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    thumbnailImg: {
        width: 50,
        height: 50
    },
    headerContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    titleHeading: {
        fontSize: 20
    },
    albumImage: {
        width: null,
        height: 300,
        flex: 1
    }
};
export default AlbumDetails;
