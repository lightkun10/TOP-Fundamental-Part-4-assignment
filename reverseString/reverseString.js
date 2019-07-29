const reverseString = function(word) {
    let newString = '';
    for(i = word.length - 1; i>= 0; i--) {
        newString = newString + word[i]
    }

    return newString;
}

module.exports = reverseString

//hello = 5 length
       // 4 position, because it started from 0 to 4 not 5;

// let word = "hello panda", word[2], l