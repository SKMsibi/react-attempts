export default function readerDataReducer(state = {
    selectedCategory : "none"
}, action) {
    var newState = state;
    switch (action.type) {
        case "CHANGE_CURRENT_NEWS_CATEGORY":
            newState = { ...newState, selectedCategory: action.newValue}
            break;
        default:
            newState = { ...newState }
            break;
    }
    return newState;
}

