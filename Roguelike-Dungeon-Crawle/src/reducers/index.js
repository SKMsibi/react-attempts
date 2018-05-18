import { combineReducers } from 'redux';
import gameProperties from './game-properties';
import userInformation from './user-information';

export default combineReducers({
    gameProperties,
    userInformation
})