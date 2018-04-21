import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import introNavigate from '../modules/intro/navigator-redux';

const AppReducer = combineReducers({
    form,
    introNavigate
});

export default AppReducer;