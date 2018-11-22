import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/Button';

const Button = ({ children, onPress}) => {
    const { buttonStyle, textStyle } = styles
    return (
        <TouchableOpacity style={ buttonStyle } onPress={ onPress }>
            <Text style={ textStyle }>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export { Button };