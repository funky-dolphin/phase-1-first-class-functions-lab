const returnFirstTwoDrivers = function(names){
    return names.slice(0,2)
}

const returnLastTwoDrivers = function(names){
    return names.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    return function(fare){
        return fare*number
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler =createFareMultiplier(3)

function selectDifferentDrivers(drivers=[],action){
    if (action == returnFirstTwoDrivers)
        return returnFirstTwoDrivers(drivers)
    else (action == returnLastTwoDrivers)
        return returnLastTwoDrivers(drivers)

    }