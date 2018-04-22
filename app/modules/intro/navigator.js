import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import IntroSlider from './screens/slider';
import Login from './screens/login';
import { addListener } from '../../root/store';

const IntroNavigator = StackNavigator({
    IntroSlider: {
        screen: IntroSlider,
        navigationOptions: {
            title: 'Sample Intro Screen',
            headerLeft: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Sample Login Screen',
        }
    }
});

export const navigatorInfo = {
    navigator: IntroNavigator,
    startContainerName: 'IntroSlider'
};

class IntroNavigationContainer extends React.Component {

    render() {
        const { dispatch, introNavigate } = this.props;
        return (
            <IntroNavigator
                navigation={addNavigationHelpers({ dispatch, state: introNavigate, addListener })}
            />
        );
    }
}

IntroNavigationContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    introNavigate: PropTypes.object.isRequired
};

export default connect(
    state => ({
        introNavigate: state.introNavigate
    })
)(IntroNavigationContainer);
