function generateGameLayout(pathWays, enemies, weapons, health, doorWay) {
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
    health.forEach(currentItem => {
        var healthFound = gridTemp.find(element => {
            return element.xAxis === currentItem.xAxis && element.yAxis === currentItem.yAxis
        })
        if (gridTemp[gridTemp.indexOf(healthFound)] !== undefined) {
            gridTemp[gridTemp.indexOf(healthFound)].occupied = "Health"
        }
    });
    enemies.forEach(currentItem => {
        var enemyFound = gridTemp.find(element => {
            return element.xAxis === currentItem.xAxis && element.yAxis === currentItem.yAxis
        })
        if (gridTemp[gridTemp.indexOf(enemyFound)] !== undefined) {
            gridTemp[gridTemp.indexOf(enemyFound)].occupied = "Enemy";
            gridTemp[gridTemp.indexOf(enemyFound)].life = 50
        }
    });
    weapons.forEach(currentItem => {
        var weaponFound = gridTemp.find(element => {
            return element.xAxis === currentItem.xAxis && element.yAxis === currentItem.yAxis
        })
        if (gridTemp[gridTemp.indexOf(weaponFound)] !== undefined) {
            gridTemp[gridTemp.indexOf(weaponFound)].occupied = "Weapon";
        }
    });
    if (doorWay) {
        var doorLocation = gridTemp.find(currentItem => doorWay.xAxis === currentItem.xAxis && doorWay.yAxis === currentItem.yAxis);
        if (gridTemp[gridTemp.indexOf(doorLocation)] !== undefined) {
            gridTemp[gridTemp.indexOf(doorLocation)].occupied = "DoorWay"
        }
    }
    return gridTemp;
}
function changeUserLocation(pathWays, currentPosition, nextPosition, enemies, weapons, health, lifeRemaining, weapon, door) {
    var gridOfPathWays = pathWays;
    var lifeLeft = lifeRemaining;
    var doorWay = door;
    var setEnemies = enemies;
    var availableWeapons = weapons;
    var currentWeapon = availableWeapons.length < 1 ? weapon.impact : 0;
    var healthAvailable = health;
    var oldLocation = gridOfPathWays.find(item => item.xAxis === currentPosition.xAxis && item.yAxis === currentPosition.yAxis);
    var newLocation = gridOfPathWays.find(item => item.xAxis === nextPosition.xAxis && item.yAxis === nextPosition.yAxis);
    if (newLocation) {
        var enemyAttack = enemies.find(item => item.xAxis === newLocation.xAxis && item.yAxis === newLocation.yAxis);
        var weaponFound = weapons.find(item => item.xAxis === newLocation.xAxis && item.yAxis === newLocation.yAxis);
        var healthFound = health.find(item => item.xAxis === newLocation.xAxis && item.yAxis === newLocation.yAxis);
        if (weaponFound !== undefined) {
            availableWeapons = availableWeapons.filter(singleWeapon => { return singleWeapon !== weaponFound })
        } else if (healthFound !== undefined) {
            healthAvailable = healthAvailable.filter(singleHealth => { return singleHealth !== healthFound });
            lifeLeft += 50;
        } else if (doorWay.xAxis === newLocation.xAxis && doorWay.yAxis === newLocation.yAxis) {
            doorWay.usedOrNot = true;
        }
        if (enemyAttack !== undefined) {
            gridOfPathWays[gridOfPathWays.indexOf(newLocation)].life = gridOfPathWays[gridOfPathWays.indexOf(newLocation)].life - currentWeapon;
            lifeLeft <= 0 ? alert("You where killed by a demon") : lifeLeft -= 25;
            lifeLeft = lifeLeft - gridOfPathWays[gridOfPathWays.indexOf(newLocation)].life;
            gridOfPathWays[gridOfPathWays.indexOf(oldLocation)].occupied = "User";
            gridOfPathWays[gridOfPathWays.indexOf(newLocation)].occupied = "Enemy";
            newLocation = oldLocation
        } else {
            gridOfPathWays[gridOfPathWays.indexOf(oldLocation)].occupied = null;
            gridOfPathWays[gridOfPathWays.indexOf(newLocation)].occupied = "User";
        }
    } else {
        newLocation = oldLocation
    }
    return { newGrid: gridOfPathWays, newPosition: { xAxis: newLocation.xAxis, yAxis: newLocation.yAxis }, newEnemies: setEnemies, leftWeapons: availableWeapons, healthLeft: healthAvailable, newLifeStatus: lifeLeft, doorWay: doorWay };
}
function placeAtRandom(pathWays) {
    var usedLocations = [];
    while (usedLocations.length < 8) {
        var randomNum = Math.floor(Math.random() * pathWays.length);
        if (pathWays[randomNum].occupied !== "User" && usedLocations.indexOf(pathWays[randomNum]) === -1) {
            if (pathWays[randomNum].xAxis !== 6 && pathWays[randomNum].yAxis !== 3) {
                usedLocations.push(pathWays[randomNum])
            }
        }
    }
    var results = { enemies: usedLocations.slice(0, 3), health: usedLocations.slice(3, 6), weapon: usedLocations.slice(6, 7), doorWay: usedLocations.slice(7, 8)[0] };
    return results;
}
module.exports = { generateGameLayout, changeUserLocation, placeAtRandom };