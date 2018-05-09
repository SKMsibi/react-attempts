function generateGameLayout(pathWays, enemies, weapons) {
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
    enemies.forEach(currentItem => {
        var enemyFound = gridTemp.find(element => {
            return element.xAxis === currentItem.xAxis && element.yAxis === currentItem.yAxis
        })
        gridTemp[gridTemp.indexOf(enemyFound)].occupied = "Enemy"
    });
    weapons.forEach(currentItem => {
        var weaponFound = gridTemp.find(element => {
            return element.xAxis === currentItem.xAxis && element.yAxis === currentItem.yAxis
        })
        gridTemp[gridTemp.indexOf(weaponFound)].occupied = "Weapon"
    });

    return gridTemp;

}
function changeUserLocation(pathWays, currentPosition, nextPosition, enemies, weapons) {
    var gridOfPathWays = pathWays;
    var setEnemies = enemies;
    var availableWeapons = weapons;
    var oldLocation = gridOfPathWays.find(item => item.xAxis === currentPosition.xAxis && item.yAxis === currentPosition.yAxis);
    var newLocation = gridOfPathWays.find(item => item.xAxis === nextPosition.xAxis && item.yAxis === nextPosition.yAxis)
    if (newLocation) {
        var enemyAttack = enemies.find(item => item.xAxis === newLocation.xAxis && item.yAxis === newLocation.yAxis);
        var weaponFound = weapons.find(item => item.xAxis === newLocation.xAxis && item.yAxis === newLocation.yAxis);
        if (enemyAttack !== undefined) {
            setEnemies = setEnemies.filter(singleEnemy => { return singleEnemy !== enemyAttack })
        } else if (weaponFound !== undefined) {
            availableWeapons = availableWeapons.filter(singleEnemy => { return singleEnemy !== weaponFound })
        }
        gridOfPathWays[gridOfPathWays.indexOf(oldLocation)].occupied = null;
        gridOfPathWays[gridOfPathWays.indexOf(newLocation)].occupied = "User";
    } else {
        newLocation = oldLocation
    }
    return { newGrid: gridOfPathWays, newPosition: { xAxis: newLocation.xAxis, yAxis: newLocation.yAxis }, newEnemies: setEnemies, leftWeapons: availableWeapons };
}
module.exports = { generateGameLayout, changeUserLocation };