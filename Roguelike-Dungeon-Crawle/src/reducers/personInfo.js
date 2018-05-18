export default function personInfo(state = { ...state, name: "Sabelo", gender: "Male", age: 20 }, action) {
    switch (action.type) {
        case "CHANGE_AGE":
            state = { ...state, age: action.newValue };
            break;
        case "CHANGE_NAME":
            state = { ...state, name: action.newValue };
            break;
        case "CHANGE_GENDER":
            state = { ...state, gender: action.newValue }
            break;
        default:
            break;
    }
    return state;
}