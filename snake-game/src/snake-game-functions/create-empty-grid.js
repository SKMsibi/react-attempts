function createEmptyGrid() {
    var grid = [];
    for (let index = 0; index < 10; index++) {
        for (let secondIndex = 0; secondIndex < 10; secondIndex++) {
            grid.push({ xAxis: index, yAxis: secondIndex });
        }
    }
    return grid;
}
module.exports = { createEmptyGrid }