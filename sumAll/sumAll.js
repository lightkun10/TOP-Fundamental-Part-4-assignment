const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0) return 'ERROR';
    
    if(typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR'
    
    // if(Array.isArray(num1) === false || Array.isArray(num2) === false) return 'ERROR'

    // if (num1 > num2) {
    //     const temp = num1;
    //     num1 = num2;
    //     num2 = temp;
    //   }

    if (num1 > num2) {
        // make it backward
        const temp = num1;
        num1 = num2
        num2 = temp;
    }
    
    let count = 0;
    for(i = num1; i < num2 + 1; i++) {
        count += i
    }

    return count;
}

// sumAll(1, 4) //  1 + 2 + 3 + 4 = 10
// sumAll(2, 5) // 2 + 3 + 4 + 5 = 14
// sumAll(3, 6) // 3 + 4 + 5 + 6 = 

module.exports = sumAll
