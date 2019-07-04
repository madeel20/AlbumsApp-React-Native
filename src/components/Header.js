//import library files
import React from 'react';
import { Text, View } from 'react-native';

//create component 

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <Text style={textStyle} > {props.headerText}</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.0,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20
    }
};

// make it accessable to all other components
export default Header;
