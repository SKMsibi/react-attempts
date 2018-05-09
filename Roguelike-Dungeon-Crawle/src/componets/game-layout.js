function generateGameLayout(pathWays) {
    var gridTemp = [];
    var pathWaysToMove = pathWays
    for (let index = 0; index <= 10; index++) {
        for (let secondIndex = 0; secondIndex <= 9; secondIndex++) {
            gridTemp.push({ xAxis: index, yAxis: secondIndex, pathWay: false, occupied: null });
        }
    }
    pathWaysToMove.forEach(element => {
        var itemFound = gridTemp.find(item => item.xAxis === element.xAxis && item.yAxis === element.yAxis);
        if (itemFound) {
            gridTemp[gridTemp.indexOf(itemFound)].pathWay = true;
            gridTemp[gridTemp.indexOf(itemFound)].occupied = element.occupied
        }
    })
    return gridTemp;

}
function changeUserLocation(pathWays, currentPosition, nextPosition) {
    var gridOfPathWays = pathWays;
    var oldLocation = gridOfPathWays.find(item => item.xAxis === currentPosition.xAxis && item.yAxis === currentPosition.yAxis);
    var newLocation = gridOfPathWays.find(item => item.xAxis === nextPosition.xAxis && item.yAxis === nextPosition.yAxis)
    if (newLocation) {
        gridOfPathWays[gridOfPathWays.indexOf(oldLocation)].occupied = null;
        gridOfPathWays[gridOfPathWays.indexOf(newLocation)].occupied = "User";
    } else {
        newLocation = oldLocation
    }
    return { newGrid: gridOfPathWays, newPosition: { xAxis: newLocation.xAxis, yAxis: newLocation.yAxis } };
}
module.exports = { generateGameLayout, changeUserLocation }