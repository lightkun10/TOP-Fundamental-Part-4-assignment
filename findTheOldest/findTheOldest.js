let findTheOldest = function(people) {
    // use reduce
    return people.reduce((accumulator, currentValue) => {
        // compare the age
        if(!accumulator.yearOfDeath) {
            accumulator.yearOfDeath = new Date().getFullYear()
            let accumulatorAge = accumulator.yearOfDeath - accumulator.yearOfBirth;
            let currentAge = currentValue.yearOfDeath - currentValue.yearOfBirth
            return accumulatorAge < currentAge ? currentValue : accumulator
        } else {
            let accumulatorAge = accumulator.yearOfDeath - accumulator.yearOfBirth;
            let currentAge = currentValue.yearOfDeath - currentValue.yearOfBirth
    
            return accumulatorAge < currentAge ? currentValue : accumulator
        }
    })
}

module.exports = findTheOldest