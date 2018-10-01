export default function readerDataReducer(state = {
    selectedCategory: "none",
    search: "none",
}, action) {
    var newState = state;
    switch (action.type) {
        case "CHANGE_CURRENT_NEWS_CATEGORY":
            newState = { ...newState, selectedCategory: action.newValue }
            break;
        case "CHANGE_CURRENT_SEARCH":
            newState = { ...newState, search: action.newValue }
            break;
        default:
            newState = { ...newState }
            break;
    }
    return newState;
}

