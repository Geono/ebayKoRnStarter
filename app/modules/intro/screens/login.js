import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Text, View } from 'native-base';

class Login extends React.Component {

    render() {
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <Button
                        title={'Login Page'}
                        onPress={() => console.log('login')}
                    >
                        <Text> Facebook Login </Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

export default connect(null)(Login);
