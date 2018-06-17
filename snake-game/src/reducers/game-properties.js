import { createEmptyGrid } from '../snake-game-functions/game-functions';
export default function gameProperties(state = { grid: createEmptyGrid(), pointLocation: {}, level: 0, direction: "right" }, action) {
    var newState = { ...state }
    switch (action.type) {
        case "CHANGE_POINT_LOCATION":
            newState = { ...newState, pointLocation: action.newValue };
            break;
        case "INCREASE_LEVEL":
            newState = { ...newState, level: newState.level + 1 };
            break;
        case "UPDATE_GRID":
            newState = { ...newState, grid: action.newValue };
            break;
        case "CHANGE_DIRECTION":
            newState = { ...newState, direction: action.newValue };
            break;
        default:
            newState = { ...state }
            break;
    }
    return newState;
}