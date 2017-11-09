import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const {buttonStyle, textStyle} = style; 
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const style = {
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: '16',
        fontWeight: '600',
        paddingTop: '10',
        paddingBottom: '10'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'strech',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: '5',
        marginRight: '5'
    }
}

export default Button;