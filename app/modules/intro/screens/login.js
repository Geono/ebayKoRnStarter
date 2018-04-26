import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

import EmailLoginForm from './components/login/email-login-form';
import * as userActions from '../actions/auth';

class Login extends React.Component {

    render() {
        return (
            <Container>
                <EmailLoginForm
                    onSubmit={values =>
                        this.props.actions.loginOrRegisterWithEmail(values.email, values.password)
                    }
                    buttonText='가입 / 로그인'
                />
                <Spinner visible={this.props.authPending} />
            </Container>
        );
    }
}

export default connect(
    state => ({ authPending: state.auth.authPending }),
    dispatch => ({
        actions: bindActionCreators(userActions, dispatch)
    })
)(Login);
