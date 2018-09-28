export default function userNavigationReducer(state = {
    currentLocation : "landingPage"
}, action) {
    var newState = state;
    switch (action.type) {
        case "CHANGE_CURRENT_LOCATION":
            newState = { ...newState, currentLocation: action.newValue}
            break;
        default:
            newState = { ...newState }
            break;
    }
    return newState;
}

