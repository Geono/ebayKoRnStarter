import { applyMiddleware, createStore, compose } from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import reducers from './root-reducer';

/* Navigation Middleware setup */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
    'navigation',
    state => state.nav,
);

export const addListener =  createReduxBoundAddListener('navigation');

export default createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk, reactNavigationMiddleware))
);
