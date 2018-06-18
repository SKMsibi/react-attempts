var assert = require('assert');
var expect = require("chai").expect;
var snake = require('../game-functions');

describe("testing the snake game functions", function () {
    it("should return an empty grid", function () {
        expect(snake.createEmptyGrid().length).to.be.eql(100)
    });
})