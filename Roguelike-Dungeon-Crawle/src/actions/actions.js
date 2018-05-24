const changeUserWeapon = (weaponName) => {
    return {
        type: "CHANGE_CURRENT_USED_WEAPON",
        newValue: weaponName
    }
}
const changeUserPosition = (obj) => {
    return {
        type: "CHANGE_USER_POSITION",
        newValue: obj
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
    changeStage, changeLifeLeft, changeUserPosition, changeUserWeapon
}