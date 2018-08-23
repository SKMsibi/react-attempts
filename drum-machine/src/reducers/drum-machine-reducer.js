export default function machineReducer(state = {
    AppStatus: false,
    allDrumMachines: {
        Drum: ["cajonBass", "hietom", "tabla", "hitom", "marimba", "crash", "electricKick", "steel", "snr"],
        Guitar: ["base", "countryChord", "fuzzyNote", "guitarPluck", "shortWarm", "Unknown", "Unknown", "Unknown", "Unknown"],
        Piano: ["bluesPiano", "darkHouse", "dirtyHigh", "fugged", "organLow", "superCheez", "thickChord", "twoTone", "accoor"]
    },
    currentMachineSounds: [],
    currentMachineName: "",
    lastSoundPlay: ""
}, action) {
    var newState = state;
    switch (action.type) {
        case "CHANGE_CURRENT_MACHINE":
            newState = { ...newState, currentMachineName: action.newValue, lastSoundPlay: "" }
            break;
        case "CHANGE_APP_STATUS":
            if (!action.newValue) {
                newState = { ...newState, AppStatus: action.newValue, currentMachineName: "", currentMachineSounds: [], lastSoundPlay: "" }
            } else {
                newState = { ...newState, AppStatus: action.newValue, currentMachineName: "Drum", currentMachineSounds: state.allDrumMachines["Drum"] }
            }
            break;
        case "CHANGE_CURRENT_SOUNDS":
            newState = { ...state, currentMachineSounds: state.allDrumMachines[`${action.newValue}`] }
            break;
        case "CHANGE_LAST_PLAYED":
            newState = { ...state, lastSoundPlay: action.newValue };
            break;
        default:
            newState = { ...newState }
            break;
    }
    return newState;
}

