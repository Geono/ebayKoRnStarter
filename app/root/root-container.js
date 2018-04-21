import React from 'react';
import { connect } from 'react-redux';
import IntroNavigationContainer from '../modules/intro/navigator';

class Root extends React.Component {

    render() {
        return (
            <IntroNavigationContainer />
        );
    }
}

export default connect(null)(Root);
