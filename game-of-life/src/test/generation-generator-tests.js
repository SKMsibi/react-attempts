var assert = require('assert');
var expect = require("chai").expect;
var generator = require('../generation-generator');

describe('The Game Of Life test', function () {
    it("should return the type of object", function () {
        expect(typeof generator.generateNextGeneration()).to.be.eql("object")
    })
    it("should return the lowest and highest value of both xAxis and yAxis", function () {
        expect(generator.getLowestAndHighest([{ xAxis: 2, yAxis: 1, status: true }, { xAxis: 3, yAxis: 4, status: true }, { xAxis: 5, yAxis: 2, status: true }, { xAxis: 1, yAxis: 5, status: true }])).to.be.eql({ lowestX: 1, highestX: 5, lowestY: 1, highestY: 5 })
    })
    it("should return all the neighbor positions for the passed in object", function () {
        expect(generator.getAllNeighbors({ xAxis: 2, yAxis: 3, status: true })).to.be.eql(
            [[1, 2],
            [1, 4],
            [1, 3],
            [3, 3],
            [3, 2],
            [3, 4],
            [2, 2],
            [2, 4]])
    })
})