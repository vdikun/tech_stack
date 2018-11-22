import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import PropTypes from 'prop-types';

class ListItem extends Component {
    render() {
        return (
            <CardSection>
                <Text>{ this.props.library.title }</Text>
            </CardSection>
        )
    }
};

// TODO: make library proptype for better type checking
ListItem.propTypes = {
    library: PropTypes.object.isRequired
};

export default ListItem;