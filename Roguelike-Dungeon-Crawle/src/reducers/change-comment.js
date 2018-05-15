export default function changeComment(state = "There once lived a great man", action) {
    var newState = state;
    if (action.type === "CHANGE_COMMENT") {
        newState = action.newValue;
    }
    return newState;
}

