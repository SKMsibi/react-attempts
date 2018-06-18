function createEmptyGrid() {
    var grid = [];
    for (let index = 0; index < 10; index++) {
        for (let secondIndex = 0; secondIndex < 10; secondIndex++) {
            grid.push({ xAxis: index, yAxis: secondIndex, occupied: "none" });
        }
    }
    return grid;
}
function createRandomPointPosition(grid) {
    var toDisplayOnGrid = grid;
    toDisplayOnGrid = toDisplayOnGrid.filter(element => element.occupied === "none");
    var randomNUmber = Math.floor(Math.random() * toDisplayOnGrid.length);
    return toDisplayOnGrid[randomNUmber];
}
function updateGrid(pointLocation, snake, grid) {
    var NewGrid = grid;
    var pointInGridFound = NewGrid.find(element => element.xAxis === pointLocation.xAxis && element.yAxis === pointLocation.yAxis);
    NewGrid[NewGrid.indexOf(pointInGridFound)].occupied = "point"
    snake.forEach(element => {
        var partOfSnake = NewGrid.find(item => item.xAxis === element.xAxis && item.yAxis === element.yAxis);
        NewGrid[NewGrid.indexOf(partOfSnake)].occupied = element.part
    });
    return NewGrid;
}
function growSnake(directionMovement, snake) {
    var snakeHead = snake.find(element => element.part === "snakeHead");
    var newSnake = snake.map(item => item = { ...item, part: "snakeBody" });
    var newSnakeHead = {};
    if (directionMovement === "right") {
        newSnakeHead = { xAxis: snakeHead.xAxis, yAxis: snakeHead.yAxis + 1, part: "snakeHead" };
    } else if (directionMovement === "left") {
        newSnakeHead = { xAxis: snakeHead.xAxis, yAxis: snakeHead.yAxis - 1, part: "snakeHead" };
    } else if (directionMovement === "up") {
        newSnakeHead = { xAxis: snakeHead.xAxis - 1, yAxis: snakeHead.yAxis, part: "snakeHead" };
    } else if (directionMovement === "down") {
        newSnakeHead = { xAxis: snakeHead.xAxis + 1, yAxis: snakeHead.yAxis, part: "snakeHead" };
    }
    newSnake.push(newSnakeHead)
    return newSnake;
}
function moveSnake(directionMovement, snake) {
    var snakeMoved = snake;
    var newHead = {};
    var oldHead = snake.find(element => element.part === "snakeHead");

    if (directionMovement === "right") {
        newHead = { xAxis: oldHead.xAxis, yAxis: oldHead.yAxis + 1 };
    } else if (directionMovement === "left") {
        newHead = { xAxis: oldHead.xAxis, yAxis: oldHead.yAxis - 1 };
    } else if (directionMovement === "up") {
        newHead = { xAxis: oldHead.xAxis - 1, yAxis: oldHead.yAxis };
    } else if (directionMovement === "down") {
        newHead = { xAxis: oldHead.xAxis + 1, yAxis: oldHead.yAxis };
    }
    snakeMoved = snakeMoved.map(element => {
        if (element.part === "snakeHead") {
            element = { ...newHead, part: "snakeHead" }
        } else {
            element = { ...snakeMoved[snakeMoved.indexOf(element) + 1], part: "snakeBody" }
        }
        return element;
    })
    return snakeMoved;
}
module.exports = { createEmptyGrid, createRandomPointPosition, updateGrid, growSnake, moveSnake }