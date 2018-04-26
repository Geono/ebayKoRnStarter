import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import TextInput from './text-input';
import styles from './email-login-form.style';


class EmailLoginForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>이메일로 가입 / 로그인</Text>
                <Field
                    name='email'
                    component={TextInput}
                    placeholder='whoareyou@email.com'
                    secure={false}
                />
                <Field
                    name='password'
                    component={TextInput}
                    placeholder='password'
                    secure
                />
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.formSubmit}>{this.props.buttonText}</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

EmailLoginForm.propTypes = {
    buttonText: PropTypes.string.isRequired
};

export default reduxForm({
    form: 'signIn'
})(EmailLoginForm);
