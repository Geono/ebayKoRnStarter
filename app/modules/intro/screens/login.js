import React from 'react';
import { connect } from 'react-redux';
import { Container, View } from 'native-base';
import firebase from 'react-native-firebase';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


class Login extends React.Component {

    _signIn () {
        GoogleSignin.signIn()
            .then((data) => {
                // Create a new Firebase credential with the token
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                // Login with the credential
                return firebase.auth().signInWithCredential(credential);
            })
            .then((user) => {
                // If you need to do anything with the user, do it here
                // The user will be logged in automatically by the
                // `onAuthStateChanged` listener we set up in App.js earlier
                console.log('logged in!');
            })
            .catch((error) => {
                const { code, message } = error;
                // For details of error codes, see the docs
                // The message contains the default Firebase string
                // representation of the error
                console.log('login error!');
            });
    }


    render() {
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <GoogleSigninButton
                        style={{width: 230, height: 48}}
                        size={GoogleSigninButton.Size.Standard}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this._signIn.bind(this)}/>
                </View>
            </Container>
        );
    }
}

export default connect(null)(Login);
