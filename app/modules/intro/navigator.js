import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import IntroSlider from './screens/slider';
import { addListener } from '../../root/store';

const IntroNavigator = StackNavigator({
    Intro: {
        screen: IntroSlider,
        navigationOptions: {
            title: 'Sample Intro Page',
            headerLeft: null
        }
    },
    // Login: {
    //     screen: LoginScreen,
    //     navigationOptions: {
    //         title: 'Login',
    //     }
    // }
});

export const navigatorInfo = {
    navigator: IntroNavigator,
    startContainerName: 'Intro'
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
