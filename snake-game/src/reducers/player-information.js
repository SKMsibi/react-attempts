export default function playerInformation(state = {
    currentSnakeStructure: [{ xAxis: 3, yAxis: 0, part: "snakeBody" }, { xAxis: 3, yAxis: 1, part: "snakeHead" }],
    snakeLength: 2,
    points: 0
}, action) {
    var newState = { ...state }
    switch (action.type) {
        case "INCREASE_POINTS":
            newState = { ...newState, points: newState.points + 1 };
            break;
        case "CHANGE_SNAKE_LENGTH":
            newState = { ...newState, snakeLength: action.newValue };
            break;
        case "UPDATE_SNAKE":
            newState = { ...newState, currentSnakeStructure: action.newValue };
            break;
        default:
            newState = { ...state }
            break;
    }
    return newState;
}