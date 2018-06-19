var assert = require('assert');
var expect = require("chai").expect;
var crawler = require('../game-layout');

describe("testing the dungeon crawler game functions", function () {
    it("should return a grid using just a set of pathways", function () {
        expect(crawler.generateGameLayout([{ xAxis: 1, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 1, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 1, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 1, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 1, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 2, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 3, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 4, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 5, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 5, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 5, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 5, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 6, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 7, pathWay: true, occupied: null },
        { xAxis: 6, yAxis: 8, pathWay: true, occupied: null },
        { xAxis: 7, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 7, yAxis: 6, pathWay: true, occupied: null },
        { xAxis: 7, yAxis: 7, pathWay: true, occupied: null },
        { xAxis: 7, yAxis: 8, pathWay: true, occupied: null },
        { xAxis: 8, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 6, pathWay: true, occupied: null },
        { xAxis: 9, yAxis: 7, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 1, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 2, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 3, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 4, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 5, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 6, pathWay: true, occupied: null },
        { xAxis: 10, yAxis: 7, pathWay: true, occupied: null }], currentPosition, nextPosition, enemies, weapons, health)).to.be.eql()
    })
    it("should return true if the browser is a mobile browser", function () {
        expect(crawler.detectMob()).to.be.eql(false)
    })
})