var assert = require('assert');
var expect = require("chai").expect;
var nextStageGenerator = require("../components/game-layout");
var pathWays = require("../components/game-stage");
var weapons = [{ title: "Dagger", impact: 15, emoji: "em em-dagger_knife" }, { title: "Samurai Sword", impact: 25, emoji: "em em-crossed_swords" }, { title: "Gun", impact: 40, emoji: "em em-gun" }, { title: "Bomb", impact: 65, emoji: "em em-bomb" }];
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
    describe("Entire grid creation tests", function () {
        it("should return the type of array", function () {
            expect(typeof nextStageGenerator.generateGameLayout(pathWays.stageOne, [{ xAxis: 3, yAxis: 3 }, { xAxis: 5, yAxis: 4 }, { xAxis: 2, yAxis: 7 }], [{ xAxis: 4, yAxis: 5 }], [{ xAxis: 5, yAxis: 3 }, { xAxis: 7, yAxis: 4 }, { xAxis: 2, yAxis: 5 }], { xAxis: 5, yAxis: 7 }, boss = { xAxis: 3, yAxis: 3 }, 1)).to.be.eql("object");
        })
        it("should generate an array with length of 100", function () {
            expect(nextStageGenerator.generateGameLayout(pathWays.stageOne, [{ xAxis: 3, yAxis: 3 }, { xAxis: 5, yAxis: 4 }, { xAxis: 2, yAxis: 7 }], [{ xAxis: 4, yAxis: 5 }], [{ xAxis: 5, yAxis: 3 }, { xAxis: 7, yAxis: 4 }, { xAxis: 2, yAxis: 5 }], { xAxis: 5, yAxis: 7 }, boss = { xAxis: 3, yAxis: 3 }, 1).length).to.be.eql(100);
        })
    })
})
