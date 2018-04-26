import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from '../modules/intro/actions/auth';
import introNavigate from '../modules/intro/navigator-redux';

const AppReducer = combineReducers({
    form,
    auth,
    introNavigate
});

export default AppReducer;