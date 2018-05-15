export const changeUserName = (name) => {
    return {
        type: "CHANGE_NAME",
        newValue: name
    }
}
export const changeGender = (gender) => {
    return {
        type: "CHANGE_GENDER",
        newValue: gender
    }
}
export const changeAge = (age) => {
    return {
        type: "CHANGE_AGE",
        newValue: age
    }
}
export const changeComment = (comment) => {
    return {
        type: "CHANGE_COMMENT",
        newValue: comment
    }
}

