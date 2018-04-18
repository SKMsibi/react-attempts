function generateNextGeneration(currentGeneration) {
    var WorkedOnCurrentGeneration = currentGeneration
    var bored = [];
    if (WorkedOnCurrentGeneration === undefined) {
        bored = [{ xAxes: 0, yAxes: 0, status: false },
        { xAxes: 0, yAxes: 1, status: false },
        { xAxes: 0, yAxes: 2, status: true },
        { xAxes: 0, yAxes: 3, status: false },
        { xAxes: 0, yAxes: 4, status: true },
        { xAxes: 0, yAxes: 5, status: false },
        { xAxes: 1, yAxes: 0, status: true },
        { xAxes: 1, yAxes: 1, status: false },
        { xAxes: 1, yAxes: 2, status: true },
        { xAxes: 1, yAxes: 3, status: false },
        { xAxes: 1, yAxes: 4, status: false },
        { xAxes: 1, yAxes: 5, status: true },
        { xAxes: 2, yAxes: 0, status: true },
        { xAxes: 2, yAxes: 1, status: true },
        { xAxes: 2, yAxes: 2, status: false },
        { xAxes: 2, yAxes: 3, status: false },
        { xAxes: 2, yAxes: 4, status: true },
        { xAxes: 2, yAxes: 5, status: false }];
    } else {
        bored = currentGeneration;
    }

    return "allItsNeighbors";
}
function getAllNeighbors(object) {
    var validItems = [];
    var allItsNeighbors = [
        [object.xAxes - 1, object.yAxes - 1],
        [object.xAxes - 1, object.yAxes + 1],
        [object.xAxes - 1, object.yAxes],
        [object.xAxes + 1, object.yAxes],
        [object.xAxes + 1, object.yAxes - 1],
        [object.xAxes + 1, object.yAxes + 1],
        [object.xAxes, object.yAxes - 1],
        [object.xAxes, object.yAxes + 1],
    ];
    allItsNeighbors.forEach(element => {
        if (element[0] >= 0 && element[1] >= 0) {
            validItems.push(element)
        }
    })
    return validItems;
}
console.log(generateNextGeneration())