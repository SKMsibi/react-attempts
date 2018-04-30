function generateNextGeneration(currentGeneration) {
    var grid = [];
    var newGeneration = [];
    if (currentGeneration === undefined) {
        currentGeneration = [{ xAxis: 2, yAxis: 3, status: true }, { xAxis: 3, yAxis: 3, status: true }, { xAxis: 4, yAxis: 3, status: true }, { xAxis: 7, yAxis: 1, status: true }, { xAxis: 7, yAxis: 2, status: true }, { xAxis: 8, yAxis: 1, status: true }];
    }
    var lowestAndHighest = getLowestAndHighest(currentGeneration)
    for (let xAxisCounter = lowestAndHighest.lowestX - 2; xAxisCounter <= lowestAndHighest.highestX + 2; xAxisCounter++) {
        for (let yAxisCounter = lowestAndHighest.lowestY - 2; yAxisCounter <= lowestAndHighest.highestY + 2; yAxisCounter++) {
            grid.push({ xAxis: xAxisCounter, yAxis: yAxisCounter, status: false })
        }
    }
    currentGeneration.forEach(currentItem => {
        var ItemFound = grid.find(item => item.xAxis === currentItem.xAxis && item.yAxis === currentItem.yAxis);
        var position = grid.indexOf(ItemFound);
        grid[position].status = true
    });
    grid.forEach(currentItem => {
        var aliveNeighbors = [];
        var currentItemsNeighbors = getAllNeighbors(currentItem);

        currentItemsNeighbors.forEach(singleNeighbor => {
            var neighborMatch = grid.find(element => element.xAxis === singleNeighbor[0] && element.yAxis === singleNeighbor[1]);
            if (neighborMatch !== undefined && neighborMatch.status === true) {
                aliveNeighbors.push(neighborMatch);
            }
        });
        if (currentItem.status === false && aliveNeighbors.length === 3) {
            newGeneration.push(currentItem)
        } else if (currentItem.status === true && (aliveNeighbors.length === 2 || aliveNeighbors.length === 3)) {
            newGeneration.push(currentItem)
        }
    });
    newGeneration.forEach(currentItem => {
        currentItem.status = true;
    });
    var display = createGridToDisplay(newGeneration)
    return { aliveCells: newGeneration, gridDisplay: display };
}
function getLowestAndHighest(arrayObj) {
    var allXAxis = [];
    var allYAxis = [];
    arrayObj.forEach(element => {
        allXAxis.push(element.xAxis);
        allYAxis.push(element.yAxis);
    });
    var lowestX = allXAxis.sort((a, b) => a - b)[0];
    var highestX = allXAxis.sort((a, b) => a - b)[allXAxis.length - 1];
    var lowestY = allYAxis.sort((a, b) => a - b)[0];
    var highestY = allYAxis.sort((a, b) => a - b)[allYAxis.length - 1];
    return { lowestX: lowestX, highestX: highestX, lowestY: lowestY, highestY: highestY }
}
function getAllNeighbors(object) {
    var allItsNeighbors = [
        [object.xAxis - 1, object.yAxis - 1],
        [object.xAxis - 1, object.yAxis + 1],
        [object.xAxis - 1, object.yAxis],
        [object.xAxis + 1, object.yAxis],
        [object.xAxis + 1, object.yAxis - 1],
        [object.xAxis + 1, object.yAxis + 1],
        [object.xAxis, object.yAxis - 1],
        [object.xAxis, object.yAxis + 1]];
    return allItsNeighbors;
}
function createGridToDisplay(aliveCells) {
    var gridToDisplay = [];
    for (let xAxisCounter = 0; xAxisCounter <= 19; xAxisCounter++) {
        for (let yAxisCounter = 0; yAxisCounter <= 19; yAxisCounter++) {
            gridToDisplay.push({ xAxis: xAxisCounter, yAxis: yAxisCounter, status: false })
        }
    }
    aliveCells.forEach(currentItem => {
        var itemFound = gridToDisplay.find(element => element.xAxis === currentItem.xAxis && element.yAxis === currentItem.yAxis);
        if (itemFound !== undefined) {
            gridToDisplay[gridToDisplay.indexOf(itemFound)].status = true;
        }
    });
    return gridToDisplay;
}
console.log(generateNextGeneration())
module.exports = { generateNextGeneration, getAllNeighbors, getLowestAndHighest }
