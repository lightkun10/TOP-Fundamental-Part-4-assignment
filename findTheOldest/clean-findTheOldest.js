let findTheOldest = function(people) {
    // use reduce
    return people.reduce((accumulator, currentValue) => {
        // compare the age
        let accumulatorAge = getAge(accumulator.yearOfDeath, accumulator.yearOfBirth);
        let currentAge = getAge(currentValue.yearOfDeath, currentValue.yearOfBirth);

        return accumulatorAge < currentAge ? currentValue : accumulator;
    })
}

let getAge = (death, birth) => {
    if(!death) {
        death = new Date().getFullYear()
    }

    return death - birth
}

module.exports = findTheOldest

function countingValleys(n, s) { // n = number of steps, s = string name
    // 8 UDDDUDUU
    s = s.split('');

    let currentLevel = 0;
    let valleys = 0;

    for(let i=0; i < n; i++) {
        if(s[i] === 'U') {
            currentLevel += 1
            if(currentLevel === 0) {valleys += 1}
        } else if(s[i] === 'D') {
            currentLevel -= 1
        }
    }

    return valleys;
}

// " _/\\\\ ""