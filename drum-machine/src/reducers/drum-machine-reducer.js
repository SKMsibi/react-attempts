export default function machineReducer(state = {
    AppStatus: false,
    allDrumMachines: {
        Drum: ["drum bass", "floor tom", "snare drum", "hanging toms", "hi-hat", "crash cymbal", "ride cymbal", "splash cymbal", "china cymbal"],
        Guitar: ["strong bass", "weak bass", "normal guitar", "violin high", "violin low"]
    },
    currentMachineSounds: [],
    currentMachineName: ""
}, action) {
    var newState = state;
    switch (action.type) {
        case "CHANGE_CURRENT_MACHINE":
            newState = { ...newState, currentMachineName: action.newValue }
            break;
        case "CHANGE_APP_STATUS":
            if (!action.newValue) {
                newState = { ...newState, AppStatus: action.newValue, currentMachineName: "", currentMachineSounds: [] }
            } else {
                newState = { ...newState, AppStatus: action.newValue, currentMachineName: "Drum", currentMachineSounds: state.allDrumMachines["Drum"] }
            }
            break;
        case "CHANGE_CURRENT_SOUNDS":
            newState = { ...state, currentMachineSounds: state.allDrumMachines[`${action.newValue}`] }
            break;
        default:
            newState = { ...newState }
            break;
    }
    return newState;
}

