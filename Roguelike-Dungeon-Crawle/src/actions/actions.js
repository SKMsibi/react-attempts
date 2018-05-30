const changeUserWeapon = (weaponName) => {
    return {
        type: "CHANGE_CURRENT_USED_WEAPON",
        newValue: weaponName
    }
}
const changeCurrentPoints = (num) => {
    return {
        type: "CHANGE_USER_POINTS",
        newValue: num
    }
}
const changeLevel = (num) => {
    return {
        type: "CHANGE_LEVEL",
        newValue: num + 1
    }
}
const changeStage = (stageNum, stages) => {
    return {
        type: "CHANGE_STAGE",
        newValue: stages[stageNum + 1]
    }
}
const changeLifeLeft = (lifeAmount) => {
    return {
        type: "CHANGE_REMAINING_LIFE",
        newValue: lifeAmount
    }
}
module.exports = {
    changeStage, changeLifeLeft, changeCurrentPoints, changeUserWeapon, changeLevel
}