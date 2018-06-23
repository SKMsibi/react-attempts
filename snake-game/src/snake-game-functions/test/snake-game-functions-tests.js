var assert = require('assert');
var expect = require("chai").expect;
var snake = require('../game-functions');

describe("testing the empty grid feature", function () {
    it("should return the length of the empty grid", function () {
        expect(snake.createEmptyGrid().length).to.be.eql(100)
    });
});
describe("testing the grow snake feature", function () {
    it("should return the snake with an extra body part", function () {
        expect(snake.growSnake("right", [{ xAxis: 3, yAxis: 0, part: "snakeBody" }, { xAxis: 3, yAxis: 1, part: "snakeHead" }])).to.be.eql([{ xAxis: 3, yAxis: 0, part: "snakeBody" }, { xAxis: 3, yAxis: 1, part: "snakeBody" }, { xAxis: 3, yAxis: 2, part: "snakeHead" }])
    });
});
describe("testing the move snake feature", function () {
    it("should return the snake at a new location", function () {
        expect(snake.moveSnake("right", [{ xAxis: 3, yAxis: 0, part: "snakeBody" }, { xAxis: 3, yAxis: 1, part: "snakeHead" }], snake.createEmptyGrid(), 5)).to.be.eql({ snake: [{ xAxis: 3, yAxis: 1, part: "snakeBody" }, { xAxis: 3, yAxis: 2, part: "snakeHead" }], newPoints: 5 })
    });
})
describe("testing the random function for the point", function () {
    it("should return the game point object in the grid that is in a random location", function () {
        expect(typeof snake.createRandomPointPosition(snake.createEmptyGrid())).to.be.eql("object")
    });
});
describe("testing the update grid function", function () {
    var pointLocation = snake.createRandomPointPosition(snake.createEmptyGrid());
    var TheSnake = [{ xAxis: 3, yAxis: 0, part: "snakeBody" }, { xAxis: 3, yAxis: 1, part: "snakeBody" }, { xAxis: 3, yAxis: 2, part: "snakeHead" }];
    var gridWithPointAndSnake = snake.updateGrid(pointLocation, TheSnake, snake.createEmptyGrid());
    it("should return the new grid with the length of 100", function () {
        expect(gridWithPointAndSnake.length).to.be.eql(100)
    });
    it("should return the point in the grid", function () {
        expect(gridWithPointAndSnake.find(element => pointLocation.xAxis === element.xAxis && pointLocation.yAxis === element.yAxis)).to.be.eql({ ...pointLocation, occupied: "point" })
    });
    it("should return the snake in the grid", function () {
        var snakeInGrid = [];
        TheSnake.forEach(currentItem => {
            var bodyPartFound = gridWithPointAndSnake.find(item => currentItem.xAxis === item.xAxis && currentItem.yAxis === item.yAxis);
            snakeInGrid.push(bodyPartFound);
        })
        expect(snakeInGrid).to.be.eql([{ xAxis: 3, yAxis: 0, occupied: "snakeBody" }, { xAxis: 3, yAxis: 1, occupied: "snakeBody" }, { xAxis: 3, yAxis: 2, occupied: "snakeHead" }])
    })
});