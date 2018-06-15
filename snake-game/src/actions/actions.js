const CHANGE_POINT_LOCATION = "CHANGE_POINT_LOCATION";
const CHANGE_SNAKE_LENGTH = "CHANGE_SNAKE_LENGTH";
const UPDATE_SNAKE = "UPDATE_SNAKE";
const INCREASE_LEVEL = "INCREASE_LEVEL";
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
    { type: INCREASE_LEVEL }
}
module.exports = { changePointLocation, changeSnakeLength, updateSnake, increaseLevel }