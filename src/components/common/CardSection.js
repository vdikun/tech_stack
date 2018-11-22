import React from 'react';
import { View } from 'react-native';
import styles from './styles/CardSection';
import PropTypes from 'prop-types';

const CardSection = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={ containerStyle }>
            {props.children}
        </View>
    );
};

CardSection.propTypes = {
    children: PropTypes.PropTypes.node
};

export { CardSection };