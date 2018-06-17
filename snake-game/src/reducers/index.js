import { combineReducers } from 'redux';
import gameProperties from './game-properties';
import playerInformation from './player-information';

export default combineReducers({
    gameProperties,
    playerInformation
})