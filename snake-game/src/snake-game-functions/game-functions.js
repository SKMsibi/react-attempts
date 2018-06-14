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
    return toDisplayOnGrid[randomNUmber]
}
function updateGrid(pointLocation) {
    var grid = createEmptyGrid();
    var pointInGridFound = grid.find(element => element.xAxis === pointLocation.xAxis && element.yAxis === pointLocation.yAxis);
    grid[grid.indexOf(pointInGridFound)].occupied = "point"
    return grid;
}
module.exports = { createEmptyGrid, createRandomPointPosition, updateGrid }