import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import PropTypes from 'prop-types';
import styles from './styles/ListItem';
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        const { selectLibrary, library } = this.props;
        const { id, title } = library;

        // props contains selectLibrary action
        console.log(this.props);

        return (
            <TouchableWithoutFeedback
                onPress={() => selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style = { titleStyle }>
                            { title }
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
};

// TODO: make library proptype for better type checking
ListItem.propTypes = {
    library: PropTypes.object.isRequired
};

// connect makes actions available as props to ListItem
export default connect(null, actions)(ListItem);