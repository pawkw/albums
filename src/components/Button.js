import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = () => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity style={buttonStyle}>
            <Text style={textStyle} >
                button
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#88ddff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export default Button;