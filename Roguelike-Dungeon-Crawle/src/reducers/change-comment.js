export default function changeComment(state = { ...state, comment: "There once lived a great man" }, action) {
    var newState = state;
    switch (action) {
        case action.type === "CHANGE_COMMENT":
            newState = { ...state, comment: action.newValue }
            break;
        default:
            break;
    }
    return newState;
}

