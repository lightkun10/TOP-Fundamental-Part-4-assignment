let repeatString = function(str, times) {
    if (times < 0) return 'ERROR';
    let string = '';
    for(i = 0; i < times; i++) {
        string += str
    }
    return string
} 

  module.exports = repeatString
