function generateGameLayout(pathWays, enemies, weapons, health, doorWay, boss = { xAxis: 3, yAxis: 3 }, stage) {
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
            gridTemp[gridTemp.indexOf(itemFound)].occupied = element.occupied;
            element.life ? gridTemp[gridTemp.indexOf(itemFound)].life = element.life : null
        }
    })
    health.forEach(currentItem => {
        var healthFound = gridTemp.find(element => {
            return element.xAxis === currentItem.xAxis && element.yAxis === currentItem.yAxis
        })
        if (gridTemp[gridTemp.indexOf(healthFound)]) {
            gridTemp[gridTemp.indexOf(healthFound)].occupied = "Health"
        }
    });
    enemies.forEach(currentItem => {
        var enemyFound = gridTemp.find(element => {
            return element.xAxis === currentItem.xAxis && element.yAxis === currentItem.yAxis
        })
        if (gridTemp[gridTemp.indexOf(enemyFound)]) {
            gridTemp[gridTemp.indexOf(enemyFound)].occupied = "Enemy";
            !gridTemp[gridTemp.indexOf(enemyFound)].life ? gridTemp[gridTemp.indexOf(enemyFound)].life = 50 : gridTemp[gridTemp.indexOf(enemyFound)].life;
        }
    });
    weapons.forEach(currentItem => {
        var weaponFound = gridTemp.find(element => {
            return element.xAxis === currentItem.xAxis && element.yAxis === currentItem.yAxis
        })
        if (gridTemp[gridTemp.indexOf(weaponFound)]) {
            gridTemp[gridTemp.indexOf(weaponFound)].occupied = "Weapon";
        }
    });
    if (doorWay) {
        var doorLocation = gridTemp.find(currentItem => doorWay.xAxis === currentItem.xAxis && doorWay.yAxis === currentItem.yAxis);
        if (gridTemp[gridTemp.indexOf(doorLocation)]) {
            gridTemp[gridTemp.indexOf(doorLocation)].occupied = "DoorWay"
        }
    }
    if (stage === 4) {
        var bossNewLocation = gridTemp.find(element => element.xAxis === boss.xAxis && element.yAxis === boss.yAxis);
        var door = gridTemp.find(element => element.xAxis === doorWay.xAxis && element.yAxis === doorWay.yAxis);
        bossNewLocation ? gridTemp[gridTemp.indexOf(bossNewLocation)].occupied = "Boss" : null;
        !gridTemp[gridTemp.indexOf(bossNewLocation)].life ? gridTemp[gridTemp.indexOf(bossNewLocation)].life = 200 : gridTemp[gridTemp.indexOf(bossNewLocation)].life;
    }
    return gridTemp;
}
function changeUserLocation(pathWays, currentPosition, nextPosition, enemies, weapons, health, lifeRemaining, weapon, door, boss, gamePoints) {
    var gridOfPathWays = pathWays;
    var lifeLeft = lifeRemaining;
    var points = gamePoints;
    var doorWay = door;
    var Boss = boss;
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
        } else if (Boss && Boss.xAxis === newLocation.xAxis && Boss.yAxis === newLocation.yAxis) {
            gridOfPathWays[gridOfPathWays.indexOf(newLocation)].life = gridOfPathWays[gridOfPathWays.indexOf(newLocation)].life - currentWeapon;
            lifeLeft = lifeLeft <= 0 ? 0 : lifeLeft -= 50;
            if (gridOfPathWays[gridOfPathWays.indexOf(newLocation)].life > 0) {
                gridOfPathWays[gridOfPathWays.indexOf(oldLocation)].occupied = "User";
                gridOfPathWays[gridOfPathWays.indexOf(newLocation)].occupied = "Boss";
                newLocation = oldLocation
            } else {
                gridOfPathWays[gridOfPathWays.indexOf(oldLocation)].occupied = null;
                gridOfPathWays[gridOfPathWays.indexOf(newLocation)].occupied = "User";
                points += 20;
            }
        }
        if (enemyAttack) {
            gridOfPathWays[gridOfPathWays.indexOf(newLocation)].life = gridOfPathWays[gridOfPathWays.indexOf(newLocation)].life - currentWeapon;
            lifeLeft = lifeLeft <= 0 ? 0 : lifeLeft -= 15;
            if (gridOfPathWays[gridOfPathWays.indexOf(newLocation)].life > 0) {
                gridOfPathWays[gridOfPathWays.indexOf(oldLocation)].occupied = "User";
                gridOfPathWays[gridOfPathWays.indexOf(newLocation)].occupied = "Enemy";
                newLocation = oldLocation
            } else {
                setEnemies = setEnemies.filter(singleEnemy => { return singleEnemy !== enemyAttack })
                gridOfPathWays[gridOfPathWays.indexOf(oldLocation)].occupied = null;
                gridOfPathWays[gridOfPathWays.indexOf(newLocation)].occupied = "User";
                points += 20;
            }
        } else {
            gridOfPathWays[gridOfPathWays.indexOf(oldLocation)].occupied = null;
            gridOfPathWays[gridOfPathWays.indexOf(newLocation)].occupied = "User";
        }
    } else {
        newLocation = oldLocation
    }
    return { newGrid: gridOfPathWays, newPosition: { xAxis: newLocation.xAxis, yAxis: newLocation.yAxis }, newEnemies: setEnemies, leftWeapons: availableWeapons, healthLeft: healthAvailable, newLifeStatus: lifeLeft, doorWay: doorWay, boss: Boss, gamePoints: points };
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
function createTheBoss(setOfEnemies) {
    var enemies = setOfEnemies;
    var bossLocation = setOfEnemies[setOfEnemies.length - 1];
    enemies.splice(enemies.indexOf(bossLocation), 1);
    return { boss: bossLocation, newEnemies: enemies }
}
function showSmallGrid(playerLocation, entireGrid) {
    var validClearAreas = [];
    var validBlurryAreas = [];
    const clearAreas = [
        [playerLocation.xAxis + 1, playerLocation.yAxis - 1],
        [playerLocation.xAxis + 1, playerLocation.yAxis],
        [playerLocation.xAxis + 1, playerLocation.yAxis + 1],
        [playerLocation.xAxis, playerLocation.yAxis - 1],
        [playerLocation.xAxis, playerLocation.yAxis + 1],
        [playerLocation.xAxis - 1, playerLocation.yAxis - 1],
        [playerLocation.xAxis - 1, playerLocation.yAxis],
        [playerLocation.xAxis + 1, playerLocation.yAxis + 1],
    ]
    const blurryAreas = [
        [playerLocation.xAxis + 2, playerLocation.yAxis - 2],
        [playerLocation.xAxis + 2, playerLocation.yAxis - 1],
        [playerLocation.xAxis + 2, playerLocation.yAxis],
        [playerLocation.xAxis + 2, playerLocation.yAxis + 1],
        [playerLocation.xAxis + 2, playerLocation.yAxis + 2],
        [playerLocation.xAxis + 1, playerLocation.yAxis - 2],
        [playerLocation.xAxis + 1, playerLocation.yAxis + 2],
        [playerLocation.xAxis, playerLocation.yAxis - 2],
        [playerLocation.xAxis, playerLocation.yAxis + 1],
        [playerLocation.xAxis - 1, playerLocation.yAxis - 2],
        [playerLocation.xAxis - 1, playerLocation.yAxis + 2],
        [playerLocation.xAxis - 2, playerLocation.yAxis - 2],
        [playerLocation.xAxis - 2, playerLocation.yAxis - 1],
        [playerLocation.xAxis - 2, playerLocation.yAxis],
        [playerLocation.xAxis - 2, playerLocation.yAxis + 1],
        [playerLocation.x - 2, playerLocation.yAxis + 2],
    ]
    console.log("entireGrid", entireGrid)
    // clearAreas.forEach(element => {
    //     var cellFound = entireGrid.find(item => element[0] === entireGrid.xAxis && element[1] === element.yAxis);
    //     validClearAreas.push(cellFound);
    // });
    // blurryAreas.forEach(element => {
    //     var cellFound = entireGrid.find(element => element[0] === entireGrid.xAxis && element[1] === element.yAxis);
    //     validBlurryAreas.push(cellFound);
    // });
    // console.log(validBlurryAreas, validClearAreas)
}
module.exports = { generateGameLayout, changeUserLocation, placeAtRandom, createTheBoss, showSmallGrid };