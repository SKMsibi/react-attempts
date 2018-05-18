export default function userInformation(state = {
    ...state, userLocation: {},
    currentLifeRemaining: {},
    currentGamePoints: {},
    currentWeapon: {}
}, action) {
    var newState = state;
    switch (action) {
        case action.type === "CHANGE_USER_LOCATION":
            newState = { ...state, userLocation: action.newValue }
            break;
        case action.type === "DECREASE_LIFE":
            newState = { ...state, currentLifeRemaining: action.newValue }
            break;
        case action.type === "INCREASE_LIFE":
            newState = { ...state, currentLifeRemaining: action.newValue }
            break;
        case action.type === "INCREASE_GAME_POINTS":
            newState = { ...state, currentGamePoints: action.newValue }
            break;
        case action.type === "CHANGE_CURRENT_WEAPON":
            newState = { ...state, currentWeapon: action.newValue }
            break;
    }
    return newState;
}

