export const changeUserWeapon = (weaponName) => {
    return {
        type: "CHANGE_CURRENT_USED_WEAPON",
        newValue: weaponName
    }
}
export const changeUserPosition = (obj) => {
    return {
        type: "CHANGE_USER_POSITION",
        newValue: obj
    }
}
export const changeStage = (stageNum) => {
    return {
        type: "CHANGE_STAGE",
        newValue: stageNum
    }
}
export const changeExistingEnemies = (comment) => {
    return {
        type: "CHANGE_ENEMIES",
        newValue: comment
    }
}

