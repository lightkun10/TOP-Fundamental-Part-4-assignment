const leapYears = function(num) {
    // if(num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)) {
    //     return true;
    // } else {
    //     return false;
    // }

    return num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)
}

module.exports = leapYears
