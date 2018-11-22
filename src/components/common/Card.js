import React from 'react';
import { View } from 'react-native';
import styles from './styles/Card';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={ containerStyle }>
            {props.children}
        </View>
    );
};

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export { Card };