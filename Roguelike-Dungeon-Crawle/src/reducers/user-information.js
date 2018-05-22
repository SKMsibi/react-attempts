export default function userInformation(state = {
    userLocation: { xAxis: 6, yAxis: 3 },
    currentLifeRemaining: 100,
    currentGamePoints: { point: 0 },
    currentWeapon: { weaponName: "Fist" }
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
        default:
            newState = { ...state }
            break;
    }
    return newState;
}

