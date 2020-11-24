import { combineReducers } from 'redux';
import success from './successReducer';
import post from '../reducers/posts/reducer'

export default combineReducers({
    success,
    post,
});
