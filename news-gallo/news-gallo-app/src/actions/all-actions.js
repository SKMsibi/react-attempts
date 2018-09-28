const changeLocation = (newLocation) => {
    return {
        type: "CHANGE_CURRENT_LOCATION",
        newValue: newLocation
    }
}
const changeNewsCategory = (newCategory) => {
    return {
        type: "CHANGE_CURRENT_NEWS_CATEGORY",
        newValue: newCategory
    }
}
module.exports = { changeLocation, changeNewsCategory };