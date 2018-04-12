import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Root from './app/root';

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;
