import { combineReducers } from 'redux';
import personInfo from './personInfo';
import changeComment from './change-comment';

export default combineReducers({
    personInfo,
    changeComment
})