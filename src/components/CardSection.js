import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}> 
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        padding: 5,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',

    }
};

export default CardSection;
