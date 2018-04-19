function generateNextGeneration(currentGeneration) {
    var newGeneration = [];
    var WorkedOnCurrentGeneration = currentGeneration;
    var bored = [];
    if (WorkedOnCurrentGeneration === undefined) {
        bored = [{ xAxes: 0, yAxes: 0, status: false },
        { xAxes: 0, yAxes: 1, status: false },
        { xAxes: 0, yAxes: 2, status: false },
        { xAxes: 0, yAxes: 3, status: false },
        { xAxes: 0, yAxes: 4, status: false },
        { xAxes: 0, yAxes: 5, status: false },
        { xAxes: 1, yAxes: 0, status: false },
        { xAxes: 1, yAxes: 1, status: true },
        { xAxes: 1, yAxes: 2, status: true },
        { xAxes: 1, yAxes: 3, status: true },
        { xAxes: 1, yAxes: 4, status: false },
        { xAxes: 1, yAxes: 5, status: false },
        { xAxes: 2, yAxes: 0, status: false },
        { xAxes: 2, yAxes: 1, status: false },
        { xAxes: 2, yAxes: 2, status: false },
        { xAxes: 2, yAxes: 3, status: false },
        { xAxes: 2, yAxes: 4, status: false },
        { xAxes: 2, yAxes: 5, status: false },
        { xAxes: 3, yAxes: 0, status: false },
        { xAxes: 3, yAxes: 1, status: false },
        { xAxes: 3, yAxes: 2, status: false },
        { xAxes: 3, yAxes: 3, status: false },
        { xAxes: 3, yAxes: 4, status: false },
        { xAxes: 3, yAxes: 5, status: false },
        { xAxes: 4, yAxes: 0, status: false },
        { xAxes: 4, yAxes: 1, status: false },
        { xAxes: 4, yAxes: 2, status: true },
        { xAxes: 4, yAxes: 3, status: false },
        { xAxes: 4, yAxes: 4, status: false },
        { xAxes: 4, yAxes: 5, status: false },
        { xAxes: 5, yAxes: 0, status: false },
        { xAxes: 5, yAxes: 1, status: false },
        { xAxes: 5, yAxes: 2, status: true },
        { xAxes: 5, yAxes: 3, status: true },
        { xAxes: 5, yAxes: 4, status: false },
        { xAxes: 5, yAxes: 5, status: false }];
    } else {
        bored = currentGeneration;
    }
    bored.forEach(element => {
        var changedElement = { xAxes: element.xAxes, yAxes: element.yAxes, status: element.status }
        var aliveNeighbors = [];
        var deadNeighbors = [];
        var elementNeighbors = getAllNeighbors(element);
        elementNeighbors.forEach(eachItem => {
            for (var i = 0; i < bored.length; i++) {
                if (bored[i].xAxes === eachItem[0] && bored[i].yAxes === eachItem[1]) {
                    if (bored[i].status) {
                        aliveNeighbors.push(bored[i])
                    } else {
                        deadNeighbors.push(bored[i])
                    }
                }
            }
        })
        if (element.status === false && aliveNeighbors.length == 3) {
            changedElement.status = true;
            newGeneration.push(changedElement);
        }
        else if (element.status === true && aliveNeighbors.length < 2) {
            changedElement.status = false;
            newGeneration.push(changedElement);
        } else if (element.status == true && aliveNeighbors.length > 3) {
            changedElement.status = false;
            newGeneration.push(changedElement);
        }
        else {
            newGeneration.push(changedElement);
        }
    })
    return newGeneration;
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
    return allItsNeighbors;
}
module.exports = { generateNextGeneration, getAllNeighbors }