var assert = require('assert');
var expect = require("chai").expect;
var nextStageGenerator = require("../components/game-layout");
var pathWays = require("../components/game-stage")
describe('The dungeon crawler game tests', function () {
    describe("Testing for the creation of the boss", function () {
        it("should return the type of object", function () {
            expect(typeof nextStageGenerator.createTheBoss([{ xAxis: 3, yAxis: 3 }, { xAxis: 5, yAxis: 4 }, { xAxis: 2, yAxis: 7 }])).to.be.eql("object")
        });
        it("should return an object being the boss location in the last stage", function () {
            expect(nextStageGenerator.createTheBoss([{ xAxis: 3, yAxis: 3 }, { xAxis: 5, yAxis: 4 }, { xAxis: 2, yAxis: 7 }])).to.be.eql({ boss: { xAxis: 2, yAxis: 7 }, newEnemies: [{ xAxis: 3, yAxis: 3 }, { xAxis: 5, yAxis: 4 }] })
        });
    })
    describe("Pathways testing", function () {
        it("should return the type of object", function () {
            expect(typeof pathWays.stageOne).to.be.eql("object")
        })
        it("should return the requested stage", function () {
            expect(pathWays.stageOne).to.be.eql(pathWays.stageOne)
        });
    })
})
