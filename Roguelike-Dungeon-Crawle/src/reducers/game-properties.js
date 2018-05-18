export default function gameProperties(state = {
    ...state, grid: [],
    pathWays: [],
    enemies: [],
    health: [],
    allAvailableWeapons: [],
    stage: 1
}, action) {
    var newState = { ...state }
    switch (action.type) {
        case "CHANGE_AVAILABLE_WEAPONS":
            newState = { ...newState, allAvailableWeapons: action.newValue };
            break;
        case "CHANGE_PATHWAYS":
            newState = { ...newState, pathWays: action.newValue };
            break;
        case "CHANGE_GRID":
            newState = { ...newState, grid: action.newValue }
            break;
        case "CHANGE_STAGE":
            newState = { ...newState, stage: action.newValue }
            break;
        case "DECREASE_AVAILABLE_HEALTH":
            newState = { ...newState, health: action.newValue }
            break;
        case "DECREASE_EXISTING_ENEMIES":
            newState = { ...newState, enemies: action.newValue }
            break;
        case "RESET_ENEMIES":
            newState = { ...newState, enemies: action.newValue }
            break;
        case "RESET_HEALTH":
            newState = { ...newState, health: action.newValue }
            break;
    }
    return newState;
}