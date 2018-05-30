import * as stage from '../components/game-stage';
export default function gameProperties(state = {
    grid: [],
    allStages: [stage.stageOne, stage.stageTwo, stage.stageThree, stage.stageFour],
    pathWays: stage.stageOne,
    allAvailableWeapons: [{ title: "Dagger", impact: 15, emoji: "em em-dagger_knife" }, { title: "Samurai Sword", impact: 25, emoji: "em em-crossed_swords" }, { title: "Gun", impact: 40, emoji: "em em-gun" }, { title: "Bomb", impact: 65, emoji: "em em-bomb" }],
    stage: 0
}, action) {
    var newState = { ...state }
    switch (action.type) {
        case "CHANGE_PATHWAYS":
            newState = { ...newState, pathWays: newState.allStages[newState.stage] };
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