var assert = require('assert');
var expect = require("chai").expect;
var crawler = require('../game-layout');
var stages = require("../game-stage")

describe("testing the grid creation related functions", function () {
    it("should generate the grid using the given arguments", function () {
        expect(crawler.generateGameLayout([
            { xAxis: 1, yAxis: 1, pathWay: true, occupied: "Enemy", life: 50 },
            { xAxis: 1, yAxis: 2, pathWay: true, occupied: "Health", life: null },
            { xAxis: 1, yAxis: 3, pathWay: true, occupied: null, life: null },
            { xAxis: 1, yAxis: 4, pathWay: true, occupied: null, life: null },
            { xAxis: 1, yAxis: 5, pathWay: true, occupied: null, life: null },
            { xAxis: 1, yAxis: 6, pathWay: true, occupied: null, life: null },
            { xAxis: 1, yAxis: 7, pathWay: true, occupied: "Health", life: null },
            { xAxis: 1, yAxis: 8, pathWay: true, occupied: null, life: null },
            { xAxis: 2, yAxis: 1, pathWay: true, occupied: null, life: null },
            { xAxis: 2, yAxis: 2, pathWay: true, occupied: null, life: null },
            { xAxis: 2, yAxis: 3, pathWay: true, occupied: null, life: null },
            { xAxis: 2, yAxis: 4, pathWay: true, occupied: null, life: null },
            { xAxis: 2, yAxis: 5, pathWay: true, occupied: "Enemy", life: 50 },
            { xAxis: 2, yAxis: 6, pathWay: true, occupied: null, life: null },
            { xAxis: 2, yAxis: 7, pathWay: true, occupied: "Health", life: null },
            { xAxis: 2, yAxis: 8, pathWay: true, occupied: null, life: null },
            { xAxis: 3, yAxis: 1, pathWay: true, occupied: null, life: null },
            { xAxis: 3, yAxis: 2, pathWay: true, occupied: null, life: null },
            { xAxis: 3, yAxis: 3, pathWay: true, occupied: null, life: null },
            { xAxis: 3, yAxis: 4, pathWay: true, occupied: null, life: null },
            { xAxis: 3, yAxis: 5, pathWay: true, occupied: null, life: null },
            { xAxis: 4, yAxis: 3, pathWay: true, occupied: null, life: null },
            { xAxis: 4, yAxis: 4, pathWay: true, occupied: null, life: null },
            { xAxis: 5, yAxis: 1, pathWay: true, occupied: null, life: null },
            { xAxis: 5, yAxis: 2, pathWay: true, occupied: null, life: null },
            { xAxis: 5, yAxis: 3, pathWay: true, occupied: null, life: null },
            { xAxis: 5, yAxis: 4, pathWay: true, occupied: null, life: null },
            { xAxis: 6, yAxis: 1, pathWay: true, occupied: null, life: null },
            { xAxis: 6, yAxis: 2, pathWay: true, occupied: null, life: null },
            { xAxis: 6, yAxis: 3, pathWay: true, occupied: "User", life: null },
            { xAxis: 6, yAxis: 4, pathWay: true, occupied: null, life: null },
            { xAxis: 6, yAxis: 5, pathWay: true, occupied: null, life: null },
            { xAxis: 6, yAxis: 6, pathWay: true, occupied: null, life: null },
            { xAxis: 6, yAxis: 7, pathWay: true, occupied: null, life: null },
            { xAxis: 6, yAxis: 8, pathWay: true, occupied: null, life: null },
            { xAxis: 7, yAxis: 5, pathWay: true, occupied: null, life: null },
            { xAxis: 7, yAxis: 6, pathWay: true, occupied: null, life: null },
            { xAxis: 7, yAxis: 7, pathWay: true, occupied: null, life: null },
            { xAxis: 7, yAxis: 8, pathWay: true, occupied: "Enemy", life: 50 },
            { xAxis: 8, yAxis: 1, pathWay: true, occupied: null, life: null },
            { xAxis: 8, yAxis: 2, pathWay: true, occupied: null, life: null },
            { xAxis: 8, yAxis: 3, pathWay: true, occupied: null, life: null },
            { xAxis: 8, yAxis: 4, pathWay: true, occupied: null, life: null },
            { xAxis: 8, yAxis: 5, pathWay: true, occupied: null, life: null },
            { xAxis: 8, yAxis: 6, pathWay: true, occupied: null, life: null },
            { xAxis: 9, yAxis: 1, pathWay: true, occupied: null, life: null },
            { xAxis: 9, yAxis: 2, pathWay: true, occupied: null, life: null },
            { xAxis: 9, yAxis: 3, pathWay: true, occupied: null, life: null },
            { xAxis: 9, yAxis: 4, pathWay: true, occupied: "Weapon", life: null },
            { xAxis: 9, yAxis: 5, pathWay: true, occupied: "DoorWay", life: null },
            { xAxis: 9, yAxis: 6, pathWay: true, occupied: null, life: null },
            { xAxis: 9, yAxis: 7, pathWay: true, occupied: null, life: null },
        ], [{ xAxis: 2, yAxis: 5, pathWay: true, occupied: null }, { xAxis: 1, yAxis: 1, pathWay: true, occupied: null }, { xAxis: 7, yAxis: 8, pathWay: true, occupied: null }], [{ xAxis: 9, yAxis: 4, pathWay: true, occupied: null }], [{ xAxis: 2, yAxis: 7, pathWay: true, occupied: null }, { xAxis: 1, yAxis: 2, pathWay: true, occupied: null }, { xAxis: 1, yAxis: 7, pathWay: true, occupied: null }], { occupied: null, pathWay: true, xAxis: 9, yAxis: 5 }
        ).length).to.be.eql(100)
    });
});
describe("testing the placeAtRandom function that places Items at random places", function () {
    var randomResults = crawler.placeAtRandom(stages.stageOne);
    it("should return an object", function () {
        expect(typeof randomResults).to.be.eql("object")
    });
    it("should return an object that has enemies, health, weapon and doorway", function () {
        expect(randomResults.health.length).to.be.eql(3);
        expect(randomResults.enemies.length).to.be.eql(3);
        expect(randomResults.weapon.length).to.be.eql(1);
        expect(randomResults.doorWay.length).to.be.eql(undefined)
        expect(typeof randomResults.doorWay).to.be.eql("object")
    })
});
// describe("testing the creation of the boss", function () {
//     it("should return an object with the boss as well as the enemies", function () {
//         expect(crawler.createTheBoss(crawler.placeAtRandom(stages.stageOne).enemies))
//     })
// })
