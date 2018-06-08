import { createAction, handleActions } from 'redux-actions';
import firebase from 'react-native-firebase';
import { Alert } from 'react-native';

// 1. Actions

const LOGIN_WITH_EMAIL = 'LOGIN_WITH_EMAIL';
const AUTH_PENDING = 'AUTH_PENDING';
const AUTH_COMPLETE = 'AUTH_COMLETE';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const EMAIL_REGISTER = 'EMAIL_REGISTER';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILED = 'REGISTER_FAILED';
const LOGOUT = 'LOGOUT';

// 2. Action creators

export const registerByEmailRequest = createAction(EMAIL_REGISTER);
export const authPending = createAction(AUTH_PENDING);
export const authComplete = createAction(AUTH_COMPLETE);
export const registerFailed = createAction(REGISTER_FAILED);
export const registerSuccess = createAction(REGISTER_SUCCESS);
export const loginFailed = createAction(LOGIN_FAILED);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const logout = createAction(LOGOUT, () => firebase.auth().signOut());

export const loginOrRegisterWithEmail = (email, password) => (dispatch) => {
    dispatch(authPending('email'));

    // Try login
    return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
        .then(user => {
            Alert.alert('로그인했습니다. 어서오세요!', null,
                [ { text: '확인', onPress: () => dispatch(loginSuccess(user)) } ],
                { cancelable: false });
        })
        .catch((error) => {
            // If user does not exists, register
            if (error && error.code === 'auth/user-not-found') {
                Alert.alert(`가입한 적이 없는 이메일 주소(${email})입니다. 이 이메일로 가입하시겠습니까?`, null,
                    [ {
                        text: '확인', onPress: () => {
                            dispatch(registerByEmailRequest());
                            firebase.auth().createUserWithEmailAndPassword(email, password)
                                .then((user) => {
                                    dispatch(registerSuccess(user));
                                    Alert.alert('가입에 성공했습니다. 환영합니다!');
                                })
                                .catch((error) => {
                                    // Handle Errors here.
                                    var errorCode = error.code;
                                    var errorMessage = error.message;
                                    if (errorCode == 'auth/weak-password') {
                                        Alert.alert('The password is too weak.', null,
                                            [ { text: '확인', onPress: () => dispatch(registerFailed(error)) } ],
                                            { cancelable: false });
                                    } else {
                                        Alert.alert(errorMessage, null,
                                            [ { text: '확인', onPress: () => dispatch(registerFailed(error)) } ],
                                            { cancelable: false });
                                    }
                                    // Alert.alert('가입에 실패했습니다!', null,
                                    //     [ { text: '확인', onPress: () => dispatch(registerFailed(error)) } ],
                                    //     { cancelable: false });
                                });
                        }
                    } ], { cancelable: false });
            }
            else {
                let errorMessage = '다시 시도해주세요.';

                if (error.code === 'auth/wrong-password') {
                    errorMessage = '비밀번호가 틀렸습니다.';
                }

                Alert.alert('로그인에 실패했습니다. ' + errorMessage, null,
                    [ { text: '확인', onPress: () => dispatch(loginFailed(error)) } ],
                    { cancelable: false });
            }
        });
};

// 3. Initial States

const initialState = {
    authPending: false,
    user: null
};

// 4. Reducers

export default handleActions({
    [ AUTH_PENDING ]: (state, action) => ({
        ...state,
        authPending: true,
        method: action.payload
    }),
    [ LOGIN_SUCCESS ]: (state, action) => ({
        ...state,
        user: action.payload,
        authPending: false
    }),
    [ LOGIN_FAILED ]: (state, action) => ({
        ...state,
        error: action.payload,
        authPending: false
    }),
    [ LOGOUT ]: (state) => ({
        ...state,
        user: null,
        authPending: false
    }),
    [ EMAIL_REGISTER ]: (state) => ({
        ...state,
        authPending: true
    }),
    [ REGISTER_SUCCESS ]: (state, action) => ({
        ...state,
        authPending: false,
        user: action.payload
    }),
    [ REGISTER_FAILED ]: (state, action) => ({
        ...state,
        authPending: false,
        error: action.payload
    })
}, initialState);

// 5. Selectors

export const getEmailUser = state => state.user;