var assert = require('assert');
var expect = require("chai").expect;
var generator = require('../generation-generator');

describe('The Game Of Life test', function () {
    it("should return the second generation without using any arguments", function () {
        expect(generator.generateNextGeneration()).to.be.eql([{ xAxis: 3, yAxis: 2, status: true },
        { xAxis: 3, yAxis: 3, status: true },
        { xAxis: 3, yAxis: 4, status: true },
        { xAxis: 5, yAxis: 2, status: true },
        { xAxis: 6, yAxis: 1, status: true },
        { xAxis: 6, yAxis: 2, status: true },
        { xAxis: 7, yAxis: 1, status: true },
        { xAxis: 7, yAxis: 2, status: true }])
    })
    it("should return the second generation using the given arguments", function () {
        expect(generator.generateNextGeneration([
            { xAxis: 1, yAxis: 2, status: true },
            { xAxis: 1, yAxis: 3, status: true },
            { xAxis: 2, yAxis: 2, status: true }])).to.be.eql([
                { xAxis: 1, yAxis: 2, status: true },
                { xAxis: 1, yAxis: 3, status: true },
                { xAxis: 2, yAxis: 2, status: true },
                { xAxis: 2, yAxis: 3, status: true }])
    })
    it("should sum the array to 6", function () {
        expect([1, 2, 3].reduce((a, b) => a + b)).to.be.eql(6);
    })
});
