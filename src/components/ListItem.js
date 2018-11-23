import React, { Component } from 'react';
import {
    LayoutAnimation,
    Text, 
    TouchableWithoutFeedback, 
    View 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import PropTypes from 'prop-types';
import styles from './styles/ListItem';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { expanded, library } = this.props;
        const { description, id } = library;
        //if (selectedLibraries.includes(id)) {
        if (expanded) {
            console.log("showing description for library " + id);
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        // selectLibrary is an action given to this.props by connect(actions)
        const { selectLibrary, library } = this.props;
        const { id, title } = library;

        console.log("rendering library " + id);

        return (
            <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style = { titleStyle }>
                            { title }
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = (state.selectedLibraries.indexOf(ownProps.library.id) > -1);
    return { expanded };
};

// TODO: make library proptype for better type checking
ListItem.propTypes = {
    library: PropTypes.object.isRequired,
    expanded: PropTypes.bool.isRequired
};

// connect makes actions available to this.props
export default connect(mapStateToProps, actions)(ListItem);