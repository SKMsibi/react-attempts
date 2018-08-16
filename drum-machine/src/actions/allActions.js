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

module.exports = { switchAppOnOrOff, changeCurrentMachine, changeCurrentMachineSounds }