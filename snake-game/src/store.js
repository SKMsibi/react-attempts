import { createStore } from 'redux';
import reducer from './reducers';
// const testingMiddleware = (store) => (next) => (action) => {
//     if (action.type === "CHANGE_DIRECTION") {
//         var currentDirection = store.getState().gameProperties.direction;
//         console.log("applyMiddleware", currentDirection, action.newValue);
//     }
//     next(action);
// }
// const middleware = applyMiddleware(testingMiddleware);
export default createStore(reducer)