import { createStore } from 'redux';
import reducer from './reducers';
export default createStore(reducer)

// const changePerson = (state = { name: "Sabelo", gender: "Male", age: 20 }, action) => {
//     switch (action.type) {
//         case "CHANGE_AGE":
//             state = { ...state, age: action.newValue };
//             break;
//         case "CHANGE_NAME":
//             state = { ...state, name: action.newValue };
//             break;
//         case "CHANGE_GENDER":
//             state = { ...state, gender: action.newValue }
//             break;
//         default:
//             break;
//     }
//     return state;
// }
// const changeComment = (state = "There once lived a great man", action) => {
//     var newState = state;
//     if (action.type === "CHANGE_COMMENT") {
//         newState = action.newValue;
//     }
//     return newState;
// }

// const reducers = combineReducers({
//     person: changePerson,
//     comment: changeComment
// })

// const store = createStore(reducers);

// store.subscribe(() => {
//     console.log("store change", store.getState());
// })
// store.dispatch({ type: "CHANGE_GENDER", newValue: "Female" })
// store.dispatch({ type: "CHANGE_NAME", newValue: "Kabelo" })
// store.dispatch({ type: "CHANGE_AGE", newValue: 21 })
// store.dispatch({ type: "CHANGE_GENDER", newValue: "Male" })
// store.dispatch({ type: "CHANGE_COMMENT", newValue: "The comment did change" })
// store.dispatch({ type: "CHANGE_COMMENT", newValue: "State change for the second time" })s