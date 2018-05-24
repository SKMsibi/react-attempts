import * as stage from '../components/game-stage';
import { changePathways } from '../actions/actions';
export default function gameProperties(state = {
    grid: [],
    allStages: [stage.stageOne, stage.stageTwo, stage.stageThree, stage.stageFour],
    pathWays: stage.stageOne,
    allAvailableWeapons: [{ title: "Fists claws", impact: 25 }, { title: "Nunjucks", impact: 40 }, { title: "Dagger", impact: 50 }, { title: "Samurai sword", impact: 65 }],
    stage: 0
}, action) {
    var newState = { ...state }
    switch (action.type) {
        case "CHANGE_AVAILABLE_WEAPONS":
            newState = { ...newState, allAvailableWeapons: action.newValue };
            break;
        case "CHANGE_PATHWAYS":
            newState = { ...newState, pathWays: newState.allStages[newState.stage] };
            break;
        case "CHANGE_GRID":
            newState = { ...newState, grid: action.newValue }
            break;
        case "CHANGE_STAGE":
            newState = { ...newState, stage: newState.stage + 1, pathWays: action.newValue };
            break;
        default:
            newState = { ...state }
            break;
    }
    return newState;
}