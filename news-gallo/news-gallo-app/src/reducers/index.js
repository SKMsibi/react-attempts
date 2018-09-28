import { combineReducers } from 'redux';
import userNavigationReducer from './user-navigation';
import readerDataReducer from './reader-data';

export default combineReducers({
    userNavigationReducer,
    readerDataReducer
})