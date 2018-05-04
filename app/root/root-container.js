import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'react-native-firebase';
import * as userActions from '../modules/intro/actions/auth';
import IntroNavigationContainer from '../modules/intro/navigator';
import HomeNavigationContainer from '../modules/home/navigator';
import { SafeAreaView } from "react-navigation";

class Root extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.UserActions.loginSuccess(user);
            }
        });
    }

    render() {
        const { auth } = this.props;
        return (
                auth.user ? <HomeNavigationContainer /> : <IntroNavigationContainer />
        );
    }
}

export default connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(Root);
