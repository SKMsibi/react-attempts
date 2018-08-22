const switchAppOnOrOff = (status) => {
    return {
        type: "CHANGE_APP_STATUS",
        newValue: status
    }
}
const changeCurrentMachine = (name) => {
    return {
        type: "CHANGE_CURRENT_MACHINE",
        newValue: name
    }
}
const changeCurrentMachineSounds = (list) => {
    return {
        type: "CHANGE_CURRENT_SOUNDS",
        newValue: list
    }
}
const changeLastPlayedSound = (newLastPlayedSound) => {
    return {
        type: "CHANGE_LAST_PLAYED",
        newValue: newLastPlayedSound
    }
}
module.exports = { switchAppOnOrOff, changeLastPlayedSound, changeCurrentMachine, changeCurrentMachineSounds }