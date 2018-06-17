const CHANGE_POINT_LOCATION = "CHANGE_POINT_LOCATION";
const CHANGE_SNAKE_LENGTH = "CHANGE_SNAKE_LENGTH";
const UPDATE_SNAKE = "UPDATE_SNAKE";
const INCREASE_LEVEL = "INCREASE_LEVEL";
const INCREASE_POINTS = "INCREASE_POINTS";
const UPDATE_GRID = "UPDATE_GRID";
function changePointLocation(location) {
    return { type: CHANGE_POINT_LOCATION, newValue: location }
}
function changeSnakeLength(newLength) {
    return { type: CHANGE_SNAKE_LENGTH, newValue: newLength }
}
function updateSnake(newArray) {
    return { type: UPDATE_SNAKE, newValue: newArray }
}
function increaseLevel() {
    return { type: INCREASE_LEVEL }
}
function increaseUserPoints() {
    return { type: INCREASE_POINTS }
}
function updateGrid(newGrid) {
    return { type: UPDATE_GRID, newValue: newGrid }
}
module.exports = { changePointLocation, changeSnakeLength, updateSnake, increaseLevel, increaseUserPoints, updateGrid }